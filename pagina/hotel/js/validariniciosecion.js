
function validarInicioSesionForm() {
    const inicioSesionForm = document.querySelector('#inicio-sesion-form');
    const usuario = inicioSesionForm.querySelector('input[name="usuario"]').value;
    const contrasena = inicioSesionForm.querySelector('input[name="contrasena"]').value;

    if (usuario === '' || contrasena === '') {
        alert('Por favor, complete todos los campos.');
    } else {
       
        alert('muy bien inciio de secion correcto :D.');

      
        inicioSesionForm.submit();
    }
}


const inicioSesionForm = document.querySelector('#inicio-sesion-form');
inicioSesionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validarInicioSesionForm();
});