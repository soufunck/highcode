/* Animation */
AOS.init({
    disable: false,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false
});

/* Theme */
const chk1 = document.getElementById('chk1');
const chk2 = document.getElementById('chk2');

chk1.addEventListener('change', () => {
  document.body.classList.toggle('tema-dark');  
})

chk2.addEventListener('change', () => {
  document.body.classList.toggle('tema-dark');  
})
