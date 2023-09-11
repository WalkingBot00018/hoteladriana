function validarRegistroForm() {
    const registroForm = document.querySelector('#registro form');
    const nombre = registroForm.querySelector('input[name="nombre"]').value;
    const apellido = registroForm.querySelector('input[name="apellido"]').value;
    const correo = registroForm.querySelector('input[name="email"]').value;
    const tipoDocumento = registroForm.querySelector('select[name="tipoDocumento"]').value;
    const condicionesAceptadas = registroForm.querySelector('input[name="condiciones"]').checked;
  
    if (nombre === '' || apellido === '' || correo === '' || tipoDocumento === '' || !condicionesAceptadas) {
      alert('Por favor, complete todos los campos y acepte las condiciones.');
    } else {
      
      alert('Muy bien, ya te registraste.');
  
      
      registroForm.submit();
    }
  }
  
 
  const registroForm = document.querySelector('#registro form');
  registroForm.addEventListener('submit', function (event) {
    event.preventDefault();
    validarRegistroForm();
  });
  