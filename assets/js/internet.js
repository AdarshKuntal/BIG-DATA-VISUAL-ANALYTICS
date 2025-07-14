        

        // Dataset from your CSV format
        const internetUsageData = [
            {state: "all-India", age15PlusMale: 91.4, age15PlusFemale: 78.7, age15PlusPerson: 85.1, age15_24Male: 89.1, age15_24Female: 80.0, age15_24Person: 84.8, age15_29Male: 89.2, age15_29Female: 78.8, age15_29Person: 84.2},
            {state: "Arunachal Pradesh", age15PlusMale: 80.6, age15PlusFemale: 70.9, age15PlusPerson: 75.8, age15_24Male: 72.1, age15_24Female: 72.8, age15_24Person: 72.5, age15_29Male: 77.1, age15_29Female: 74.9, age15_29Person: 76.0},
            {state: "Assam", age15PlusMale: 87.3, age15PlusFemale: 77.1, age15PlusPerson: 82.3, age15_24Male: 84.5, age15_24Female: 77.1, age15_24Person: 80.8, age15_29Male: 84.8, age15_29Female: 76.4, age15_29Person: 80.5},
            {state: "Bihar", age15PlusMale: 90.6, age15PlusFemale: 75.6, age15PlusPerson: 83.4, age15_24Male: 83.8, age15_24Female: 67.9, age15_24Person: 76.4, age15_29Male: 83.7, age15_29Female: 65.9, age15_29Person: 75.3},
            {state: "Chhattisgarh", age15PlusMale: 80.0, age15PlusFemale: 63.5, age15PlusPerson: 71.8, age15_24Male: 85.0, age15_24Female: 75.3, age15_24Person: 80.2, age15_29Male: 84.9, age15_29Female: 72.9, age15_29Person: 78.9},
            {state: "Delhi", age15PlusMale: 98.4, age15PlusFemale: 93.1, age15PlusPerson: 96.0, age15_24Male: 94.8, age15_24Female: 94.0, age15_24Person: 94.5, age15_29Male: 95.2, age15_29Female: 94.4, age15_29Person: 94.9},
            {state: "Goa", age15PlusMale: 96.7, age15PlusFemale: 86.7, age15PlusPerson: 92.0, age15_24Male: 98.5, age15_24Female: 97.8, age15_24Person: 98.2, age15_29Male: 99.1, age15_29Female: 94.9, age15_29Person: 97.4},
            {state: "Gujarat", age15PlusMale: 92.8, age15PlusFemale: 77.3, age15PlusPerson: 85.3, age15_24Male: 91.8, age15_24Female: 82.7, age15_24Person: 87.5, age15_29Male: 92.1, age15_29Female: 82.2, age15_29Person: 87.4},
            {state: "Haryana", age15PlusMale: 93.0, age15PlusFemale: 77.0, age15PlusPerson: 85.4, age15_24Male: 95.7, age15_24Female: 89.4, age15_24Person: 92.9, age15_29Male: 95.6, age15_29Female: 89.0, age15_29Person: 92.6},
            {state: "Himachal Pradesh", age15PlusMale: 95.8, age15PlusFemale: 89.1, age15PlusPerson: 92.4, age15_24Male: 94.0, age15_24Female: 92.0, age15_24Person: 93.0, age15_29Male: 95.0, age15_29Female: 92.7, age15_29Person: 93.9},
            {state: "Jharkhand", age15PlusMale: 88.5, age15PlusFemale: 76.0, age15PlusPerson: 82.3, age15_24Male: 87.5, age15_24Female: 80.0, age15_24Person: 83.8, age15_29Male: 87.8, age15_29Female: 77.5, age15_29Person: 82.7},
            {state: "Karnataka", age15PlusMale: 94.0, age15PlusFemale: 84.3, age15PlusPerson: 89.2, age15_24Male: 95.1, age15_24Female: 89.4, age15_24Person: 92.4, age15_29Male: 95.0, age15_29Female: 87.6, age15_29Person: 91.4},
            {state: "Kerala", age15PlusMale: 95.4, age15PlusFemale: 90.8, age15PlusPerson: 93.0, age15_24Male: 99.1, age15_24Female: 98.8, age15_24Person: 99.0, age15_29Male: 99.3, age15_29Female: 98.5, age15_29Person: 98.9},
            {state: "Madhya Pradesh", age15PlusMale: 88.9, age15PlusFemale: 73.0, age15PlusPerson: 81.2, age15_24Male: 91.0, age15_24Female: 81.5, age15_24Person: 86.5, age15_29Male: 90.2, age15_29Female: 79.8, age15_29Person: 85.2},
            {state: "Maharashtra", age15PlusMale: 92.5, age15PlusFemale: 79.2, age15PlusPerson: 86.1, age15_24Male: 95.5, age15_24Female: 89.6, age15_24Person: 92.8, age15_29Male: 95.5, age15_29Female: 87.9, age15_29Person: 92.0},
            {state: "Manipur", age15PlusMale: 94.2, age15PlusFemale: 90.3, age15PlusPerson: 92.2, age15_24Male: 97.2, age15_24Female: 96.0, age15_24Person: 96.6, age15_29Male: 97.1, age15_29Female: 95.8, age15_29Person: 96.5},
            {state: "Meghalaya", age15PlusMale: 86.8, age15PlusFemale: 80.6, age15PlusPerson: 83.6, age15_24Male: 88.7, age15_24Female: 85.3, age15_24Person: 86.9, age15_29Male: 88.9, age15_29Female: 85.6, age15_29Person: 87.2},
            {state: "Mizoram", age15PlusMale: 96.2, age15PlusFemale: 95.0, age15PlusPerson: 95.6, age15_24Male: 97.4, age15_24Female: 96.9, age15_24Person: 97.1, age15_29Male: 97.7, age15_29Female: 97.1, age15_29Person: 97.4},
            {state: "Nagaland", age15PlusMale: 90.3, age15PlusFemale: 86.9, age15PlusPerson: 88.7, age15_24Male: 94.7, age15_24Female: 94.5, age15_24Person: 94.6, age15_29Male: 95.5, age15_29Female: 92.7, age15_29Person: 94.1},
            {state: "Odisha", age15PlusMale: 83.5, age15PlusFemale: 70.1, age15PlusPerson: 76.8, age15_24Male: 85.4, age15_24Female: 75.8, age15_24Person: 80.6, age15_29Male: 85.0, age15_29Female: 73.2, age15_29Person: 79.1},
            {state: "Punjab", age15PlusMale: 93.0, age15PlusFemale: 82.8, age15PlusPerson: 88.1, age15_24Male: 93.6, age15_24Female: 91.1, age15_24Person: 92.5, age15_29Male: 92.4, age15_29Female: 88.5, age15_29Person: 90.7},
            {state: "Rajasthan", age15PlusMale: 92.4, age15PlusFemale: 72.9, age15PlusPerson: 82.8, age15_24Male: 89.5, age15_24Female: 77.1, age15_24Person: 83.6, age15_29Male: 89.7, age15_29Female: 75.4, age15_29Person: 82.9},
            {state: "Sikkim", age15PlusMale: 95.3, age15PlusFemale: 92.2, age15PlusPerson: 93.8, age15_24Male: 96.9, age15_24Female: 95.9, age15_24Person: 96.4, age15_29Male: 97.1, age15_29Female: 97.2, age15_29Person: 97.1},
            {state: "Tamil Nadu", age15PlusMale: 95.6, age15PlusFemale: 89.6, age15PlusPerson: 92.6, age15_24Male: 92.7, age15_24Female: 88.1, age15_24Person: 90.5, age15_29Male: 93.4, age15_29Female: 87.2, age15_29Person: 90.4},
            {state: "Telangana", age15PlusMale: 95.9, age15PlusFemale: 86.5, age15PlusPerson: 91.2, age15_24Male: 96.6, age15_24Female: 92.2, age15_24Person: 94.4, age15_29Male: 96.7, age15_29Female: 91.0, age15_29Person: 93.8},
            {state: "Tripura", age15PlusMale: 86.6, age15PlusFemale: 75.9, age15PlusPerson: 81.2, age15_24Male: 87.2, age15_24Female: 82.9, age15_24Person: 85.0, age15_29Male: 88.2, age15_29Female: 81.2, age15_29Person: 84.5},
            {state: "Uttar Pradesh", age15PlusMale: 89.5, age15PlusFemale: 73.6, age15PlusPerson: 81.7, age15_24Male: 82.1, age15_24Female: 68.6, age15_24Person: 75.6, age15_29Male: 82.0, age15_29Female: 68.2, age15_29Person: 75.4},
            {state: "West Bengal", age15PlusMale: 92.8, age15PlusFemale: 83.7, age15PlusPerson: 88.3, age15_24Male: 85.6, age15_24Female: 80.7, age15_24Person: 83.2, age15_29Male: 85.1, age15_29Female: 76.3, age15_29Person: 80.6},
            {state: "A &N Islands", age15PlusMale: 95.8, age15PlusFemale: 94.8, age15PlusPerson: 95.3, age15_24Male: 95.7, age15_24Female: 92.1, age15_24Person: 94.0, age15_29Male: 94.3, age15_29Female: 90.4, age15_29Person: 92.5},
            {state: "Chandigarh", age15PlusMale: 99.8, age15PlusFemale: 87.0, age15PlusPerson: 93.5, age15_24Male: 99.8, age15_24Female: 90.8, age15_24Person: 95.4, age15_29Male: 99.7, age15_29Female: 88.8, age15_29Person: 94.0},
            {state: "Jammu & Kashmir", age15PlusMale: 91.0, age15PlusFemale: 72.5, age15PlusPerson: 82.0, age15_24Male: 92.5, age15_24Female: 84.7, age15_24Person: 88.9, age15_29Male: 92.4, age15_29Female: 82.4, age15_29Person: 87.6},
            {state: "Ladakh", age15PlusMale: 90.4, age15PlusFemale: 79.3, age15PlusPerson: 84.9, age15_24Male: 94.7, age15_24Female: 85.5, age15_24Person: 90.1, age15_29Male: 96.4, age15_29Female: 84.2, age15_29Person: 90.2},
            {state: "Lakshadweep", age15PlusMale: 97.0, age15PlusFemale: 82.8, age15PlusPerson: 90.1, age15_24Male: 97.0, age15_24Female: 96.7, age15_24Person: 96.8, age15_29Male: 97.3, age15_29Female: 94.7, age15_29Person: 96.0},
            {state: "Puducherry", age15PlusMale: 97.3, age15PlusFemale: 90.9, age15PlusPerson: 94.0, age15_24Male: 96.4, age15_24Female: 96.0, age15_24Person: 96.2, age15_29Male: 97.4, age15_29Female: 95.9, age15_29Person: 96.7}




        ];

        // Set up dimensions for the chart
        const widdth = 360;
        const heightt = 360;
        const radius = Math.min(widdth, heightt) / 2;
        
        // Create SVG container
        const svg1 = d3.select("#pie-chart")
            .append("svg")
            .attr("width", widdth)
            .attr("height", heightt)
            .append("g")
            .attr("transform", `translate(${widdth / 2}, ${heightt / 2})`);
        
        // Create pie generator
        const pie = d3.pie()
            .value(d => d.value)
            .sort(null);
        
        // Create arc generator
        const arc = d3.arc()
            .innerRadius(radius * 0.6)
            .outerRadius(radius - 10);
        
        // Draw the initial pie chart
        function drawChart(usageValue) {
            // Clear previous chart
            svg1.selectAll("*").remove();
            
            const data = [
                { label: 'Internet Users', value: usageValue, color: '#1a73e8' },
                { label: 'Non-Users', value: 100 - usageValue, color: '#e8f0fe' }
            ];
            
            // Draw the pie chart
            const arcs = pie(data);
            
            const path = svg1.selectAll("path")
                .data(arcs)
                .enter()
                .append("path")
                .attr("d", arc)
                .attr("fill", d => d.data.color)
                .attr("stroke", "white")
                .attr("stroke-width", 3)
                .attr("opacity", 0.9)
                .each(function(d) { this._current = d; });
            
            // Add hover effect
            path.on("mouseover", function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr("opacity", 1)
                    .attr("transform", "scale(1.05)");
            })
            .on("mouseout", function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr("opacity", 0.9)
                    .attr("transform", "scale(1)");
            });
        }
        
        // Find data for a specific state
        function getStateData(stateName) {
            return internetUsageData.find(item => item.state === stateName);
        }
        
        // Update chart based on dropdown changes
        document.getElementById('state').addEventListener('change', updateDashboard);
        document.getElementById('gender').addEventListener('change', updateDashboard);
        document.getElementById('age').addEventListener('change', updateDashboard);
        
        function updateDashboard() {
            const state = document.getElementById('state').value;
            const gender = document.getElementById('gender').value;
            const ageGroup = document.getElementById('age').value;
            
            // Update location text
            document.getElementById('location').textContent = state;
            
            // Get state data
            const stateData = getStateData(state);
            
            // Get the usage value from data
            let usageValue;
            switch(ageGroup) {
                case "15 years and above":
                    if (gender === "Male") usageValue = stateData.age15PlusMale;
                    else if (gender === "Female") usageValue = stateData.age15PlusFemale;
                    else usageValue = stateData.age15PlusPerson;
                    break;
                case "15-24 years":
                    if (gender === "Male") usageValue = stateData.age15_24Male;
                    else if (gender === "Female") usageValue = stateData.age15_24Female;
                    else usageValue = stateData.age15_24Person;
                    break;
                case "15-29 years":
                    if (gender === "Male") usageValue = stateData.age15_29Male;
                    else if (gender === "Female") usageValue = stateData.age15_29Female;
                    else usageValue = stateData.age15_29Person;
                    break;
            }
            
            // Update center percentage
            document.getElementById('percentage').textContent = usageValue.toFixed(1) + '%';
            
            // Update the chart
            drawChart(usageValue);
            
            // Update the statistics panel
            document.getElementById('persons-15plus').textContent = stateData.age15PlusPerson.toFixed(1) + '%';
            document.getElementById('persons-15-24').textContent = stateData.age15_24Person.toFixed(1) + '%';
            document.getElementById('persons-15-29').textContent = stateData.age15_29Person.toFixed(1) + '%';
            
            document.getElementById('female-15plus').textContent = stateData.age15PlusFemale.toFixed(1) + '%';
            document.getElementById('female-15-24').textContent = stateData.age15_24Female.toFixed(1) + '%';
            document.getElementById('female-15-29').textContent = stateData.age15_29Female.toFixed(1) + '%';
            
            document.getElementById('male-15plus').textContent = stateData.age15PlusMale.toFixed(1) + '%';
            document.getElementById('male-15-24').textContent = stateData.age15_24Male.toFixed(1) + '%';
            document.getElementById('male-15-29').textContent = stateData.age15_29Male.toFixed(1) + '%';
            
            // Update key insight based on state
            let insight = "Internet usage is consistently higher among younger age groups (15-24 years) and males.";
            if (stateData.age15PlusFemale < 50) {
                insight = `In ${state}, female internet usage is significantly lower than the national average. Males show ${Math.round(stateData.age15PlusMale - stateData.age15PlusFemale)}% higher usage.`;
            } else if (stateData.age15PlusFemale > 70) {
                insight = `${state} has exceptionally high female internet usage rates. The gender gap is only ${Math.round(stateData.age15PlusMale - stateData.age15PlusFemale)}%.`;
            } else {
                insight = `Usage rates in ${state} are near the national average. The gender gap is ${Math.round(stateData.age15PlusMale - stateData.age15PlusFemale)}%.`;
            }
            
            document.getElementById('key-insight').textContent = insight;
            
            // Update state comparison
            updateStateComparison();
        }
        
        function updateStateComparison() {
            let highestUsage = 0;
            let highestUsageState = '';
            let lowestUsage = 100;
            let lowestUsageState = '';
            let maxGenderGap = 0;
            let maxGenderGapState = '';
            
            internetUsageData.forEach(state => {
                const usage = state.age15PlusPerson;
                
                // Find highest usage
                if (usage > highestUsage) {
                    highestUsage = usage;
                    highestUsageState = state.state;
                }
                
                // Find lowest usage
                if (usage < lowestUsage) {
                    lowestUsage = usage;
                    lowestUsageState = state.state;
                }
                
                // Calculate gender gap
                const genderGap = state.age15PlusMale - state.age15PlusFemale;
                if (genderGap > maxGenderGap) {
                    maxGenderGap = genderGap;
                    maxGenderGapState = state.state;
                }
            });
            
            // Update UI
            document.getElementById('highest-usage').textContent = 
                `${highestUsageState} (${highestUsage.toFixed(1)}%)`;
            document.getElementById('lowest-usage').textContent = 
                `${lowestUsageState} (${lowestUsage.toFixed(1)}%)`;
            document.getElementById('gender-gap').textContent = 
                `${maxGenderGapState} (${maxGenderGap.toFixed(1)}%)`;
        }
        
        // Initialize the dashboard
        updateDashboard();
        updateStateComparison();