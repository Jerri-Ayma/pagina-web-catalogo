// UItilidades
function throttle(fn, limit = 100) {
  // Esta función limita la frecuencia con la que se ejecuta una función, útil para optimizar eventos como el scroll.
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// BOTÓN SCROLL TO TOP
const scrollTop = document.getElementById("scroll-top"); // Selecciona el elemento con el ID "scroll-top"

function showScrollTop() {
  // Esta función muestra u oculta el botón de scroll to top dependiendo de la posición del scroll
  if (window.scrollY >= 400) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
}

window.addEventListener("scroll", throttle(showScrollTop, 100));

// MENÚ HAMBURGUESA
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  const toggleIcon = navToggle.querySelector("i");

  function setMenuState(isOpen) {
    navMenu.classList.toggle("show", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    if (toggleIcon) {
      toggleIcon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    }
  }

  navToggle.addEventListener("click", () => {
    const isOpen = !navMenu.classList.contains("show");
    setMenuState(isOpen);
  });

  // Cerrar el menú al elegir una opción (mejor UX en móvil)
  navMenu.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Cerrar el menú con Escape (accesibilidad teclado)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("show")) {
      setMenuState(false);
      navToggle.focus();
    }
  });
}
