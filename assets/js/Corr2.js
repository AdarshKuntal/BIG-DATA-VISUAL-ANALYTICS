        // Function to calculate correlation coefficient
        function calculateCorrelation(x, y) {
            const n = x.length;
            let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
            
            for (let i = 0; i < n; i++) {
                sumX += x[i];
                sumY += y[i];
                sumXY += x[i] * y[i];
                sumX2 += x[i] * x[i];
                sumY2 += y[i] * y[i];
            }
            
            const numerator = n * sumXY - sumX * sumY;
            const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
            
            return denominator === 0 ? 0 : numerator / denominator;
        }

        // Function to create correlation matrix
        function createCorrelationMatrix(data) {
            // Remove student_ID from features
            const features = Object.keys(data[0]).filter(key => key !== "student_ID");
            const matrix = [];
            
            // Calculate correlations
            for (let i = 0; i < features.length; i++) {
                const row = [];
                const xValues = data.map(d => +d[features[i]]);
                
                for (let j = 0; j < features.length; j++) {
                    if (i === j) {
                        row.push(1); // Correlation with itself is 1
                    } else {
                        const yValues = data.map(d => +d[features[j]]);
                        const corr = calculateCorrelation(xValues, yValues);
                        row.push(corr);
                    }
                }
                matrix.push(row);
            }
            
            return { matrix, features };
        }

        // Function to render correlation matrix
        function renderCorrelationMatrix(container, matrixData) {
    const { matrix, features } = matrixData;
    const size = features.length;
    const cellSize = 60;
    
    const paddingLeft = 120;
    const paddingTop = 100;
    const width = size * cellSize + paddingLeft + 20;
    const height = size * cellSize + paddingTop + 20;

    container.innerHTML = "";

    const svg = d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const colorScale = d3.scaleLinear()
        .domain([-1, 0, 1])
        .range(["#e74c3c", "#ecf0f1", "#2ecc71"]);

    const cellData = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            cellData.push({ i, j, value: matrix[i][j] });
        }
    }

    // Matrix cells
    svg.selectAll(".matrix-cell")
        .data(cellData)
        .enter()
        .append("rect")
        .attr("class", "matrix-cell")
        .attr("x", d => paddingLeft + d.j * cellSize)
        .attr("y", d => paddingTop + d.i * cellSize)
        .attr("width", cellSize - 2)
        .attr("height", cellSize - 2)
        .attr("fill", d => colorScale(d.value))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .on("click", function (event, d) {
            renderScatterPlot("#scatter-plot", studentData, features[d.i], features[d.j]);
            document.getElementById("correlation-value").innerHTML =
                `Correlation between ${features[d.i]} and ${features[d.j]}: ${d.value.toFixed(2)}`;
        })
        .on("mouseover", function (event, d) {
            d3.select(".tooltip-correlation")
                .style("opacity", 1)
                .html(`<h3>${features[d.i]} vs ${features[d.j]}</h3>
                       <p>Correlation: <span class="value">${d.value.toFixed(2)}</span></p>
                       <p>Click to view scatter plot</p>`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 30) + "px");

            d3.select(this).attr("stroke", "#333").attr("stroke-width", 2);
        })
        .on("mouseout", function () {
            d3.select(".tooltip-correlation").style("opacity", 0);
            d3.select(this).attr("stroke", "#fff").attr("stroke-width", 1);
        });

    // Correlation values
    svg.selectAll(".matrix-value")
        .data(cellData)
        .enter()
        .append("text")
        .attr("x", d => paddingLeft + d.j * cellSize + cellSize / 2)
        .attr("y", d => paddingTop + d.i * cellSize + cellSize / 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "11px")
        .attr("fill", d => Math.abs(d.value) > 0.5 ? "#fff" : "#333")
        .text(d => d.value.toFixed(2));

    // Row labels (left)
    svg.selectAll(".row-label")
        .data(features)
        .enter()
        .append("text")
        .attr("x", paddingLeft - 10)
        .attr("y", (d, i) => paddingTop + i * cellSize + cellSize / 2)
        .attr("text-anchor", "end")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "13px")
        .text(d => d);

    // Column labels (top)
