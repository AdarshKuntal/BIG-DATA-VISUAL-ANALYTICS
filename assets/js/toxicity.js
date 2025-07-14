
// Enhanced platform data with emotion mappings
const platformData = {
    "Facebook": {
        toxicity: [0.2909, 0.3999, 0.6577, 0.3999, 0.9831, 0.6129, 0.9713, 0.9341, 0.4552, 0.6577, 0.1774, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313, 0.5758, 0.6365, 0.3723, 0.6567, 0.4262, 0.455, 0.8313],
        emotions: ["Angry", "Happy", "Sad", "Confused", "Excited", "Neutral", "Other"],
        emotionDistribution: [25, 15, 20, 15, 10, 10, 5],
        insights: "Facebook shows consistent toxicity with spikes in angry content. Political discussions often trigger high toxicity scores."
    },
    "Twitter": {
        toxicity: [0.7364, 0.7415, 0.8306, 0.196, 0.9503, 0.6722, 0.9676, 0.7415, 0.0431, 0.3099, 0.0205, 0.2697, 0.7179, 0.89, 0.9024, 0.4262, 0.8781, 0.196, 0.9526, 0.8395, 0.9658, 0.9285, 0.2631, 0.1175, 0.0545, 0.8944, 0.7998, 0.9695, 0.6311, 0.9246, 0.9285, 0.2631, 0.0488, 0.8596, 0.2272, 0.2206, 0.17, 0.8367, 0.908, 0.1187, 0.3551, 0.9658, 0.5931, 0.4961, 0.5591, 0.2545, 0.6432, 0.2986, 0.4842, 0.629, 0.8913, 0.3354, 0.3429, 0.8341, 0.0613, 0.5388, 0.3929, 0.1382, 0.1424, 0.9601, 0.8313, 0.8603, 0.3923, 0.6304, 0.4965, 0.2577, 0.2249, 0.0412, 0.2169, 0.4176, 0.8106, 0.7313, 0.838, 0.2093, 0.8138, 0.5018, 0.6849, 0.0245, 0.2983, 0.9651, 0.3829, 0.8903, 0.521, 0.415, 0.6109, 0.8261, 0.9268, 0.8827, 0.2227, 0.4148, 0.6532, 0.3333, 0.4509, 0.0535, 0.9223, 0.7864, 0.0192, 0.4833, 0.4163, 0.1292, 0.178, 0.1804, 0.7632, 0.3517, 0.7327, 0.9826, 0.0492, 0.5555, 0.1857, 0.1893, 0.2096, 0.81, 0.0711, 0.6691, 0.5182, 0.4152, 0.3508, 0.9423, 0.4239, 0.8564, 0.0311, 0.0378, 0.6109],
        emotions: ["Angry", "Happy", "Sad", "Confused", "Excited", "Neutral", "Other"],
        emotionDistribution: [30, 10, 25, 10, 5, 15, 5],
        insights: "Twitter has extreme polarization with both very high and very low toxicity scores. Controversial topics drive the highest toxicity."
    },
    "Instagram": {
        toxicity: [0.1558, 0.9872, 0.1422, 0.3488, 0.3486, 0.4163, 0.6349, 0.3933, 0.1424, 0.2018, 0.275, 0.3868, 0.188, 0.0431, 0.3099, 0.0205, 0.2697, 0.7179, 0.89, 0.9024, 0.4262, 0.8781, 0.196, 0.9526, 0.8395, 0.9658, 0.9285, 0.2631, 0.1175, 0.0545, 0.8944, 0.7998, 0.9695, 0.6311, 0.9246, 0.9285, 0.2631, 0.0488, 0.8596, 0.2272, 0.2206, 0.17, 0.8367, 0.908, 0.1187, 0.3551, 0.9658, 0.5931, 0.4961, 0.5591, 0.2545, 0.6432, 0.2986, 0.4842, 0.629, 0.8913, 0.3354, 0.3429, 0.8341, 0.0613, 0.5388, 0.3929, 0.1382, 0.1424, 0.9601, 0.8313, 0.8603, 0.3923, 0.6304, 0.4965, 0.2577, 0.2249, 0.0412, 0.2169, 0.4176, 0.8106, 0.7313, 0.838, 0.2093, 0.8138, 0.5018, 0.6849, 0.0245, 0.2983, 0.9651, 0.3829, 0.8903, 0.521, 0.415, 0.6109, 0.8261, 0.9268, 0.8827, 0.2227, 0.4148, 0.6532, 0.3333, 0.4509, 0.0535, 0.9223, 0.7864, 0.0192, 0.4833, 0.4163, 0.1292, 0.178, 0.1804, 0.7632, 0.3517, 0.7327, 0.9826, 0.0492, 0.5555, 0.1857, 0.1893, 0.2096, 0.81, 0.0711, 0.6691, 0.5182, 0.4152, 0.3508, 0.9423, 0.4239, 0.8564, 0.0311, 0.0378, 0.6109],
        emotions: ["Happy", "Angry", "Confused", "Excited", "Sad", "Neutral", "Other"],
        emotionDistribution: [40, 15, 10, 15, 10, 5, 5],
        insights: "Instagram has mostly lower toxicity but with occasional extreme spikes. Visual content tends to have lower toxicity than text comments."
    },
    "YouTube": {
        toxicity: [0.4674, 0.7093, 0.4175, 0.2298, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092, 0.4175, 0.1271, 0.1633, 0.1403, 0.7438, 0.5664, 0.2356, 0.7092],
        emotions: ["Excited", "Happy", "Angry", "Confused", "Sad", "Neutral", "Other"],
        emotionDistribution: [25, 30, 15, 10, 10, 5, 5],
        insights: "YouTube comments show moderate toxicity with spikes on controversial videos. The platform has a wide range of emotional content."
    },
    "Reddit": {
        toxicity: [0.1247, 0.0696, 0.0572, 0.0892, 0.0113, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284, 0.0785, 0.0127, 0.0745, 0.073, 0.004, 0.1653, 0.0546, 0.1146, 0.0824, 0.002, 0.0228, 0.1199, 0.1797, 0.189, 0.0284],
        emotions: ["Neutral", "Other", "Happy", "Angry", "Confused", "Excited", "Sad"],
        emotionDistribution: [40, 20, 15, 10, 5, 5, 5],
        insights: "Reddit has the lowest overall toxicity with most content being neutral. However, certain subreddits can have concentrated toxicity."
    }
};

