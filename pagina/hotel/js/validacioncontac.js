function validarFormulario(event) {
    event.preventDefault(); 
    
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    
 
    if (nombre === "" || apellido === "" || email === "" || asunto === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    
   
    alert("Formulario de contacto enviado exitosamente.");
   
}


var formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", validarFormulario);