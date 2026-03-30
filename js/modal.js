const imagenes = document.querySelectorAll(".abrir");
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const galeria = document.getElementById("galeria");
const cerrar = document.querySelector(".cerrar");

//  galerías de imágenes
const galerias = {
  img1: ["a1.jpg", "a2.jpg", "a3.jpg"],
  img2: ["b1.jpg", "b2.jpg", "b3.jpg"],
  img3: ["c1.jpg", "c2.jpg", "c3.jpg"],
  img4: ["d1.jpg", "d2.jpg", "d3.jpg"],
  img5: ["e1.jpg", "e2.jpg", "e3.jpg"],
  img6: ["f1.jpg", "f2.jpg", "f3.jpg"]
};

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    titulo.textContent = img.dataset.titulo;
    texto.textContent = img.dataset.texto;

    // cargar galería
    const nombre = img.dataset.galeria;
    const lista = galerias[nombre];

    galeria.innerHTML = ""; // limpiar antes

    if (lista) {
      lista.forEach(src => {
        const nuevaImg = document.createElement("img");
        nuevaImg.src = src;
        nuevaImg.style.width = "100px";
        nuevaImg.style.margin = "5px";
        galeria.appendChild(nuevaImg);
      });
    }

    modal.style.display = "block";
  });
});

// cerrar
cerrar.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};