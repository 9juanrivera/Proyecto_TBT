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

    // limpiar galería
    galeria.innerHTML = "";

    // obtener imágenes y nombres
    const imagenesArray = (img.dataset.imagen || img.src).split(",");
    const nombresArray = (img.dataset.nombres || "").split(",");

    imagenesArray.forEach((src, index) => {
      const contenedor = document.createElement("div");
      contenedor.classList.add("item-galeria");

      const nuevaImg = document.createElement("img");
      nuevaImg.src = src.trim();

      const nombre = document.createElement("p");
      nombre.textContent = nombresArray[index]?.trim() || "Sin nombre";

      contenedor.appendChild(nuevaImg);
      contenedor.appendChild(nombre);

      galeria.appendChild(contenedor);
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