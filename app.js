const crear = document.querySelector(".crear");
const tachar = document.querySelectorAll(".tachar");
const container = document.querySelector(".container");
const contador = document.querySelector("span");
let aviso = document.querySelector(".aviso");

let path = document.querySelectorAll("path");
let svg = document.querySelectorAll("svg");


let parrafo;
let span;
let div;
let btnBorrar;
let btnCrear;

// Contar cuantas tareas hay en este momento
let contarTareas = tachar.length;

contador.textContent = `${contarTareas}`;


crear.addEventListener("click", () => {

  // Borramos el aviso de No hay tareas en este momento
    aviso.style.display = "none";
  

  // Div
  div = document.createElement("DIV");
  div.classList.add("tarea");

    // Button tachar
    btnBorrar = document.createElement("LABEL");
    btnBorrar.classList.add("container-btn");
  
    btnBorrar.innerHTML = `
                <input type="checkbox" class="tachar">
                <svg viewBox="0 0 64 64" height="1em" width="1em">
                  <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
            `;
  
    div.appendChild(btnBorrar);

  // Parrafo
  parrafo = document.createElement("P");
  parrafo.style.fontSize = "20px";
  parrafo.style.width = "700px";
  parrafo.style.padding = "15px";

  // span
  span = document.createElement("SPAN");
  span.textContent = `Nueva Tarea`;
  span.style.color = '#fff';

  parrafo.appendChild(span);

  div.appendChild(parrafo)

  // Button Editar
  btnCrear = document.createElement("IMG");
  btnCrear.classList.add("editar");
  btnCrear.src = "icons/editar.svg";

  div.appendChild(btnCrear);

    // Button Eliminar
    btnEliminar = document.createElement("IMG");
    btnEliminar.classList.add("eliminar");
    btnEliminar.src = "icons/borrar.svg";
  
    div.appendChild(btnEliminar);

  container.appendChild(div);

  contarTareas++;
  contador.textContent = `${contarTareas}`;
});

// Delegación de eventos para manejar la eliminación
container.addEventListener("click", (e) => {

    if (e.target.classList.contains("tachar")) {
      const div = e.target.parentElement.parentElement;  
      let texto = div.children[1].children[0];
      let checkbox = div.children[0].children[1].children[0];
      
      if(!texto.classList.contains("tachado")){        
        texto.classList.add("tachado");
        texto.style.color = "#363636";
        checkbox.style.strokeDasharray = "70.5096664428711 9999999";
        checkbox.style.strokeDashoffset = "-262.2723388671875";

      } else{
        texto.style.color = "#fff";
        texto.classList.remove("tachado")
        checkbox.style.strokeDasharray = "241 9999999";
        checkbox.style.strokeDashoffset = "0";
      }
    }
  
    if (e.target.classList.contains("editar")) {

      let mensaje = e.target.previousElementSibling.children[0];

      let tarea = prompt("Escribe el nuevo nombre de la tarea");

      e.target.parentElement.children[0].children[1].children[0].style.strokeDasharray = "241 9999999";
      e.target.parentElement.children[0].children[1].children[0].style.strokeDashoffset = "0";
      mensaje.classList.remove("tachado");
      mensaje.style.color = "#fff";


      if (tarea.trim().length !== 0) {

        mensaje.textContent = `${tarea}`;
 
      } else {

        alert("El valor introducido no es válido.");

      }
    }

    if(e.target.classList.contains("eliminar")){
      container.removeChild(e.target.parentElement);
  
      contarTareas--;
      contador.textContent = `${contarTareas}`;
  
      if(contarTareas === 0){
        aviso.style.display = "flex"
        aviso.style.justifyContent = "center"

        aviso.textContent = "No hay tareas en este momento";
      }
    }

});
