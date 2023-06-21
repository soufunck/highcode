/* Theme */
const chk1 = document.getElementById('chk1');
const chk2 = document.getElementById('chk2');

chk1.addEventListener('change', () => {
  document.body.classList.toggle('tema-dark');  
})

chk2.addEventListener('change', () => {
  document.body.classList.toggle('tema-dark');  
})

// Scroll Reveal effect
const sr = ScrollReveal({ distance: '1000px', duration: 500, reset: false });

sr.reveal(
    `.social,
    .services .card .content, 
    .works_card`, { 
        origin: 'left', interval: 300 
});

sr.reveal(`.section-quem-somos .content p`, { origin: 'right', interval: 300 });
sr.reveal(`.section-quem-somos .title`, { origin: 'top', interval: 300 });