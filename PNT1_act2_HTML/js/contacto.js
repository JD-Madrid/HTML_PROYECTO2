let formulario = document.getElementById("formulario");
 
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("El mensaje se envió correctamente.");
    formulario.reset();
});