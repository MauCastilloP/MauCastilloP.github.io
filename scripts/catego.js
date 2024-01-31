let visible = false;
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementById("cont_menunormal").style.display = "none";
    document.getElementById("cont_opciones").style.display = "flex";

    visible = true;

    //pantalla grande se muestra el all y se oculya el primario
    //al bajar se oculta el all ys se muestra secundario
  } else {
    document.getElementById("cont_menunormal").style.display = "flex";

    document.getElementById("cont_opciones").style.display = "none";

    visible = false;
  }
};
// window.addEventListener("resize", reset);
// const reset = () => {
//   document.getElementById("menuall").style.display = "none";
//       document.getElementById('logo').style.display = "none";

//       document.getElementById("homee").style.display = "none";
//       document.getElementById("menusecundario").style.display = "none";
//       document.getElementById('scroll-left-button').style.display = "none";
//       document.getElementById('scroll-right-button').style.display = "none";

// };

// // hover al seleccionado
// let list = document.querySelectorAll(".dashboard-menu a");
// let boxes = document.querySelectorAll(".dashboard-card");

// list.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     list.forEach((a) => {
//       a.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });

// Resaltado de sección activa al desplazarse

const menu = document.getElementById("menusecundario");
const indicador = document.getElementById("indicador");
const secciones = document.querySelectorAll(".home");
const tamano = 130;
let currentPosition;
let indexSeccionActiva;
//observer
const observer = new IntersectionObserver(
  (entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        currentPosition = dashboardMenu.scrollLeft;
        indexSeccionActiva = [...secciones].indexOf(entrada.target);

        sectionToScroll = indexSeccionActiva - 1; // sección a la que deseas desplazarte
        pixelToScroll = sectionToScroll * tamano - currentPosition;

        setTimeout(() => {
          dashboardMenu.scrollTo({
            left: dashboardMenu.scrollLeft + pixelToScroll,
            behavior: "smooth",
          });
        }, 400);

        indicador.style.transform = `translateX(${
          tamano * indexSeccionActiva
        }px)`;
      }
    });
  },
  {
    rootMargin: "-80px 0px 0px 0px",
    threshold: 0.2,
  }
);

//asignar un observador a cada una
secciones.forEach((seccion) => observer.observe(seccion));

//////////////
let estado = visible;
window.addEventListener("scroll", function () {
  if (estado != visible) {
    estado = visible;
  }
  // aquí tu código para actualizar el valor de isVisible
  // imprime en consola el valor actual de isVisible cada vez que cambia
});

const onResize = () => {
  //calcular tamano
  ancho = elemento.offsetWidth;
};
window.addEventListener("resize", onResize);

const dashboardMenu = document.getElementById("menusecundario");
const scrollLeftButton = document.getElementById("scroll-left-button");
const scrollRightButton = document.getElementById("scroll-right-button");

scrollLeftButton.addEventListener("click", function () {
  dashboardMenu.scrollTo({
    left: dashboardMenu.scrollLeft - 130,
    behavior: "smooth",
  });
});

scrollRightButton.addEventListener("click", function () {
  dashboardMenu.scrollTo({
    left: dashboardMenu.scrollLeft + 130,
    behavior: "smooth",
  });
});


