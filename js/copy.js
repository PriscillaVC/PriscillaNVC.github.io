var botonCopy = document.querySelector("#copiar");

function copiar() {
    mensajeCaja = document.querySelector(".caja-encriptacion");
    mensajeCaja.select();
    document.execCommand("copy") //este es el responsable de copiar en el portapapeles
    alert("El mensaje fue copiado al portapapeles");
}

botonCopy.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("boton copiar");
    copiar();
});

