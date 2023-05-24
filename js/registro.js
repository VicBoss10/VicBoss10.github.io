function registrarValidaciones(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const codigo = document.getElementById('codigo').value.trim();


    // // Validación de correo electrónico
    
    // Resto del código de validación
    if (username === '' || cc === '' || correo === '' || password === '' || codigo === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        if (!validarNombre(username)) {
            return; // Detener el proceso de registro
        }
        else{
            if (!/^\d{10}$/.test(cc)) {
                alert('La CC es incorrecta');
                return; // Detener el proceso de registro
            }
            else{
                if (!isValidEmail(correo)) {
                    alert('Ingrese un correo electrónico válido.');
                    return; // Detener el proceso de registro
                }
                else{
                   const rels = registrar(event);
                    
                }
            }
        }
        
        
     
    }

    
}

async function registrar(event){

    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const codigo = document.getElementById('codigo').value.trim();

    const datos = {"username":username,"cc":cc,"correo":correo,"password":password,"codigo":codigo}
    const datosJ = JSON.stringify(datos);


    await fetch("http://localhost:3000/registrarse.html",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "codigo": codigo,
        },
    }).then((res) => res.json())
    .then(async (data) => {
        
        if(data.resultado == 'V'){
            await fetch("http://localhost:3000/registrarse.html" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: datosJ,
            }); 

            
            alert('El registro ha sido exitoso');
            window.open('administrador.html', '_blank');
            // Vaciar los campos del formulario
            document.getElementById('username').value = '';
            document.getElementById('cc').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('password').value = '';
            document.getElementById('codigo').value = '';
            
            
        }else{
            alert("codigo no valido");
        }
    })

    
}



function mostrarCodigo(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    
    alert("Tu código de administrador es proporcionado por el Banco de Alimentos de Pasto, puedes encontrarlo en tu carnet de la empresa.");
  }
  

// Función para validar el formato de correo electrónico
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