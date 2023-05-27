function solicitud_beneficiario(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const id = document.querySelector('input[name="id"]').value.trim();
    const correo = document.querySelector('input[name="correo"]').value.trim();
    const telefono = document.querySelector('input[name="telefono"]').value.trim();
    const direccion = document.querySelector('input[name="direccion"]').value.trim();
    const archivo = document.querySelector('input[name="subirArchivo"]').value.trim();

    

    if (nombre === '' || id === '' || correo === '' || telefono === '' || direccion === '' ) {
        alert('Por favor, completa todos los campos');
        return;  
      }else{
        if (!validarNombre(nombre)) {
            return; // Detener el proceso de registro
        }else{
            if (!/^\d{10}$/.test(id)) {
                alert('La CC es incorrecta');
                return; // Detener el proceso de registro
            }
            else{
                if (!isValidEmail(correo)) {
                    alert('Ingrese un correo electrónico válido.');
                    return; // Detener el proceso de registro
                }else{
                    if (!/^\d{10}$/.test(telefono)) {
                        alert('El telefono es incorrecto');
                        return; // Detener el proceso de registro
                    }
                    else{
                        const rels = registrarBeneficiario(event);
                        alert("Se registro la solicitud")
                        window.open("../inicio.html")
                        window.close()
                    }
                }
            }
        }
      }
}

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

async function registrarBeneficiario(event) {
    const nombre = document.querySelector('input[name="nombre"]').value.trim();
    const id = document.querySelector('input[name="id"]').value.trim();
    const correo = document.querySelector('input[name="correo"]').value.trim();
    const telefono = document.querySelector('input[name="telefono"]').value.trim();
    const direccion = document.querySelector('input[name="direccion"]').value.trim();
    const archivo = document.querySelector('input[name="subirArchivo"]').value.trim();


    const datos = {
        "nombre": nombre,
        "id": id,
        "correo": correo,
        "telefono": telefono,
        "direccion": direccion,
        "archivo": archivo
    }

    const datosJ = JSON.stringify(datos);

    await fetch("http://localhost:3000/beneficiarios-ser.html", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: datosJ,
    });

}

function isValidEmail(email) {
    // Utilizamos una expresión regular para validar el formato del correo electrónico
    // Puedes ajustar la expresión regular según tus necesidades
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return emailRegex.test(email);
}

function validarNombre(username) {
    if (username.length < 6) {
      alert('El nombre debe tener al menos 6 letras.');
      return false;
    }
  
    const regex = /^[a-zA-Z\s]*$/; // Expresión regular que permite solo letras y espacios
  
    if (!regex.test(username)) {
      alert('El nombre no debe contener caracteres especiales.');
      return false;
    }
  
    return true;
  }