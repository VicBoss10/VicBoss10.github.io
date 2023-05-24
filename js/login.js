function loguearValidaciones() {
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const submitButton = document.querySelector('form button[type="submit"]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
      alert('Ingrese todos los campos');
    }
    else {
      if (!isValidEmail(username)) {
        alert('Ingrese un correo electrónico válido.');
        return; // Detener el proceso de registro
      }
      else {

        loguear(event);
        // aqui se validaria la informacion e¿ingresada
        // EL admin@gmail.com esta de prueba igual que la contraseña
        // if (username === 'admin@gmail.com' && password === '123') {
        //   window.open('administrador.html', '_blank');

        // }
      }
    }
  }, { once: true });
}

function isValidEmail(email) {
  // Utilizamos una expresión regular para validar el formato del correo electrónico
  // Puedes ajustar la expresión regular según tus necesidades
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return emailRegex.test(email);
}

//PARTE DEL FETCHHHHHH

async function loguear(event){

  event.preventDefault();

  const user = document.getElementById('username').value.trim();
  const pas = document.getElementById('password').value.trim();
 
  const datosLogin = {"username":user,"ps":pas};
  const datosJLogin = JSON.stringify(datosLogin);
  console.log(datosJLogin);

    await fetch("http://localhost:3000/login.html",{
      method:"GET",
      headers: {
        "Content-Type": "application/json", 
        "admin": user,
        "pas": pas,
      },
    })
    .then((res) => res.json())
    .then(async (data) => {

      if(data.esadmin == "V"){
        window.open('administrador.html', '_blank');
        usernameInput.value = '';
        passwordInput.value = '';
      }else{
        alert("Usuario o contraseña incorrectos");
      }
      console.log(data);
    });
  
}


