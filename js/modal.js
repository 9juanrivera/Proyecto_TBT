const imagenes = document.querySelectorAll(".abrir");
const modal = document.getElementById("modal");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const galeria = document.getElementById("galeria");
const cerrar = document.querySelector(".cerrar");

// carrusel brandon
const carrusel = [
  { src: "img/exs/brandon/isabel.jpg", nombre: "Isabel 🖤" },
  { src: "img/exs/brandon/britney.jpg", nombre: "Britney" },
  { src: "img/exs/brandon/evelyn.jpg", nombre: "Evelyn" },
  { src: "img/exs/brandon/anasofiaa.jpg", nombre: "Ana" },
  { src: "img/exs/brandon/mariana.jpg", nombre: "Mariana" },
  { src: "img/exs/brandon/sofia.jpg", nombre: "Sofia" },
  { src: "img/exs/brandon/Melany.jpg", nombre: "Melany" },
  { src: "img/exs/brandon/evelynn.jpg", nombre: "Evelyn" },
  { src: "img/exs/brandon/salome.jpg", nombre: "Salome" },
  { src: "img/exs/brandon/vidales.jpg", nombre: "Vidales" },
  { src: "img/exs/brandon/paola.jpg", nombre: "Paola" },
  { src: "img/exs/brandon/paolaa.jpg", nombre: "Paola" },
  { src: "img/exs/brandon/samara.jpg", nombre: "Samara" },
  { src: "img/exs/brandon/ximena.jpg", nombre: "Ximena" },
  { src: "img/exs/brandon/unknow.jpg", nombre: "Desconocida" },
  { src: "img/exs/brandon/syv.jpg", nombre: "Sara y Valery" },
  { src: "img/exs/brandon/anasofiaa.jpg", nombre: "Ana Sofia" },
];

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    titulo.textContent = img.dataset.titulo;
    texto.textContent = img.dataset.texto || "";

    // limpiar galería
    galeria.innerHTML = "";

    // si otro necesita carrucel dta carrusel= true
    if (img.dataset.carrusel) {

      galeria.innerHTML = `
        <div class="carrusel">
          <button id="prev">❮</button>

          <div class="contenedor-carrusel">
            <img id="imagenActual">
            <p id="nombreImagen"></p>
          </div>

          <button id="next">❯</button>
        </div>
      `;

      let indice = 0;
      const imagenActual = document.getElementById("imagenActual");
      const nombreImagen = document.getElementById("nombreImagen");

      function mostrarImagen() {
        imagenActual.src = carrusel[indice].src;
        nombreImagen.textContent = carrusel[indice].nombre;
      }

      document.getElementById("next").onclick = () => {
        indice = (indice + 1) % carrusel.length;
        mostrarImagen();
      };

      document.getElementById("prev").onclick = () => {
        indice = (indice - 1 + carrusel.length) % carrusel.length;
        mostrarImagen();
      };

      mostrarImagen();

    } else {
      
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
    }

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