const boton_f = document.getElementById("bt_Calcular")
boton_f.addEventListener("click", calcular)

function calcular() {
    let x = parseFloat(document.getElementById("x_value").value)
    let cs = parseInt(document.getElementById("c_significativas").value)
    let funcion = document.querySelector('input[type=radio][name=optFun]:checked').value
    let c_error = parseFloat(Math.pow(10, (2 - cs)) * 0.5)
    let error_por = 100
    let terminos = []
    let erroresPorcentuales = []

    if (funcion == "S") {
        let termino = 0
        let resultado = 0
        let seno = 0
        let aprox_pre = 0

        var fila=`
        <tr>
            <th>Termino</th>
            <th>Resultado</th>
            <th>SEN</th>
            <th>E%</th>
        </tr>`;

        while (error_por>=c_error) {
            resultado = Math.pow(-1, termino) * (Math.pow(x, ((2 * termino) + 1)) / factorial((2 * termino) + 1))
            seno = seno + resultado
            termino = termino + 1
            error_por =Math.abs(((seno - aprox_pre) / seno) * 100)
            aprox_pre = seno
            terminos.push(termino);
            erroresPorcentuales.push(error_por);

            fila += `
            <tr>
                <td>${termino}</td>
                <td>${resultado}</td>
                <td>${seno}</td>
                <td>${error_por}</td>
            <tr>
            `
        }

        document.getElementById("tabla").innerHTML = fila;
        document.getElementById("respuesta").innerHTML = `<lb>seno(${x}) = ${seno} <br> Numéro de iteraciones: ${termino} <br>
        Criterio de error: ${c_error} <br> Error obtenido: ${error_por}</lb>`
        event.preventDefault()
    }


    if(funcion=="C"){
        let termino = 0
        let resultado = 0
        let cos = 0
        let aprox_pre = 0

        var fila=`
        <tr>
            <th>Termino</th>
            <th>Resultado</th>
            <th>COS</th>
            <th>E%</th>
        </tr>`;

        while (error_por>=c_error) {
            resultado = Math.pow(-1, termino) * (Math.pow(x, ((2* termino))) / factorial((2 * termino)))
            cos = cos + resultado
            termino = termino + 1
            error_por =Math.abs(((cos - aprox_pre) / cos) * 100)
            aprox_pre = cos
            terminos.push(termino);
            erroresPorcentuales.push(error_por);

            fila += `
            <tr>
                <td>${termino}</td>
                <td>${resultado}</td>
                <td>${cos}</td>
                <td>${error_por}</td>
            <tr>
            `
        }

        document.getElementById("tabla").innerHTML = fila
        document.getElementById("respuesta").innerHTML = `<lb>Coseno(${x}) = ${cos} <br> Numéro de iteraciones: ${termino} <br>
        Criterio de error: ${c_error} <br> Error obtenido: ${error_por}</lb>`
        event.preventDefault()
    }

    // Crear el gráfico
//     const ctx = document.getElementById('grafico').getContext('2d');
//     const chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: terminos,
//         datasets: [{
//             label: 'Error Porcentual',
//             data: erroresPorcentuales,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//             fill: false
//         }]
//     },
//     // options: {
//     //     scales: {
//     //         x: {
//     //             type: 'linear',
//     //             position: 'bottom'
//     //         },
//     //         y: {
//     //             beginAtZero: true,
//     //             max: Math.ceil(Math.max(...erroresPorcentuales) / 10) * 10  // Redondear hacia arriba al múltiplo de 10 más cercano
//     //         }
//     //     }
//     // }
// });


    function factorial(n) {
        var total = 1;
        for (i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }

}

const boton_r = document.getElementById("b_Reset")
boton_r.addEventListener("click", recargarPagina)

function recargarPagina() {
    location.reload();
}