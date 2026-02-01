// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Efecto de Navbar al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000'; // Se oscurece más al bajar
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        } else {
            header.style.backgroundColor = '#1a1a1a'; // Vuelve al original
            header.style.boxShadow = 'none';
        }
    });

    console.log("Portafolio cargado correctamente");
});