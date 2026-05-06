// UItilidades
function throttle(fn, limit = 100) { // Esta función limita la frecuencia con la que se ejecuta una función, útil para optimizar eventos como el scroll.
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// BOTÓN SCROLL TO TOP
const scrollTop = document.getElementById('scroll-top'); // Selecciona el elemento con el ID "scroll-top"

function showScrollTop() { // Esta función muestra u oculta el botón de scroll to top dependiendo de la posición del scroll
    if (window.scrollY >= 400) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
}

window.addEventListener('scroll', throttle(showScrollTop, 100));