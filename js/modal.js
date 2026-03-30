const imagenes = document.querySelectorAll(".abrir");
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const cerrar = document.querySelector(".cerrar");

// abrir modal
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex"; // muestra el modal
    titulo.textContent = img.dataset.titulo;
    texto.textContent = img.dataset.texto;
  });
});

// cerrar modal
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// cerrar si se hace click afuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});