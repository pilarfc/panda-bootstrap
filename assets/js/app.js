var botonOrigen =  document.getElementById("botonOrigen");
var botonHistoria = document.getElementById("botonHistoria");
var botonRestaurar = document.getElementById("botonRestaurar");

var textoOrigen = document.getElementById("textoOrigen");
var textoHistoria = document.getElementById("textoHistoria");

var botonesCerrar = document.getElementsByClassName("cerrar"); // spans
var imagenes = document.getElementsByClassName("pandas");
console.log(botonesCerrar);
var divs = document.getElementsByTagName("div");
console.log(divs);


botonOrigen.addEventListener("click", mostrartextoOrigen);
botonOrigen.addEventListener("dblclick", ocultartextoOrigen);
botonHistoria.addEventListener("click", mostrartextoHistoria);
botonHistoria.addEventListener("dblclick", ocultartextoHistoria);
botonRestaurar.addEventListener("click", restaurarImagenes);




function mostrartextoOrigen () {
    textoOrigen.style.visibility = "visible";
}

function ocultartextoOrigen () {
 textoOrigen.style.visibility = "hidden";
}

function mostrartextoHistoria () {
    textoHistoria.style.visibility = "visible";
}

function ocultartextoHistoria () {
    textoHistoria.style.visibility = "hidden";
}



function ocultarImagen (tache) {
    var padre = tache.parentNode;  // Con este parentNode tomamos todo el div completo, incluyendo imagen y tache. Le pasamos como parametro el tache.
     padre.style.display = "none";
 }




function restaurarImagenes () {
    for (var i =0; i<divs.length; i++) {
  divs[i].style.display = "inline";
 }
}



   for (i=0; i<botonesCerrar.length; i++) {   // Este for sirve para agregarle el span a cada boton e imagen.
        botonesCerrar[i].addEventListener("click",identificarSpan);
    }


function identificarSpan () {
  ocultarImagen(this);  // este this nos está diciendo que al span tenemos que asignarle la funcion ocultarImagen.
}