// Color scale for platforms
const platformColors = {
    "Facebook": "#e15759",
    "Twitter": "#f28e2c",
    "Instagram": "#edc949",
    "YouTube": "#76b7b2",
    "Reddit": "#4e79a7"
};

// Emotion colors
const emotionColors = {
    "Angry": "#e15759",
    "Happy": "#59a14f",
    "Sad": "#4e79a7",
    "Confused": "#f28e2c",
    "Excited": "#76b7b2",
    "Neutral": "#bab0ac",
    "Other": "#af7aa1"
};

// Initialize with emotion details hidden
let showEmotionDetails = false;
let selectedPlatform = "Facebook";

// Function to calculate median
function median(values) {
    if (values.length === 0) return 0;
    values.sort((a, b) => a - b);
    const half = Math.floor(values.length / 2);
    return values.length % 2 ? values[half] : (values[half - 1] + values[half]) / 2;
}

// Function to calculate average
function average(values) {
    return values.reduce((a, b) => a + b, 0) / values.length;
}

// Function to create main plot
function createMainPlot(sortBy = 'name') {
    // Prepare data for plot
    let platforms = Object.keys(platformData);

    // Sort platforms
    if (sortBy === 'median') {
        platforms.sort((a, b) => median(platformData[b].toxicity) - median(platformData[a].toxicity));
    } else if (sortBy === 'max') {
        platforms.sort((a, b) => Math.max(...platformData[b].toxicity) - Math.max(...platformData[a].toxicity));
    } else if (sortBy === 'min') {
        platforms.sort((a, b) => Math.min(...platformData[b].toxicity) - Math.min(...platformData[a].toxicity));
    } else {
        platforms.sort();
    }

    const data = platforms.map(platform => {
        return {
            y: platformData[platform].toxicity,
            x: Array(platformData[platform].toxicity.length).fill(platform),
            type: 'violin',
            name: platform,
            box: {
                visible: true,
                width: 0.3,
                fillcolor: platformColors[platform],
                line: {
                    width: 2
                }
            },
            meanline: {
                visible: true
            },
            fillcolor: chroma(platformColors[platform]).alpha(0.2).css(),
            line: {
                color: platformColors[platform],
                width: 2
            },
            points: showEmotionDetails ? 'all' : false,
            pointpos: 0,
            jitter: 0.7,
            scalemode: 'width',
            side: 'positive',
            width: 0.8,
            spanmode: 'hard',
            selectedpoints: selectedPlatform === platform ? [0] : null,
            hoveron: 'points+knots+violins',
            hoverinfo: 'y+name',
            marker: {
                size: 5,
                opacity: showEmotionDetails ? 0.7 : 0,
                color: platformColors[platform]
            }
        };
    });

    // Create layout
    const layout = {
        title: 'Toxicity Distribution by Social Media Platform',
        yaxis: {
            title: 'Toxicity Score (0-1)',
            gridcolor: 'rgba(100, 130, 200, 0.2)',
            zerolinecolor: 'rgba(100, 130, 200, 0.5)',
            range: [0, 1],
            fixedrange: true
        },
        xaxis: {
            title: 'Social Media Platform',
            gridcolor: 'rgba(100, 130, 200, 0.2)',
            fixedrange: true
        },
        hovermode: 'closest',
        showlegend: false,
        margin: {
            t: 50,
            b: 100,
            l: 60,
            r: 30
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0.2)',
        font: {
            color: '#e0e7ff'
        },
        clickmode: 'event+select'
    };

    // Render plot
    Plotly.newPlot('mainPlot', data, layout);

    // Update platform ranking and stats
    updatePlatformRanking(platforms);
    updateGlobalStats();

    // Add event listeners for interactivity
    document.getElementById('mainPlot').on('plotly_click', function (data) {
        if (data.points && data.points.length > 0) {
            selectedPlatform = data.points[0].x;
            updateEmotionChart(selectedPlatform);
            updateInsights(selectedPlatform);
            document.getElementById('emotionPlatformSelect').value = selectedPlatform;
        }
    });

    document.getElementById('mainPlot').on('plotly_hover', function (data) {
        const tooltip = document.getElementById('plotTooltip');
        if (data.points && data.points.length > 0) {
            const point = data.points[0];
            const platform = point.x;
            const toxicity = point.y;

            tooltip.innerHTML = `
                        <strong>${platform}</strong><br>
                        Toxicity: ${toxicity.toFixed(3)}<br>
                        Median: ${median(platformData[platform].toxicity).toFixed(3)}<br>
                        Avg: ${average(platformData[platform].toxicity).toFixed(3)}
                    `;
            tooltip.style.display = 'block';
            tooltip.style.left = data.event.clientX + 10 + 'px';
            tooltip.style.top = data.event.clientY + 10 + 'px';
        }
    });

    document.getElementById('mainPlot').on('plotly_unhover', function () {
        document.getElementById('plotTooltip').style.display = 'none';
    });
}

