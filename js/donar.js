function donar() {
    event.preventDefault();

    const form = document.getElementById('form-donar');
    const idInput = document.querySelector('input[name="id"]');
    const nombreInput = document.querySelector('input[name="nombre"]');
    const fechaInput = document.querySelector('input[name="fecha"]');
    const tipoAlimentoSelect = document.querySelector('select[name="tipo-alimento"]');
    const pesoInput = document.querySelector('input[name="peso"]');
    const transporteSelect = document.querySelector('select[name="transporte"]');
    const direccionInput = document.querySelector('input[name="direccion"]');
    const descripcionTextarea = document.querySelector('textarea[name="descripcion"]');

    const id = idInput.value.trim();
    const nombre = nombreInput.value.trim();
    const fecha = fechaInput.value.trim();
    const tipoAlimento = tipoAlimentoSelect.value;
    const peso = pesoInput.value.trim();
    const transporte = transporteSelect.value;
    const direccion = direccionInput.value.trim();
    const descripcion = descripcionTextarea.value.trim();

    //validar nit o cc
    if (!/^\d{10}$/.test(id)) {
        alert('La C.C. o Nit es incorrecto');
        return; // Detener el proceso de registro
    } else {
        if (!validarNombre(nombre)) {
            return; // Detener el proceso de registro
        } else {
            if (!validarFecha(fecha)) {
                alert('La fecha es incorrecta')
            } else {
                if (!/^\d+$/.test(peso)) {
                    alert('El peso debe ser expresado con números');
                    return; // Detener el proceso de registro
                  }
                else {
                    alert('Se registro la donacion')
                }
            }


        }
    }
}

function validarFecha(fecha) {
    // Expresión regular para el formato de fecha dd/mm/aaaa
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!regexFecha.test(fecha)) {
      return false; // No coincide con el formato esperado
    }
  
    // Separar los componentes de la fecha
    const partesFecha = fecha.split('/');
    const dia = parseInt(partesFecha[0], 10);
    const mes = parseInt(partesFecha[1], 10);
    const anio = parseInt(partesFecha[2], 10);
  
      // Validar rango de los componentes de la fecha
      if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1900 || anio > 2100) {
        return false; // Al menos uno de los componentes está fuera de rango
    }
  
    // Obtener la fecha actual
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1; // Los meses se indexan desde 0
    const diaActual = fechaActual.getDate();
  
    // Validar si la fecha es posterior a la fecha actual
    if (
      anio < anioActual ||
      (anio === anioActual && mes < mesActual) ||
      (anio === anioActual && mes === mesActual && dia < diaActual)
    ) {
      return false; // La fecha es anterior a la fecha actual
    }
  
    return true; // La fecha es válida y posterior a la fecha actual
  }
  


function validarNombre(nombre) {
    if (nombre.length < 6) {
        alert('El nombre debe tener al menos 6 letras.');
        return false;
    }

    const regex = /^[a-zA-Z\s]*$/; // Expresión regular que permite solo letras y espacios

    if (!regex.test(nombre)) {
        alert('El nombre no debe contener caracteres especiales.');
        return false;
    }

    return true;
}
