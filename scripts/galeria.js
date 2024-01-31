// Agrega este código al final de tu archivo JavaScript

// Inicializar Swiper
var swiper = new Swiper('.swiper-container', {
    speed: 1000, // Duración de la transición en milisegundos (1 segundo en este ejemplo)

    loop: true,  // Permite hacer un bucle continuo del slider
    autoplay: {
      delay: 5000,  // Cambia la imagen cada 4 segundos
    },
    pagination: {
      clickable: true,  // Permite hacer clic en la paginación para cambiar de imagen
    },
  });
  