// Function to update platform ranking
function updatePlatformRanking(platforms) {
    const rankingList = document.getElementById('platformRanking');
    rankingList.innerHTML = '';

    platforms.forEach(platform => {
        const med = median(platformData[platform].toxicity);
        const li = document.createElement('li');
        li.className = 'platform-item';
        li.innerHTML = `
                    <div class="platform-name">
                        <div class="platform-color" style="background-color: ${platformColors[platform]}"></div>
                        <span>${platform}</span>
                    </div>
                    <div class="platform-value">${med.toFixed(3)}</div>
                `;
        li.addEventListener('click', () => {
            selectedPlatform = platform;
            updateEmotionChart(platform);
            updateInsights(platform);
            document.getElementById('emotionPlatformSelect').value = platform;
            createMainPlot(document.getElementById('sortBy').value);
        });
        rankingList.appendChild(li);
    });
}

// Function to update global stats
function updateGlobalStats() {
    let totalPosts = 0;
    let allToxicity = [];

    Object.keys(platformData).forEach(platform => {
        totalPosts += platformData[platform].toxicity.length;
        allToxicity = allToxicity.concat(platformData[platform].toxicity);
    });

    document.getElementById('postCount').textContent = totalPosts;
    document.getElementById('avgToxicity').textContent = average(allToxicity).toFixed(3);
    document.getElementById('maxToxicity').textContent = Math.max(...allToxicity).toFixed(3);
}

// Function to update emotion chart
function updateEmotionChart(platform) {
    if (!platform) return;

    document.getElementById('emotionPlatformName').textContent = `(${platform})`;

    const data = [{
        values: platformData[platform].emotionDistribution,
        labels: platformData[platform].emotions,
        type: 'pie',
        marker: {
            colors: platformData[platform].emotions.map(e => emotionColors[e])
        },
        hoverinfo: 'label+percent+value',
        textinfo: 'percent',
        textposition: 'inside',
        hole: 0.4,
        rotation: 45,
        sort: false
    }];

    const layout = {
        paper_bgcolor: 'rgba(0, 0, 0, 0)',
        plot_bgcolor: 'rgba(0, 0, 0, 0)',
        font: {
            color: '#e0e7ff'
        },
        margin: {
            t: 30,
            b: 20,
            l: 20,
            r: 20
        },
        showlegend: false
    };

    Plotly.newPlot('emotionChart', data, layout);
}

// Function to update insights
function updateInsights(platform) {
    if (!platform) return;

    const insightsDiv = document.getElementById('dynamicInsights');
    insightsDiv.innerHTML = `
                <p><strong>${platform} Insights:</strong> ${platformData[platform].insights}</p>
                <p>Median Toxicity: ${median(platformData[platform].toxicity).toFixed(3)}</p>
                <p>Average Toxicity: ${average(platformData[platform].toxicity).toFixed(3)}</p>
                <p>Highest Toxicity: ${Math.max(...platformData[platform].toxicity).toFixed(3)}</p>
                <p>Lowest Toxicity: ${Math.min(...platformData[platform].toxicity).toFixed(3)}</p>
            `;
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function () {
    createMainPlot();
    updateEmotionChart(selectedPlatform);
    updateInsights(selectedPlatform);

    // Add event listeners
    document.getElementById('sortBy').addEventListener('change', function () {
        createMainPlot(this.value);
    });

    document.getElementById('toggleDetails').addEventListener('click', function () {
        showEmotionDetails = !showEmotionDetails;
        this.textContent = showEmotionDetails ? 'Hide Emotion Details' : 'Show Emotion Details';
        createMainPlot(document.getElementById('sortBy').value);
    });

    document.getElementById('emotionPlatformSelect').addEventListener('change', function () {
        selectedPlatform = this.value;
        updateEmotionChart(selectedPlatform);
        updateInsights(selectedPlatform);
        createMainPlot(document.getElementById('sortBy').value);
    });
});