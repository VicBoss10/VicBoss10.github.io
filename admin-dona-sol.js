const table = document.getElementById("table");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll("input")

let count = 0;

window.addEventListener('click', (e) => {
    if(e.target.matches(".btn-warning")) {
        e.stopPropagation();
        let data = e.target.parentElement.parentElement.parentElement.children;
        fillData(data);
        modal.classList.toggle("translate");
    }
    if(e.target.matches(".btn-danger")) {
        modal.classList.toggle("translate");
        count = 0;
    }
})

const fillData = (data) => {
    for (let index of inputs) {
        index.value = data[count].textContent;
        count++;
    }
}



// LLENAR TABLA

let dataTable;
let TableisInitialized = false;

const tableConf = {
    pageLenght: 20,
    destroy: true  

};

const inittable = async() => {
    if(TableisInitialized){
        dataTable.destroy(); 
    }
    await listar();

    dataTable =  document.querySelector('#tableSol').DataTable();
    TableisInitialized = true;
}

const listar = async () => {
    try{
        const response = await fetch("http://localhost:3000/admin/ben/sol.html",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const solicitudes = await response.json();

        console.log(solicitudes);

        

        let contenido = ``;   

        solicitudes.forEach((solicitud, index) => {
            contenido += `
            <tr>
                <td>${solicitud.id_solicitud}</td>
                <td>${solicitud.solicitante_nom}</td>
                <td>${solicitud.solicitante_id}</td>
                <td>${solicitud.solicitante_correo}</td>
                <td>${solicitud.solicitante_celular}</td>
                <td>${solicitud.solicitante_direccion}</td>
            <tr>
            `;
        });

        // recordar meter doc

        document.querySelector('#tableBodySol').innerHTML = contenido;

    }catch(ex){
        alert(ex);
    }

}


window.addEventListener("load", async () => {
    await inittable();
})
