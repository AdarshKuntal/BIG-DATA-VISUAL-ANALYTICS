Promise.all([
    d3.csv("assets/data/ALL_devices.csv"),
    d3.csv("assets/data/mobile.csv"),
    d3.csv("assets/data/desktop.csv"),
    d3.csv("assets/data/tablet.csv"),
    d3.json("assets/data/world-110m.json") // Preload if needed elsewhere
  ]).then(([all, mobile, desktop, tablet]) => {
    const deviceDataMap = {
      ALL_devices: all,
      mobile: mobile,
      desktop: desktop,
      tablet: tablet
    };
  
    makeWorldMap(deviceDataMap);
  });

  function drawLegend() { //LEGEND FOR WORLD MAP 
    const legendData = {
      Facebook: "#3b5998",
      Instagram: "#ff8da2",
      Twitter: "#65c4ff",
      LinkedIn: "#106a9a",
      YouTube: "#ff0000",
      Pinterest: "#5c1f18",
      Reddit: "#ff4500",
      VKontakte: "#4af9ed",
      Other: "#888",
      No_Data: "#ccc"
    };
  
    const legend = d3.select("#legend");
  
    Object.entries(legendData).forEach(([platform, color]) => {
      const item = legend.append("div").attr("class", "legend-item");
      item.append("div").attr("class", "legend-color").style("background-color", color);
      item.append("span").text(platform);
    });
  }
  
  function makeWorldMap(deviceDataMap) { // DRAWS WORLD MAP !!!!!!
    const width = 1000, height = 520;

    const svg1 = d3.select("#world-map")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const projection = d3.geoNaturalEarth1().scale(160).translate([width / 2, height / 2]);
    const path = d3.geoPath().projection(projection);

    const tooltip1 = d3.select("#tooltip1");
    
    const colorMap = {
        Facebook: "#3b5998",
        Instagram: "#ff8da2",
        Twitter: "#65c4ff",
        LinkedIn: "#106a9a",
        Snapchat: "#fffc00",
        YouTube: "#ff0000",
        Pinterest: "#5c1f18",
        Reddit: "#ff4500",
        TikTok: "#010101",
        WhatsApp: "#25d366",
        VKontakte: "#4af9ed",
        Other: "#888"
    };

    const nameFix = {
        "russia": "russian federation",
        "russian federation": "russian federation",
        "democratic republic of the congo": "congo (democratic republic of the)",
        "republic of the congo": "congo (republic of the)",
        "north korea": "democratic people's republic of korea",
        "iran": "iran, islamic republic of",
        "syria": "syrian arab republic",
        "vietnam": "viet nam",
        "ivory coast": "côte d’ivoire",
        "laos": "lao peoples democratic republic",
        "lao": "lao peoples democratic republic"
    };

    d3.json("assets/data/world-110m.json").then(world => {
        const countries = topojson.feature(world, world.objects.countries).features;

        function updateMap(deviceType) {
            const isRankView = deviceType === "second" || deviceType === "third";
            const data = deviceDataMap[isRankView ? "ALL_devices" : deviceType];
            const rankIndex = deviceType === "second" ? 1 : deviceType === "third" ? 2 : 0;

            const usageMap = new Map();
            data.forEach(d => {
                const rawName = (d.Country || d.Continent || "").toLowerCase().trim();
                const fixedName = nameFix[rawName] || rawName;

                const cleanedData = {};
                Object.keys(d).forEach(key => {
                    if (key !== "Country" && key !== "Continent") {
                        cleanedData[key] = parseFloat(d[key]) || 0;
                    }
                });

                usageMap.set(fixedName, cleanedData);
            });

            const platformList = Object.keys(data[0]).filter(k => k !== "Country" && k !== "Continent");

            svg1.selectAll("path").remove();

            svg1.selectAll("path")
                .data(countries)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("fill", d => {
                    const countryName = d.properties.name.toLowerCase();
                    const mapped = nameFix[countryName] || countryName;
                    const values = usageMap.get(mapped);
                    if (!values) return "#ccc";

                    const entries = Object.entries(values).sort((a, b) => b[1] - a[1]);
                    let platform = "Other";
                    if (entries.length > rankIndex) {
                        platform = entries[rankIndex][0];
                    }

                    return colorMap[platform] || "#888";
                })
                .attr("stroke", "#333")
                .on("mouseover", function (event, d) {
                    const countryName = d.properties?.name?.toLowerCase() || "unknown";
                    const mapped = nameFix[countryName] || countryName;
                    const countryData = usageMap.get(mapped);

                    if (countryData) {
                        let html = `<strong>${d.properties.name}</strong><br/>`;
                        platformList.forEach(p => {
                            html += `${p}: ${countryData[p] || 0}%<br/>`;
                        });
                        tooltip1.html(html)
                            .style("visibility", "visible");
                    }
                })
                .on("mousemove", function (event) {
                    tooltip1
                        .style("top", (event.pageY + 10) + "px")
                        .style("left", (event.pageX + 10) + "px");
                })
                .on("mouseout", function () {
                    tooltip1.style("visibility", "hidden");
                });
        }

        d3.selectAll(".filter-btn").on("click", function () {
            const selected = d3.select(this).attr("data-device");
            d3.selectAll(".filter-btn").classed("btn-primary", false).classed("btn-secondary", true);
            d3.select(this).classed("btn-secondary", false).classed("btn-primary", true);
            updateMap(selected);
        });

        updateMap("ALL_devices");
        drawLegend();
    });
}