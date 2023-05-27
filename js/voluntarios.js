function volun_val(event) {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre-voluntario-modal').value.trim();
    const apellidos = document.getElementById('apellidos-voluntario-modal').value.trim();
    const identidad = document.getElementById('id-voluntario-modal').value.trim();
    const celular = document.getElementById('celtel-voluntario-modal').value.trim();
    const correo = document.getElementById('correo-voluntario-modal').value.trim();
    const justificacion = document.getElementById('message-text').value.trim();

    if (nombre === '' || apellidos === '' || identidad === '' || celular === '' || correo === '' || justificacion === '') {
        alert('Por favor, complete todos los campos.');
        return;
    } else {
        if (identidad.length !== 10) {
            alert('El número de identidad debe tener 10 dígitos.');
            return;
        } else {
            if (celular.length !== 10) {
                alert('El número de celular debe tener 10 dígitos.');
                return;
            } else {
                if (!isValidEmail(correo)) {
                    alert('Ingrese un correo electrónico válido.');
                    return;
                } else {
                    //aqui va la funcion para enviar los datos
                    const rels = registrarVoluntario(event);
                    alert("Se registro la solicitud")
                }
            }
        }
    }

}

async function registrarVoluntario(event) {
    const nombre = document.getElementById('nombre-voluntario-modal').value.trim();
    const apellidos = document.getElementById('apellidos-voluntario-modal').value.trim();
    const identidad = document.getElementById('id-voluntario-modal').value.trim();
    const celular = document.getElementById('celtel-voluntario-modal').value.trim();
    const correo = document.getElementById('correo-voluntario-modal').value.trim();
    const justificacion = document.getElementById('message-text').value.trim();

    const datos = {
        "nombre": nombre,
        "apellidos": apellidos,
        "identidad": identidad,
        "celular": celular,
        "correo": correo,
        "justificacion": justificacion
    };

    const datosJ = JSON.stringify(datos);

    await fetch("http://localhost:3000/inicio.html" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: datosJ,
    });    

}

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}
