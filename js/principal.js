document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
        coverTrigger:false,
        closeOnClick:true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        interval: 3000,
        indicators: false,
        height: 600
    });
});

//INSERTO TODOS LOS PRODUCTOS

const todos_los_productos = document.getElementById("todos_los_productos")


const descripcion = {
    Busos:{
        buso1: "Hoodie BUHO REAL NEGRO",
        buso2:"HOODIE BLURRED LOGO verde",
        buso3:"Hoodie NATURE´S ART AGENCY BLANCO", 
        buso4:"Hoodie kingdom art negro", 
    },
    Camisas:
    {   camisa1: "Camiseta TANGARA REAL verde",
        camisa2: "Camiseta ART AGENCY BLANCO",
        camisa3: "Camiseta Fiction mostaza",
        camisa4: "Camiseta box oversized Trust the logo gris", 
    },
    Pantalones:{
        
        pantalon1: "JEAN CARPENTER HOMBRE 710 GRIS",
        pantalon2: "Jean carpenter 369 mujer acid wash",
        pantalon3: "JEAN CARPENTER HOMBRE 710 crudo",
        pantalon4: "Jean Carpenter Hombre 710 negro"

    },
    Pantalonetas:{
        pantaloneta1:"Bermuda cargo negra",    
        pantaloneta2: "Biker weedgreen negro",  
        pantaloneta3:"Bermuda comunidad andina amarillo", 
        pantaloneta4: " Bermuda the pathfinder negro",   

    }   
}

const precios = {

    Busos:{
        precioBuso1: "$230.000",
        precioBuso2: "$280.000",
        precioBuso3: "$180.000",
        precioBuso4: "$250.000"
    },
    Camisas:
    {   
        precioCamisa1: "$119.000",
        precioCamisa2: " $119.000",
        precioCamisa3: "$105.000",
        precioCamisa4: "$112.000"
    },
    Pantalones:{
        
        precioPantalones1: "$154.000",
        precioPantalones2: "$140.000",
        precioPantalones3: "$145.000",
        precioPantalones4: "$154.000"

    },
    Pantalonetas:{
        precioPantaloneta1: "$108.000",
        precioPantaloneta2: "$56.000",
        precioPantaloneta3: "$54.000",
        precioPantaloneta4: "$81.000"
    }
}

const keys = Object.keys(descripcion)
let todos_los_productos_inner = ``;

for(let i = 1; i <= keys.length; i++){
    let keys_subobjeto_des = Object.keys(descripcion[`${keys[i-1]}`])
    let keys_subobjeto_pre = Object.keys(precios[`${keys[i-1]}`])

   
    for(let e = 1; e <= keys_subobjeto_des.length; e++){
        
        todos_los_productos_inner += `
            ${(e-1%4 == 0 || e == 1)? `<h3 id="${keys[i-1]}"> ${keys[i-1]}</h3> <hr>`:''}
            <div class="col s12 m3"">
                <div class="card" style="height: 500px">
                    <div class="card-image">
                        <img class="foto" carpeta="${keys[i-1]}" nombre="${keys_subobjeto_des[e-1]}" src="imgs/${keys[i-1]}/${keys_subobjeto_des[e-1]}.1.webp">
                    </div>
                    <div class="card-content">
                        <span class="card-title">${descripcion[`${keys[i-1]}`][`${keys_subobjeto_des[e-1]}`]} <br><span class="red"> ${precios[`${keys[i-1]}`][keys_subobjeto_pre[e-1]]}</span> </span>
                    </div>
                </div>
            </div>            
            `
    }
}
todos_los_productos.innerHTML = todos_los_productos_inner;


//hover en la foto

const fotos = document.querySelectorAll('.foto')

fotos.forEach(foto => {

    let carpeta = foto.getAttribute("carpeta")
    let nombre = foto.getAttribute("nombre")


    foto.addEventListener('mouseover', () => {
      foto.src = `imgs/${carpeta}/${nombre}.2.webp`  
        
    });
    foto.addEventListener('mouseout', () => {
        foto.src = `imgs/${carpeta}/${nombre}.1.webp`
    });
})




