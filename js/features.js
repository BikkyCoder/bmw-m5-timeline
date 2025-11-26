// Initialize features
document.addEventListener('DOMContentLoaded', function() {
    // Performance Graph
    const ctx = document.getElementById('performanceGraph').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['E28', 'E34', 'E39', 'E60', 'F10', 'F90', 'G90'],
            datasets: [{
                label: 'Horsepower',
                data: [286, 340, 400, 500, 560, 625, 735],
                borderColor: '#0066cc',
                tension: 0.4,
                fill: false
            },
            {
                label: '0-60 mph (seconds)',
                data: [6.5, 5.9, 4.8, 4.3, 3.7, 3.2, 2.8],
                borderColor: '#ff0000',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#bfc3c6'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#bfc3c6'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#bfc3c6'
                    }
                }
            }
        }
    });

    // Feature animations
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.querySelector('.feature-icon').style.transform = 'scale(1.1) rotate(5deg)';
        });
        feature.addEventListener('mouseleave', () => {
            feature.querySelector('.feature-icon').style.transform = 'scale(1) rotate(0)';
        });
    });

    // Timeline scroll animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));

    // Comparison table sorting
    const tables = document.querySelectorAll('.comparison-table');
    tables.forEach(table => {
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const column = header.cellIndex;
                const rows = Array.from(table.querySelectorAll('tr')).slice(1);
                const sorted = rows.sort((a, b) => {
                    const aVal = a.cells[column].textContent;
                    const bVal = b.cells[column].textContent;
                    return isNaN(aVal) ? aVal.localeCompare(bVal) : aVal - bVal;
                });
                rows.forEach(row => row.remove());
                sorted.forEach(row => table.appendChild(row));
            });
        });
    });
});