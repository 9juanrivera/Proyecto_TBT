const imagenes = document.querySelectorAll(".abrir");
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const galeria = document.getElementById("galeria");

const cerrar = document.querySelector(".cerrar");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    titulo.textContent = img.dataset.titulo;
    texto.textContent = img.dataset.texto;

    // el limpiado de las fotos de los otros
    galeria.innerHTML = "";

    // agarrar la imagen
    const imagenesArray = (img.dataset.imagen || img.src).split(",");

    imagenesArray.forEach((src, index) => {
      const ruta = src.trim();

      const nuevaImg = document.createElement("img");
      nuevaImg.src = ruta;


      // click en miniatura
      nuevaImg.addEventListener("click", () => {
        imagenPrincipal.src = ruta;
      });

      galeria.appendChild(nuevaImg);
    });

    modal.style.display = "flex";
  });
});

// cerrar con la X
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// cerrar haciendo click afuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});