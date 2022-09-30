var botonDesencriptar = document.querySelector("#desencriptador");
var botonCopy = document.querySelector(".boton-copiar");

var mensaje1 = document.querySelector(".mensaje-1");
var mensaje2 = document.querySelector(".mensaje-2");
var mensajeCaja = document.querySelector(".caja-encriptacion");

var areaDesencriptar = document.querySelector("Texto");
var imgFondo = document.querySelector(".fondo-caja");
var validar = 0;

function desencriptar() {
    textoCaja = document.querySelector("#Texto").value;
    textoCifrado = textoCaja.replace(/enter/igm, 'e');
    textoCifrado = textoCifrado.replace(/imes/igm, 'i');
    textoCifrado = textoCifrado.replace(/ai/igm, 'a');
    textoCifrado = textoCifrado.replace(/ober/igm, 'o');
    textoCifrado = textoCifrado.replace(/ufat/igm, 'u');

    if (textoCaja == textoCifrado) {
        imgFondo.classList.remove("invisible");
        mensaje1.classList.remove("invisible");
        mensaje2.classList.remove("invisible");
        botonCopy.classList.add("invisible");
        mensajeCaja.classList.remove("visible");
    } else {
        mensajeCaja.value = textoCifrado;
    }
}

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    if (areaDesencriptar.value == "") {

        botonCopy.classList.add("invisible");
        mensaje1.classList.remove("invisible");
        mensaje2.classList.remove("invisible");
        imgFondo.classList.remove("invisible");
        mensajeCaja.classList.remove("visible");
        
    } else {

        validar = IngresoMayusculas(areaDesencriptar.value);

        if (validar == 0) {

            imgFondo.classList.add("invisible");
            mensaje1.classList.add("invisible");
            mensaje2.classList.add("invisible");
            mensajeCaja.classList.add("visible");
            botonCopy.classList.add("visible");
            desencriptar();

        }
        else {
            alert('Solo letras minúsculas y sin acentos');
        }
    }
});

