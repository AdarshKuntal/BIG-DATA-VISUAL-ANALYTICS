const data = [
    { year: "2010", users: 45, interactions: 14, avgInteraction: 0.311, events: "Early Facebook adoption; religious festival posts" },
    { year: "2011", users: 48, interactions: 210, avgInteraction: 4.375, events: "Gradual increase in religious awareness" },
    { year: "2012", users: 51, interactions: 2150, avgInteraction: 42.157, events: "Rising user base; early conflict content" },
    { year: "2013", users: 59, interactions: 5650, avgInteraction: 95.763, events: "Increased communal tensions" },
    { year: "2014", users: 65, interactions: 4600, avgInteraction: 70.769, events: "Posts triggering communal violence" },
    { year: "2015", users: 71, interactions: 3500, avgInteraction: 49.296, events: "Growth in festival/awareness posts" },
    { year: "2016", users: 78, interactions: 2400, avgInteraction: 30.769, events: "Rise of Hindu nationalist presence" },
    { year: "2017", users: 100, interactions: 9100, avgInteraction: 91.000, events: "Ayodhya verdict; communal clashes" },
    { year: "2018", users: 200, interactions: 5600, avgInteraction: 28.000, events: "Selective moderation challenges" },
    { year: "2019", users: 300, interactions: 5500, avgInteraction: 18.333, events: "Hate speech content increases" },
    { year: "2020", users: 310, interactions: 8600, avgInteraction: 27.742, events: "COVID virtual activities; Delhi riots" },
    { year: "2021", users: 320, interactions: 2080, avgInteraction: 6.500, events: "Inflammatory content spikes" },
    { year: "2022", users: 450, interactions: 15700, avgInteraction: 34.889, events: "Govt crackdown on hate speech" },
    { year: "2023", users: 560, interactions: 10800, avgInteraction: 19.286, events: "Religious outreach continues" },
    { year: "2024", users: 585, interactions: 6060, avgInteraction: 10.359, events: "Increased regulatory scrutiny" },
    { year: "2025", users: 500, interactions: 20800, avgInteraction: 41.600, events: "India-Pakistan conflict triggers spike" }
];

// Set up dimensions
const margin = { top: 50, right: 80, bottom: 80, left: 60 };
const width = 900 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("#combined-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Create tooltip
const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip2")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("z-index", "10000");

// Scales
const xScale = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, width])
    .padding(0.2);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => Math.max(d.users, d.interactions)) * 1.1])
    .range([height, 0])
    .nice();

const yScaleLine = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.avgInteraction) * 1.2])
    .range([height, 0])
    .nice();

// Axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale).ticks(6);
const yAxisLine = d3.axisRight(yScaleLine).ticks(5);

// Draw axes
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "middle");

svg.append("g")
    .attr("class", "y-axis")
    .call(yAxis);

// Add axis labels
svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Count (Users in Millions, Interactions in Thousands)");

svg.append("text")
    .attr("class", "axis-label")
    .attr("transform", `translate(${width + 40}, ${height / 2}) rotate(-90)`)
    .style("text-anchor", "middle")
    .text("Avg. Interaction per Million Users");

// Draw bars for users
svg.selectAll(".user-bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "user-bar")
    .attr("x", d => xScale(d.year))
    .attr("y", d => yScale(d.users))
    .attr("width", xScale.bandwidth() / 2)
    .attr("height", d => height - yScale(d.users))
    .attr("fill", "#3182ce")
    .attr("opacity", 0.8)
    .on("mouseover", function(event) {
        const d = d3.select(this).datum();
        tooltip
            .style("opacity", 1)
            .html(`
                <h3>${d.year}</h3>
                <p>Total Indian Users: <span class="value">${d.users}M</span></p>
                <p>(on a 'Jai Shree Ram' post)</p>
                <p>Total Interactions: <span class="value">${d.interactions} over 1000 posts</span></p>
                <p>Avg. Interaction: <span class="value">${d.avgInteraction.toFixed(2)} per million users</span></p>
                <p><em>${d.events}</em></p>
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 100) + "px");
    })
    .on("mouseout", function() {
        tooltip.style("opacity", 0);
    })

// Draw bars for interactions
svg.selectAll(".interaction-bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "interaction-bar")
    .attr("x", d => xScale(d.year) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.interactions))
    .attr("width", xScale.bandwidth() / 2)
    .attr("height", d => height - yScale(d.interactions))
    .attr("fill", "#e53e3e")
    .attr("opacity", 0.8)
    .on("mouseover", function(event) {
        const d = d3.select(this).datum();
        tooltip
            .style("opacity", 1)
            .html(`
                <h3>${d.year}</h3>
                <p>Total Indian Users: <span class="value">${d.users}M</span></p>
                <p>(on a 'Jai Shree Ram' post)</p>
                <p>Total Interactions: <span class="value">${d.interactions} over 1000 posts</span></p>
                <p>Avg. Interaction: <span class="value">${d.avgInteraction.toFixed(2)} per million users</span></p>
                <p><em>${d.events}</em></p>
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 100) + "px");
    })
    .on("mouseout", function() {
        tooltip.style("opacity", 0);
    })
    
