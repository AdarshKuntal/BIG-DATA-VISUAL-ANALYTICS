
        // Data for the visualizations
        const dataa = {
            factors: {
                "Socio Demographic": { "2020": 50, "2021": 55 },
                "Cognitive": { "2020": 40, "2021": 50 },
                "Religious": { "2020": 56, "2021": 40 },
                "Financial": { "2020": 57, "2021": 56 }
            },
            platforms: {
                "WhatsApp": { "2020": 40, "2021": 60 },
                "Facebook": { "2020": 30, "2021": 50 },
                "Twitter": { "2020": 30, "2021": 40 },
                "Instagram": { "2020": 30, "2021": 40 },
                "YouTube": { "2020": 20, "2021": 10 }
            }
        };

        // Color schemes
        const colors = {
            "2020": "#3498db",
            "2021": "#e67e22"
        };
        
        // Platform icons
        const platformIcons = {
            "WhatsApp": "fab fa-whatsapp",
            "Facebook": "fab fa-facebook-f",
            "Twitter": "fab fa-twitter",
            "Instagram": "fab fa-instagram",
            "YouTube": "fab fa-youtube"
        };

        // Initialize the dashboard
        document.addEventListener('DOMContentLoaded', function() {
            renderFactorsChart();
            renderPlatformsChart();
            setupEventListeners();
        });

        // Set up event listeners
        function setupEventListeners() {
            const yearButtons = document.querySelectorAll('.year-btn');
            yearButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    yearButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Highlight the selected year
                    const year = this.getAttribute('data-year');
                    highlightYear(year);
                });
            });
            
            // Set "Both Years" as default active
            document.querySelector('.year-btn[data-year="both"]').classList.add('active');
        }

        // Highlight selected year
        function highlightYear(year) {
            // Reset all bars
            document.querySelectorAll('.bar, .comparison-bar').forEach(bar => {
                bar.style.opacity = 1;
                bar.style.transform = "scale(1)";
            });
            
            if (year !== "both") {
                // Dim bars that are not from the selected year
                document.querySelectorAll(`.bar:not(.bar-${year}), .comparison-bar:not([data-year="${year}"])`).forEach(bar => {
                    bar.style.opacity = "0.5";
                    bar.style.transform = "scale(0.95)";
                });
                
                // Highlight bars from the selected year
                document.querySelectorAll(`.bar.bar-${year}, .comparison-bar[data-year="${year}"]`).forEach(bar => {
                    bar.style.opacity = "1";
                    bar.style.transform = "scale(1)";
                    bar.style.boxShadow = "0 0 10px rgba(255,255,255,0.3)";
                });
            }
        }

        // Render factors chart
        function renderFactorsChart() {
            const container = document.getElementById('factorsChart');
            container.innerHTML = '';
            
            Object.entries(dataa.factors).forEach(([factor, values]) => {
                const barGroup = document.createElement('div');
                barGroup.className = 'bar-group';
                
                const label = document.createElement('div');
                label.className = 'bar-label';
                label.innerHTML = `<span><i class="fas fa-chart-bar"></i> ${factor}</span>`;
                
                // Create bar container for 2020
                const barContainer2020 = document.createElement('div');
                barContainer2020.className = 'bar-container';
                barContainer2020.style.marginBottom = '10px';
                
                const barLabel2020 = document.createElement('div');
                barLabel2020.className = 'year-label';
                barLabel2020.textContent = `2020: ${values["2020"]}%`;
                barLabel2020.style.color = colors["2020"];
                
                const barBg2020 = document.createElement('div');
                barBg2020.className = 'bar-bg';
                
                const bar2020 = document.createElement('div');
                bar2020.className = 'bar bar-2020';
                bar2020.style.width = '0';
                bar2020.style.background = `linear-gradient(90deg, ${colors["2020"]}, ${colors["2020"]}AA)`;
                bar2020.setAttribute('data-year', '2020');
                
                const barValue2020 = document.createElement('div');
                barValue2020.className = 'bar-value';
                barValue2020.textContent = `${values["2020"]}%`;
                bar2020.appendChild(barValue2020);
                
                barBg2020.appendChild(bar2020);
                
                // Create bar container for 2021
                const barContainer2021 = document.createElement('div');
                barContainer2021.className = 'bar-container';
                
                const barLabel2021 = document.createElement('div');
                barLabel2021.className = 'year-label';
                barLabel2021.textContent = `2021: ${values["2021"]}%`;
                barLabel2021.style.color = colors["2021"];
                
                const barBg2021 = document.createElement('div');
                barBg2021.className = 'bar-bg';
                
                const bar2021 = document.createElement('div');
                bar2021.className = 'bar bar-2021';
                bar2021.style.width = '0';
                bar2021.style.background = `linear-gradient(90deg, ${colors["2021"]}, ${colors["2021"]}AA)`;
                bar2021.setAttribute('data-year', '2021');
                
                const barValue2021 = document.createElement('div');
                barValue2021.className = 'bar-value';
                barValue2021.textContent = `${values["2021"]}%`;
                bar2021.appendChild(barValue2021);
                
                barBg2021.appendChild(bar2021);
                
                // Assemble the elements
                barGroup.appendChild(label);
                barGroup.appendChild(barLabel2020);
                barGroup.appendChild(barBg2020);
                barGroup.appendChild(barLabel2021);
                barGroup.appendChild(barBg2021);
                container.appendChild(barGroup);
                
                // Animate the bars
                setTimeout(() => {
                    bar2020.style.width = `${values["2020"]}%`;
                    bar2021.style.width = `${values["2021"]}%`;
                }, 100);
            });
        }

        // Render platforms chart
        function renderPlatformsChart() {
            const container = document.getElementById('platformsChart');
            container.innerHTML = '';
            
            Object.entries(dataa.platforms).forEach(([platform, values]) => {
                const comparisonContainer = document.createElement('div');
                comparisonContainer.className = 'comparison-container';
                
                const platformLabel = document.createElement('div');
                platformLabel.className = 'platform-label';
                platformLabel.innerHTML = `
                    <span class="platform-icon"><i class="${platformIcons[platform]}"></i></span>
                    <span>${platform}</span>
                `;
                
                const comparisonBars = document.createElement('div');
                comparisonBars.className = 'comparison-bars';
                
                // Create bar for 2020
                const bar2020 = document.createElement('div');
                bar2020.className = 'comparison-bar';
                bar2020.style.flex = `0 0 ${values["2020"]}%`;
                bar2020.style.background = `linear-gradient(90deg, ${colors["2020"]}, ${colors["2020"]}AA)`;
                bar2020.textContent = `${values["2020"]}%`;
                bar2020.setAttribute('data-year', '2020');
                bar2020.title = `2020: ${values["2020"]}%`;
                
                // Create bar for 2021
                const bar2021 = document.createElement('div');
                bar2021.className = 'comparison-bar';
                bar2021.style.flex = `0 0 ${values["2021"]}%`;
                bar2021.style.background = `linear-gradient(90deg, ${colors["2021"]}, ${colors["2021"]}AA)`;
                bar2021.textContent = `${values["2021"]}%`;
                bar2021.setAttribute('data-year', '2021');
                bar2021.title = `2021: ${values["2021"]}%`;
                
                // Add bars to container
                comparisonBars.appendChild(bar2020);
                comparisonBars.appendChild(bar2021);
                
                comparisonContainer.appendChild(platformLabel);
                comparisonContainer.appendChild(comparisonBars);
                container.appendChild(comparisonContainer);
            });
            
            // Add legend
            const legend = document.createElement('div');
            legend.className = 'legend';
            
            const legend2020 = document.createElement('div');
            legend2020.className = 'legend-item';
            legend2020.innerHTML = `
                <div class="legend-color" style="background: ${colors["2020"]}"></div>
                <span>2020</span>
            `;
            
            const legend2021 = document.createElement('div');
            legend2021.className = 'legend-item';
            legend2021.innerHTML = `
                <div class="legend-color" style="background: ${colors["2021"]}"></div>
                <span>2021</span>
            `;
            
            legend.appendChild(legend2020);
            legend.appendChild(legend2021);
            container.appendChild(legend);
        }