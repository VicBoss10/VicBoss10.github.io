const boton_f = document.getElementById("fmr1")
boton_f.addEventListener("submit", calcular)

function calcular(evt) {
    evt.preventDefault()
    biseccion()
    falsaPosicion()
    secante()
    newtonRaphson()
}

function biseccion() {
    let Xi = parseFloat(document.getElementById("txtXi").value)
    let Xs = parseFloat(document.getElementById("txtXs").value)
    let Cs = parseInt(document.getElementById("txtCs").value)
    let c_error = parseFloat(Math.pow(10, (2 - Cs)) * 0.5)
    let error_por = 100
    let iteracion = 0
    let Xr = 0
    let fxi = 0
    let fxr = 0
    aprox_pre = 0

    var fila = `
        <tr>
            <th>Iteración</th>
            <th>Xi</th>
            <th>Xs</th>
            <th>Xr</th>
            <th>F(Xi)</th>
            <th>F(Xr)</th>
            <th>e</th>
        </tr>`;

    while (error_por >= c_error) {
        Xr = (Xi + Xs) / 2
        fxi = Math.tan(Xi)-(0.5*Xi)
        fxr = Math.tan(Xr)-(0.5*Xr)
        iteracion = iteracion + 1
        error_por = Math.abs(((Xr - aprox_pre) / Xr) * 100)
        aprox_pre = Xr

        fila += `
            <tr>
                <td>${iteracion}</td>
                <td>${Xi}</td>
                <td>${Xs}</td>
                <td>${Xr}</td>
                <td>${fxi}</td>
                <td>${fxr}</td>
                <td>${error_por}</td>
            <tr>
            `
        if ((fxi * fxr) < 0) {
            Xs = Xr
        }
        else {
            Xi = Xr
        }
    }


    document.getElementById("tabla").innerHTML = fila;
}

function falsaPosicion() {
    let Xi = parseFloat(document.getElementById("txtXi").value)
    let Xs = parseFloat(document.getElementById("txtXs").value)
    let Cs = parseInt(document.getElementById("txtCs").value)
    let c_error = parseFloat(Math.pow(10, (2 - Cs)) * 0.5)
    let error_por = 100
    let iteracion = 0
    let Xr = 0
    let fxi = 0
    let fxr = 0
    aprox_pre = 0

    var fila = `
        <tr>
            <th>Iteración</th>
            <th>Xi</th>
            <th>Xs</th>
            <th>Xr</th>
            <th>F(Xi)</th>
            <th>F(Xs)</th>
            <th>F(Xr)</th>
            <th>e</th>
        </tr>`;

    while (error_por >= c_error) {
        fxi = Math.tan(Xi)-(0.5*Xi)
        fxr = Math.tan(Xr)-(0.5*Xr)
        fxs = Math.tan(Xs)-(0.5*Xs)
        Xr = Xs - ((fxs*(Xi - Xs)) / (fxi - fxs))
        iteracion = iteracion + 1

        error_por = Math.abs(((Xr - aprox_pre) / Xr) * 100)


        aprox_pre = Xr


        fila += `
            <tr>
                <td>${iteracion}</td>
                <td>${Xi}</td>
                <td>${Xs}</td>
                <td>${Xr}</td>
                <td>${fxi}</td>
                <td>${fxs}</td>
                <td>${fxr}</td>
                <td>${error_por}</td>
            <tr>
            `

        if ((fxi * fxr) < 0) {
            Xs = Xr
        }
        else {
            Xi = Xr
        }
    }

    document.getElementById("tabla2").innerHTML = fila;
}

function secante(){
    let Xi1 = parseFloat(document.getElementById("txtXi").value)
    let Xi = parseFloat(document.getElementById("txtXs").value)
    let Cs = parseInt(document.getElementById("txtCs").value)
    let c_error = parseFloat(Math.pow(10, (2 - Cs)) * 0.5)
    let error_por = 100
    let iteracion = 0
    let Xi2 = 0
    let fxi1 = 0
    let fxi = 0
    aprox_pre = 0

    var fila = `
        <tr>
            <th>Iteración</th>
            <th>Xi-1</th>
            <th>Xi</th>
            <th>Xi+1</th>
            <th>F(Xi-1)</th>
            <th>F(Xi)</th>
            <th>e</th>
        </tr>`;

    while (error_por >= c_error) {
        fxi1 = Math.tan(Xi1)-(0.5*Xi1)
        fxi = Math.tan(Xi)-(0.5*Xi)
        Xi2 = Xi - ((fxi*(Xi1 - Xi)) / (fxi1 - fxi))
        iteracion = iteracion + 1

        error_por = Math.abs(((Xi2 - aprox_pre) / Xi2) * 100)


        aprox_pre = Xi2


        fila += `
            <tr>
                <td>${iteracion}</td>
                <td>${Xi1}</td>
                <td>${Xi}</td>
                <td>${Xi2}</td>
                <td>${fxi1}</td>
                <td>${fxi}</td>
                <td>${error_por}</td>
            <tr>
            `
        Xi1=Xi
        Xi=Xi2
    }

    document.getElementById("tabla3").innerHTML = fila;
}

function newtonRaphson() {
    let Xi = parseFloat(document.getElementById("txtXi").value)
    let Cs = parseInt(document.getElementById("txtCs").value)
    let c_error = parseFloat(Math.pow(10, (2 - Cs)) * 0.5)
    let error_por = 100
    let iteracion = 0
    let Xi1 = 0
    let fxi = 0
    let dfx = 0
    aprox_pre = 0

    var fila = `
        <tr>
            <th>Iteración</th>
            <th>Xi</th>
            <th>F(Xi)</th>
            <th>F'(Xi)</th>
            <th>Xi+1</th>
            <th>e</th>
        </tr>`;

    while (error_por >= c_error) {
        fxi = Math.tan(Xi)-(0.5*Xi)
        dfx = 1/Math.pow(Math.cos(Xi), 2)
        iteracion = iteracion + 1
        Xi1=Xi-(fxi/dfx)
        error_por = Math.abs(((Xi1 - aprox_pre) / Xi1) * 100)
        aprox_pre=Xi1

        fila += `
            <tr>
                <td>${iteracion}</td>
                <td>${Xi}</td>
                <td>${fxi}</td>
                <td>${dfx}</td>
                <td>${Xi1}</td>
                <td>${error_por}</td>
            <tr>
            `        
        
        Xi=Xi1
    }

    document.getElementById("tabla4").innerHTML = fila;

}