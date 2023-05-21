const bt_cerrar1 = document.getElementById("cerrar1");
const bt_cerrar2 = document.getElementById("cerrar2");

const cn_donarDinero = document.getElementById("contenedor-donarDinero");
const cn_donarAlimentos = document.getElementById("contenedor-dialog");

const dl_donarAlimentos = document.getElementById("modal");
const dl_donarDinero = document.getElementById("modalDinero");


// cn_donarDinero.style.visibility = "hidden";
// cn_donarAlimentos.style.visibility = "hidden";

cn_donarAlimentos.style.display = "none";
cn_donarDinero.style.display = "none";


bt_cerrar1.addEventListener("click", () => {
    cn_donarAlimentos.style.display = "none";
    dl_donarAlimentos.style.display = "hidden";
})

bt_cerrar2.addEventListener("click", () => {
    cn_donarDinero.style.display = "none";
    dl_donarDinero.style.visibility = "hidden";
})


const bt_donarAlimentos = document.getElementById("donar-alimentos-container");

bt_donarAlimentos.addEventListener("click", function(event) {
    event.preventDefault();
    cn_donarAlimentos.style.display = "";
    dl_donarAlimentos.style.visibility = "";

})

const bt_donarDinero = document.getElementById("donar-dinero-container");

bt_donarDinero.addEventListener("click", function(event) {
    event.preventDefault();
    cn_donarDinero.style.display = "";
    dl_donarDinero.style.visibility = "";
})



