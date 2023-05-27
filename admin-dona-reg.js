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
    await listarRegDo();

    dataTable =  document.querySelector('#tableDo').DataTable();
    TableisInitialized = true;
}

const listarRegDo = async () => {
    try{
        const response = await fetch("http://localhost:3000/admin/dona/reg.html",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const donaciones = await response.json();

        console.log(donaciones);

        

        let contenido = ``;   

        donaciones.forEach((donacion, index) => {
            contenido += `
            <tr>
                <td>${donacion.donacion_id}</td>
                <td>${donacion.donador_id}</td>
                <td>${donacion.donador_nom}</td>
                <td>${donacion.donador_tel}</td>
                <td>${donacion.donador_cor}</td>
                <td>${donacion.donacion_tipo}</td>
                <td>${donacion.donacion_peso}</td>
                <td>${donacion.donacion_tran}</td>
                <td>${donacion.donacion_dir}</td>
                <td>${donacion.donacion_des}</td>
                <td>${donacion.donacion_estado}</td>
                <td>${donacion.fecha}</td>
            <tr>
            `;
        });

        document.querySelector('#tablaBodyDo').innerHTML = contenido;

    }catch(ex){
        alert(ex);
    }

}


window.addEventListener("load", async () => {
    await inittable();
})

