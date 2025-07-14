const data2 = [
    { Platform: "Instagram", Short_Form_Video_Percent: 65.0, Long_Form_Video_Percent: 15.0, Images_Percent: 45.0, Text_Posts_Percent: 8.0, Stories_Percent: 75.0, Live_Streaming_Percent: 12.0, Audio_Content_Percent: 5.0 },
    { Platform: "YouTube", Short_Form_Video_Percent: 25.0, Long_Form_Video_Percent: 85.0, Images_Percent: 5.0, Text_Posts_Percent: 2.0, Stories_Percent: 0.0, Live_Streaming_Percent: 25.0, Audio_Content_Percent: 15.0 },
    { Platform: "Facebook", Short_Form_Video_Percent: 35.0, Long_Form_Video_Percent: 25.0, Images_Percent: 55.0, Text_Posts_Percent: 25.0, Stories_Percent: 40.0, Live_Streaming_Percent: 8.0, Audio_Content_Percent: 3.0 },
    { Platform: "WhatsApp", Short_Form_Video_Percent: 20.0, Long_Form_Video_Percent: 10.0, Images_Percent: 60.0, Text_Posts_Percent: 35.0, Stories_Percent: 45.0, Live_Streaming_Percent: 5.0, Audio_Content_Percent: 25.0 },
    { Platform: "Twitter", Short_Form_Video_Percent: 15.0, Long_Form_Video_Percent: 5.0, Images_Percent: 30.0, Text_Posts_Percent: 70.0, Stories_Percent: 10.0, Live_Streaming_Percent: 15.0, Audio_Content_Percent: 8.0 },
    { Platform: "LinkedIn", Short_Form_Video_Percent: 10.0, Long_Form_Video_Percent: 20.0, Images_Percent: 25.0, Text_Posts_Percent: 60.0, Stories_Percent: 5.0, Live_Streaming_Percent: 10.0, Audio_Content_Percent: 5.0 },
    { Platform: "Snapchat", Short_Form_Video_Percent: 80.0, Long_Form_Video_Percent: 5.0, Images_Percent: 40.0, Text_Posts_Percent: 5.0, Stories_Percent: 85.0, Live_Streaming_Percent: 3.0, Audio_Content_Percent: 2.0 },
    { Platform: "Telegram", Short_Form_Video_Percent: 5.0, Long_Form_Video_Percent: 15.0, Images_Percent: 25.0, Text_Posts_Percent: 45.0, Stories_Percent: 15.0, Live_Streaming_Percent: 8.0, Audio_Content_Percent: 20.0 }
];

const contentTypes = Object.keys(data2[0]).filter(key => key !== "Platform");
const platforms = data2.map(d => d.Platform);

const margin1 = { top: 80, right: 30, bottom: 70, left: 150 };
const width1 = 900 - margin1.left - margin1.right;
const height1 = 500 - margin1.top - margin1.bottom;

const svg2 = d3.select("#heatmap-chart")
    .append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
    .append("g")
    .attr("transform", `translate(${margin1.left},${margin1.top})`);

const tooltip3 = d3.select(".tooltip3");

const xScale1 = d3.scaleBand()
    .domain(platforms)
    .range([0, width1])
    .padding(0.05);

const yScale1 = d3.scaleBand()
    .domain(contentTypes.map(type => type.replace(/_/g, ' ')))
    .range([0, height1])
    .padding(0.05);

const colorScale = d3.scaleSequential()
    .interpolator(d3.interpolatePlasma)
    .domain([0, 100]);

// Draw heatmap cells
contentTypes.forEach(contentType => {
    platforms.forEach(platform => {
        const platformData = data2.find(d => d.Platform === platform);
        const value = platformData[contentType];
        const displayType = contentType.replace(/_/g, ' ');

        svg2.append("rect")
            .attr("x", xScale1(platform))
            .attr("y", yScale1(displayType))
            .attr("width", xScale1.bandwidth())
            .attr("height", yScale1.bandwidth())
            .attr("fill", colorScale(value))
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("stroke", "#111")
            .attr("stroke-width", 0.2)
            .on("mouseover", function(event) {
                d3.select(this)
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 2);

                tooltip3.html(`
                    <h3>${platform} - ${displayType}</h3>
                    <p><span class="label">Usage Percentage:</span> <span class="value">${value}%</span></p>
                    <p><span class="label">Platform Rank:</span> <span class="value">${getRank(platform, contentType)}</span></p>
                    <p><span class="label">Content Type Rank:</span> <span class="value">${getTypeRank(platform, contentType)}</span></p>
                `)
                .style("left", Math.min(event.pageX + 15, window.innerWidth - 250) + "px")
                .style("top", (event.pageY - 15) + "px")
                .style("opacity", 1);
            })
            .on("mouseout", function() {
                d3.select(this)
                    .attr("stroke", "#111")
                    .attr("stroke-width", 0.2);
                tooltip3.style("opacity", 0);
            });

        svg2.append("text")
            .attr("x", xScale1(platform) + xScale1.bandwidth() / 2)
            .attr("y", yScale1(displayType) + yScale1.bandwidth() / 2)
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("fill", value > 50 ? "#fff" : "#000")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .attr("pointer-events", "none")
            .text(value + "%");
    });
});

// Axes
svg2.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height1})`)
    .call(d3.axisBottom(xScale1))
    .selectAll("text")
    .attr("transform", "rotate(-25)")
    .attr("text-anchor", "end")
    .attr("fill", "#2c5282");

svg2.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale1))
    .selectAll("text")
    .attr("fill", "#2c5282");

// Title and Labels
svg2.append("text")
    .attr("x", width1 / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .attr("fill", "#2c5282")
    .attr("font-size", "24px")
    .attr("font-weight", "bold")
    .text("India Platform Content Preferences 2025");

svg2.append("text")
    .attr("x", width1 / 2)
    .attr("y", height1 + 50)
    .attr("text-anchor", "middle")
    .attr("fill", "#2c5282")
    .attr("font-size", "16px")
    .text("Platforms");

svg2.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height1 / 2)
    .attr("y", -120)
    .attr("text-anchor", "middle")
    .attr("fill", "#2c5282")
    .attr("font-size", "16px")
    .text("Content Types");

// Legend
const legendWidth = 300;
const legendHeight = 20;

const legendSvg = d3.select("#legend-scale").append("svg")
    .attr("width", legendWidth)
    .attr("height", legendHeight + 40);

const legendScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, legendWidth]);

const legendAxis = d3.axisBottom(legendScale)
    .ticks(5)
    .tickFormat(d => d + "%");

legendSvg.append("defs")
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .selectAll("stop")
    .data(d3.range(0, 1.01, 0.1))
    .enter()
    .append("stop")
    .attr("offset", d => d * 100 + "%")
    .attr("stop-color", d => colorScale(d * 100));

legendSvg.append("rect")
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#gradient)");

legendSvg.append("g")
    .attr("transform", `translate(0, ${legendHeight + 10})`)
    .call(legendAxis);

// Tooltip Rank Calculators
function getRank(platform, contentType) {
    const values = data2.map(d => d[contentType]).sort((a, b) => b - a);
    const rank = values.indexOf(data2.find(d => d.Platform === platform)[contentType]) + 1;
    return `${rank}/${platforms.length}`;
}

function getTypeRank(platform, contentType) {
    const platformData = data2.find(d => d.Platform === platform);
    const contentValues = contentTypes.map(type => platformData[type]).sort((a, b) => b - a);
    const rank = contentValues.indexOf(platformData[contentType]) + 1;
    return `${rank}/${contentTypes.length}`;
}
