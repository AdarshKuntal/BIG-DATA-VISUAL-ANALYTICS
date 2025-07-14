Promise.all([
    d3.csv("assets/data/social_media_top10_avg_per_year.csv"),
]).then(function(files) {
    makeBumpChart(files[0]);
}).catch(console.error);

function makeBumpChart(dataset) {
    // Clean and parse data
    dataset.forEach(d => {
        d.Class = d.Platform.toLowerCase()
            .replace(/[ .\/+!:,()'"\\]/g, '-')
            .replace(/-+/g, '-')
            .replace(/-$/, '');
        d.Rank = +d.Rank;
        d.Units = +d.Units;
    });

    const margin = { top: 35, right: 50, bottom: 50, left: 60 };
    const width = 1175 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    const svg = d3.select("#make-bump-chart").html("")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const years = Array.from(new Set(dataset.map(d => d.Year))).sort();
    const ranks = Array.from(new Set(dataset.map(d => d.Rank))).sort((a, b) => a - b);

    const x = d3.scaleBand()
        .domain(years)
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([d3.max(ranks) + 0.5, d3.min(ranks) - 0.5])
        .range([height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y).tickValues(ranks);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Define patterns for logos
    const defs = svg.append("defs");
    const uniqueClasses = Array.from(new Set(dataset.map(d => d.Class)));

    uniqueClasses.forEach(cls => {
        defs.append("pattern")
            .attr("id", `${cls}-logo`)
            .attr("width", 1)
            .attr("height", 1)
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("width", 1)
            .attr("height", 1)
            .attr("preserveAspectRatio", "xMidYMid slice")
            .attr("href", `assets/images/${cls}.png`);
    });

    // Line generator
    const line = d3.line()
        .x(d => x(d.Year) + x.bandwidth() / 2)
        .y(d => y(d.Rank));

    const groupedData = d3.groups(dataset, d => d.Platform);

    // Draw connecting lines
    groupedData.forEach(([platform, data]) => {
        const cls = data[0].Class;  // get class name from first element
        svg.append("path")
            .datum(data)
            .attr("class", `bump-line ${cls}-line`)
            .attr("fill", "none")
            .attr("stroke", "#333")
            .attr("stroke-width", 2)
            .attr("stroke-opacity", 0.7)
            .attr("d", line);
    });

    // Draw logo circles
    svg.selectAll(".logo-circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class", d => `logo-circle ${d.Class}-circle`)
        .attr("cx", d => x(d.Year) + x.bandwidth() / 2)
        .attr("cy", d => y(d.Rank))
        .attr("r", 12)
        .attr("fill", d => `url(#${d.Class}-logo)`)
        .attr("stroke", "#333")
        .attr("stroke-width", 0.6)
        .attr("opacity", 0.95);

    // Tooltip
    const tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");

        svg.selectAll(".logo-circle")
        .on("mouseover", function(event, d) {
            tooltip
                .style("visibility", "visible")
                .html(`
                    <strong>${d.Platform}</strong><br/>
                    Year: ${d.Year}<br/>
                    Rank: ${d.Rank}<br/>
                    Share: ${d.Units.toFixed(4)}%
                `);
    
            // Highlight only the hovered platform's line (make stroke darker and wider)
            d3.select(`.${d.Class}-line`)
                .attr("stroke", "#000")      // darker
                .attr("stroke-width", 4);    // thicker
        })
        .on("mousemove", function(event) {
            tooltip
                .style("top", (event.pageY - 20) + "px")
                .style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function(event, d) {
            tooltip.style("visibility", "hidden");
    
            // Reset only the hovered platform’s line
            d3.select(`.${d.Class}-line`)
                .attr("stroke", "#333")
                .attr("stroke-width", 2);
        });
    }    