// Column labels (top, rotated -45°)
svg.selectAll(".col-label")
    .data(features)
    .enter()
    .append("text")
    .attr("class", "col-label")
    .attr("transform", (d, i) => {
        const x = 10 + paddingLeft + i * cellSize + cellSize / 2;
        const y = paddingTop - 10;
        return `translate(${x},${y}) rotate(20)`;
    })
    .attr("text-anchor", "end")
    .attr("font-size", "13px")
    .text(d => d);

}




        // Function to render scatter plot
        function renderScatterPlot(container, data, xFeature, yFeature) {
            // Clear previous plot
            d3.select(container).selectAll("*").remove();
        
            // Set dimensions
            const width = 500;
            const height = 400;
            const margin = { top: 40, right: 40, bottom: 60, left: 60 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;
        
            // Create SVG
            const svg = d3.select(container)
                .append("svg")
                .attr("width", width)
                .attr("height", height);
        
            // Create scales
            const xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => +d[xFeature]))
                .range([0, innerWidth])
                .nice();
        
            const yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => +d[yFeature]))
                .range([innerHeight, 0])
                .nice();
        
            // Create chart area
            const chart = svg.append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);
        
            // Add x-axis
            chart.append("g")
                .attr("transform", `translate(0,${innerHeight})`)
                .call(d3.axisBottom(xScale))
                .append("text")
                .attr("class", "axis-label")
                .attr("x", innerWidth / 2)
                .attr("y", 40)
                .attr("fill", "#000")
                .text(xFeature);
        
            // Add y-axis
            chart.append("g")
                .call(d3.axisLeft(yScale))
                .append("text")
                .attr("class", "axis-label")
                .attr("transform", "rotate(-90)")
                .attr("y", -50)
                .attr("x", -innerHeight / 2)
                .attr("dy", "1em")
                .attr("fill", "#000")
                .text(yFeature);
        
            // Add scatter points
            chart.selectAll(".scatter-point")
                .data(data)
                .enter()
                .append("circle")
                .attr("class", "scatter-point")
                .attr("cx", d => xScale(d[xFeature]))
                .attr("cy", d => yScale(d[yFeature]))
                .attr("r", 4)
                .attr("fill", "#3182ce")
                .attr("fill-opacity", 0.7)
                .on("mouseover", function (event, d) {
                    const tooltip = d3.select(".tooltip-correlation");
                    tooltip
                        .style("opacity", 1)
                        .html(`<h3>Student ${d.student_ID}</h3>
                               <p>${xFeature}: <span class="value">${d[xFeature]}</span></p>
                               <p>${yFeature}: <span class="value">${d[yFeature]}</span></p>`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 30) + "px");
        
                    d3.select(this).attr("r", 6).attr("fill-opacity", 1);
                })
                .on("mouseout", function () {
                    d3.select(".tooltip-correlation").style("opacity", 0);
                    d3.select(this).attr("r", 4).attr("fill-opacity", 0.7);
                });
        
            // Chart title
            chart.append("text")
                .attr("x", innerWidth / 2)
                .attr("y", -10)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("font-weight", "bold")
                .text(`${xFeature} vs ${yFeature}`);
        
            // --- Regression Line ---
            const xValues = data.map(d => +d[xFeature]);
            const yValues = data.map(d => +d[yFeature]);
            const n = xValues.length;
        
            let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
            for (let i = 0; i < n; i++) {
                sumX += xValues[i];
                sumY += yValues[i];
                sumXY += xValues[i] * yValues[i];
                sumX2 += xValues[i] * xValues[i];
            }
        
            const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
            const intercept = (sumY - slope * sumX) / n;
        
            const xMin = d3.min(xValues);
        const xMax = d3.max(xValues);
        const lineData = [
        { x: xMin, y: slope * xMin + intercept },
        { x: xMax, y: slope * xMax + intercept }
        ];

    const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

    chart.append("path")
        .datum(lineData)
        .attr("class", "regression-line")
        .attr("d", line)
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .attr("fill", "none");

        
            // Optional: Show equation
            chart.append("text")
                .attr("x", innerWidth - 10)
                .attr("y", 0)
                .attr("text-anchor", "end")
                .style("font-size", "13px")
                .style("fill", "red")
                .text(`y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`);
        }        

        // Global variable for student data
        let studentData = [];

        // Function to process and visualize data
        function processAndVisualizeData(data) {
    // Convert relevant columns to numeric
    studentData = data.map(d => {
        return {
            student_ID: d.Student_ID,
            age: +d.Age,
            usage_hours: +d.Avg_Daily_Usage_Hours,
            sleep_hours: +d.Sleep_Hours_Per_Night,
            mental_health: +d.Mental_Health_Score,
            conflicts: +d.Conflicts_Over_Social_Media,
            addicted_score: +d.Addicted_Score
        };
    });

    const matrixData = createCorrelationMatrix(studentData);
    renderCorrelationMatrix("#correlation-matrix", matrixData);

    const features = matrixData.features;
    if (features.length >= 2) {
        renderScatterPlot("#scatter-plot", studentData, features[0], features[1]);
        const initialCorr = matrixData.matrix[0][1];
        document.getElementById("correlation-value").innerHTML = 
            `Correlation between ${features[0]} and ${features[1]}: ${initialCorr.toFixed(2)}`;
    }
}


        // Load CSV data when page loads
        document.addEventListener("DOMContentLoaded", function() {
            
            // Parse sample CSV data
            d3.csv("Students Social Media Addiction.csv").then(parsedData => {
    processAndVisualizeData(parsedData);
}).catch(error => {
    document.getElementById("correlation-matrix").innerHTML = 
        `<div class="error">Failed to load CSV: ${error.message}</div>`;
});
        
        });