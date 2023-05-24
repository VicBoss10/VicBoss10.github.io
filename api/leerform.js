const formDonar = document.querySelector('#form-donar');

formDonar.addEventListener('submit', async (event) =>{


    event.preventDefault();
    const formDataDonar = new FormData(formDonar);
    const datos =  Object.fromEntries(formDataDonar.entries());
    const datosJ =  JSON.stringify(datos);

    await fetch("http://localhost:3000/donar.html" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: datosJ,
    });    


});


// async function registrarDonacion(event){
//     event.preventDefault();
//     const formDataDonar = new FormData(formDonar);
//     const datos =  Object.fromEntries(formDataDonar.entries());
//     const datosJ =  JSON.stringify(datos);
//     await fetch("http://localhost:3000/donar.html" , {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: datosJ,
//     });    
// }
