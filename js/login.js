function loguear() {
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

        // aqui se validaria la informacion e¿ingresada
        // EL admin@gmail.com esta de prueba igual que la contraseña
        if (username === 'admin@gmail.com' && password === '123') {
          window.open('administrador.html', '_blank');

          usernameInput.value = '';
          passwordInput.value = '';

        } else {
          alert('El usuario o la contraseña son incorrectos.');
        }
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



