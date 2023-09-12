
function validarFormulario(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;

    if (nombre === "" || apellido === "" || email === "" || asunto === "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Por favor, complete todos los campos."
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "¡Formulario enviado!",
        text: "Formulario de contacto enviado exitosamente."
    });

    document.getElementById("miFormulario").reset();
}

var formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", validarFormulario);