// Draw line for average interaction
const line = d3.line()
    .x(d => xScale(d.year) + xScale.bandwidth() / 2)
    .y(d => yScaleLine(d.avgInteraction));

svg.append("path")
    .datum(data)
    .attr("class", "avg-line")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#38a169")
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "5,5");

// Add points to the line
svg.selectAll(".line-point")
    .data(data)
    .enter().append("circle")
    .attr("class", "line-point")
    .attr("cx", d => xScale(d.year) + xScale.bandwidth() / 2)
    .attr("cy", d => yScaleLine(d.avgInteraction))
    .attr("r", 5)
    .attr("fill", "#38a169")
    .on("mouseover", function(event) {
        const d = d3.select(this).datum();
        tooltip
            .style("opacity", 1)
            .html(`
                <h3>${d.year}</h3>
                <p>Avg. Interaction: <span class="value">${d.avgInteraction.toFixed(2)} per million users</span></p>
                <p>(on a 'Jai Shree Ram' post)</p>
                <p>Total Interactions: <span class="value">${d.interactions} over 1000 posts</span></p>
                <p>User Base: <span class="value">${d.users}M</span></p>
                <p><em>${d.events}</em></p>
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 100) + "px");
    })
    .on("mouseout", function() {
        tooltip.style("opacity", 0);
    })

// Add right axis for line
svg.append("g")
    .attr("class", "y-axis-right")
    .attr("transform", `translate(${width},0)`)
    .call(yAxisLine);

// Add chart title
svg.append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("fill", "#2c5282")
    .style("font-weight", "bold")
    .text("Facebook Religious Engagement Analysis");

// Add annotation for 2017 spike
svg.append("text")
    .attr("x", xScale("2017") + xScale.bandwidth() / 2)
    .attr("y", yScaleLine(91) - 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#c53030")
    .text("Ayodhya Verdict");

// Add annotation for 2020
svg.append("text")
    .attr("x", xScale("2020") + xScale.bandwidth() / 2)
    .attr("y", yScaleLine(27.742) - 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#c53030")
    .text("COVID & Delhi Riots");

// Add annotation for 2025
svg.append("text")
    .attr("x", xScale("2025") + xScale.bandwidth() / 2)
    .attr("y", yScaleLine(41.6) - 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#c53030")
    .text("India-Pak Conflict");

// Toggle buttons functionality
document.getElementById("toggleInteractions").addEventListener("click", function() {
    this.classList.add("active");
    document.getElementById("toggleNormalized").classList.remove("active");
    
    // Update yScale domain
    yScale.domain([0, d3.max(data, d => Math.max(d.users, d.interactions)) * 1.1]);
    
    // Update bars
    svg.selectAll(".user-bar")
        .transition()
        .duration(800)
        .attr("y", d => yScale(d.users))
        .attr("height", d => height - yScale(d.users));
    
    svg.selectAll(".interaction-bar")
        .transition()
        .duration(800)
        .attr("y", d => yScale(d.interactions))
        .attr("height", d => height - yScale(d.interactions));
    
    // Update y-axis
    svg.select(".y-axis")
        .transition()
        .duration(800)
        .call(yAxis);
});

document.getElementById("toggleNormalized").addEventListener("click", function() {
    this.classList.add("active");
    document.getElementById("toggleInteractions").classList.remove("active");
    
    // Normalize interactions to per million users
    const normalizedData = data.map(d => ({
        ...d,
        normalizedInteractions: d.interactions / d.users
    }));
    
    // Find max for scaling
    const maxValue = d3.max(normalizedData, d => Math.max(d.users, d.normalizedInteractions * 1000));
    
    // Update yScale domain
    yScale.domain([0, maxValue * 1.1]);
    
    // Update bars
    svg.selectAll(".user-bar")
        .transition()
        .duration(800)
        .attr("y", d => yScale(d.users))
        .attr("height", d => height - yScale(d.users));
    
    svg.selectAll(".interaction-bar")
        .transition()
        .duration(800)
        .attr("y", d => yScale((d.interactions / d.users) * 1000))
        .attr("height", d => height - yScale((d.interactions / d.users) * 1000));
    
    // Update y-axis
    svg.select(".y-axis")
        .transition()
        .duration(800)
        .call(yAxis);
});