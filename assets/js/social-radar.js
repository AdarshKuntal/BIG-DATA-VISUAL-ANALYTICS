const smrPlatforms = ["Facebook", "Instagram", "TikTok", "LinkedIn", "Snapchat", "X", "Reddit", "Pinterest"];
const smrActivities = {
    "Entertainment": { values: [55.8, 67.1, 79.6, 11.7, 38.2, 35.6, 29.6, 21.4], color: "#f72585" },
    "Brand Research": { values: [53.1, 62.3, 53.0, 25.8, 27.5, 37.5, 31.2, 36.4], color: "#4895ef" },
    "News and Current Events": { values: [57.7, 55.0, 45.7, 29.5, 26.1, 60.5, 30.9, 14.6], color: "#f8961e" },
    "Messaging": { values: [72.1, 60.7, 23.8, 13.3, 42.2, 18.8, 7.6, 7.4], color: "#4cc9f0" },
    "Posting Photos/Videos": { values: [63.0, 69.8, 43.5, 16.8, 45.3, 27.5, 12.9, 16.1], color: "#7209b7" }
};

let smrRadarChart;
let smrSelected = "all";

document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("smr-radar-chart").getContext("2d");
    smrRadarChart = new Chart(ctx, {
        type: 'radar',
        data: { labels: smrPlatforms, datasets: getSmrDatasets() },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: false,
                    external: showSmrTooltip
                }
            },
            scales: {
                r: {
                    
                    grid: {
                        color: 'rgba(227, 226, 226, 0.63)'  // ✅ Change this
                    },
                    angleLines: {
                        color: 'hsla(0, 4%, 79%, 0.80)'  // ✅ And this
                    },
                    pointLabels: {
                        color: '#fff'
                    }
                }
            }
        }
    });

    document.querySelectorAll(".smr-activity-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".smr-activity-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            smrSelected = btn.getAttribute("data-activity");
            smrRadarChart.data.datasets = getSmrDatasets();
            smrRadarChart.update();
        });
    });
});

function getSmrDatasets() {
    const sets = [];
    if (smrSelected === "all") {
        for (const [label, { values, color }] of Object.entries(smrActivities)) {
            sets.push({
                label,
                data: values,
                borderColor: color,
                backgroundColor: "transparent",
                pointBackgroundColor: color,
                borderWidth: 2
            });
        }
    } else {
        const { values, color } = smrActivities[smrSelected];
        sets.push({
            label: smrSelected,
            data: values,
            borderColor: color,
            backgroundColor: "transparent",
            pointBackgroundColor: color,
            borderWidth: 3
        });
    }
    return sets;
}

function showSmrTooltip(context) {
    const tooltip = document.getElementById("smr-tooltip");
    if (context.tooltip.opacity === 0) return tooltip.style.opacity = 0;

    const data = context.tooltip.dataPoints[0];
    const activity = data.dataset.label;
    const platform = data.label;
    const value = data.formattedValue;

    tooltip.innerHTML = `
    <h3>${platform}</h3>
    <p><strong>${activity}:</strong> <span class="value">${value}%</span></p>
    <p><strong>Rank:</strong> ${smrPlatforms.indexOf(platform) + 1}/${smrPlatforms.length}</p>
  `;

    const { x, y } = data.element;
    const rect = context.chart.canvas.getBoundingClientRect();
    tooltip.style.left = rect.left + x - 120 + "px";
    tooltip.style.top = rect.top + y - 130 + "px";
    tooltip.style.opacity = 1;
}
