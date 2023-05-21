const formDonar = document.querySelector('#form-donar');

formDonar.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formDataDonar = new FormData(formDonar);
    const datos = Object.fromEntries(formDataDonar.entries());
    console.log(JSON.stringify(datos));
   
})




