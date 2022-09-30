var botonEncriptar = document.querySelector("#encriptador");
var botonCopy = document.querySelector(".boton-copiar");

var mensaje1 = document.querySelector(".mensaje-1");
var mensaje2 = document.querySelector(".mensaje-2");
var mensajeCaja = document.querySelector(".caja-encriptacion");

var areaEncriptar = document.querySelector("#Texto");
var imgFondo = document.querySelector(".fondo-caja");
var validar = 0;

function encriptar() {
    let textoCaja = document.querySelector("#Texto").value;
    let textoCifrado = textoCaja.replace(/e/igm, 'enter');
    textoCifrado = textoCifrado.replace(/i/igm, 'imes');
    textoCifrado = textoCifrado.replace(/a/igm, 'ai');
    textoCifrado = textoCifrado.replace(/o/igm, 'ober');
    textoCifrado = textoCifrado.replace(/u/igm, 'ufat');
    mensajeCaja.value = textoCifrado;
}

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    if(areaEncriptar.value == ""){

        botonCopy.classList.add("invisible");
        mensaje1.classList.remove("invisible");
        mensaje2.classList.remove("invisible");
        imgFondo.classList.remove("invisible");
        mensajeCaja.classList.remove("visible");

    } else {
        validar = IngresoMayusculas(areaEncriptar.value);

        if (validar == 0) {

            imgFondo.classList.add("invisible");
            mensaje1.classList.add("invisible");
            mensaje2.classList.add("invisible");
            mensajeCaja.classList.add("visible");
            botonCopy.classList.add("visible");
            encriptar();
            
        }
        else {
            alert('Solo letras minúsculas y sin acentos');
        }
    }
})
function IngresoMayusculas(texto) {
    var letrasMayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóú";
    for (i = 0; i < texto.length; i++) {
        if (letrasMayusculas.indexOf(texto.charAt(i), 0) != -1) {
            console.log("1")
            return 1;
        }
    }
    return 0;
}

