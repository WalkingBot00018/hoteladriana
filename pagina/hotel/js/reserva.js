document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("hotelReservaForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fechaLlegada = document.getElementById("fechaLlegada").value;
        const fechaSalida = document.getElementById("fechaSalida").value;

        if (!nombre || !fechaLlegada || !fechaSalida) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, complete todos los campos.",
            });
        } else {
            // Realizar la lógica de reserva aquí

            Swal.fire({
                icon: "success",
                title: "¡Reserva exitosa!",
                text: "Su habitación ha sido reservada con éxito.",
            });

            form.reset();
        }
    });
});
