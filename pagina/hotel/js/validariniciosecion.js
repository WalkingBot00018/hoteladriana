
function validarInicioSesionForm() {
    const inicioSesionForm = document.querySelector('#inicio-sesion-form');
    const usuario = inicioSesionForm.querySelector('input[name="usuario"]').value;
    const contrasena = inicioSesionForm.querySelector('input[name="contrasena"]').value;

    if (usuario === '' || contrasena === '') {
        // alert('Por favor, complete todos los campos.');
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'complete todos los campos!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    } else {
       
        // alert('muy bien inciio de secion correcto :D.');
        Swal.fire(
            'Muy Bien!',
            'Inicio de Secion exitoso !',
            'success'
          )

      
        inicioSesionForm.submit();
    }
}


const inicioSesionForm = document.querySelector('#inicio-sesion-form');
inicioSesionForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validarInicioSesionForm();
});