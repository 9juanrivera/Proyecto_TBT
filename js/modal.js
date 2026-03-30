const imagenes = document.querySelectorAll(".abrir");
const modal = document.getElementById("modal");
const texto = document.getElementById("texto");
const cerrar = document.querySelector(".cerrar");

// abrir modal con info de cada imagen
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    texto.textContent = img.dataset.texto; // info personalizada
  });
});

// cerrar con la X
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

// cerrar dando click fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});