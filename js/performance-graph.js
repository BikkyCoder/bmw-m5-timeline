document.addEventListener('DOMContentLoaded', function() {
    // Performance Graph Configuration
    const ctx = document.getElementById('performanceGraph').getContext('2d');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['E28', 'E34', 'E39', 'E60', 'F10', 'F90', 'G90'],
                datasets: [
                    {
                        label: 'Horsepower',
                        data: [286, 340, 400, 500, 560, 625, 735],
                        borderColor: '#0066cc',
                        backgroundColor: 'rgba(0, 102, 204, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: '0-60 mph (seconds)',
                        data: [6.5, 5.9, 4.8, 4.3, 3.7, 3.2, 2.8],
                        borderColor: '#ff0000',
                        backgroundColor: 'rgba(255, 0, 0, 0.1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'BMW M5 Performance Evolution',
                        color: '#ffffff',
                        font: {
                            family: 'Inter',
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Horsepower',
                            color: '#ffffff'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    y1: {
                        type: 'linear',
                        position: 'right',
                        title: {
                            display: true,
                            text: '0-60 mph (seconds)',
                            color: '#ffffff'
                        },
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
});