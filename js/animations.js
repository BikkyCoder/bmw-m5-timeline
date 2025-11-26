// Scroll reveal initialization
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal().reveal('.scroll-reveal', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 150
  });

  // Stats counter animation
  const stats = document.querySelectorAll('.stat-item');
  stats.forEach(stat => {
    const number = stat.querySelector('.stat-number');
    const targetValue = parseInt(stat.dataset.value);
    let currentValue = 0;
    
    const increment = targetValue / 50; // Adjust speed of counting
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      number.textContent = Math.round(currentValue);
    }, 30);
  });

  // Interactive hover effects
  const cards = document.querySelectorAll('.highlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});