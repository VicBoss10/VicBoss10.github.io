function calcularErrorRelativo(actual, anterior) {
    return Math.abs((actual - anterior) / actual) * 100;
}

function bisection(xi, xs, Es) {
    let tableRows = "";
    let iteracion = 1;
    let Xi = xi;
    let Xs = xs;
    let Xr, FXi, FXr, error_c = 100;

    while (error_c > Es) {
        Xr = (Xi + Xs) / 2;
        FXi = Math.pow(Xi, 10) - 1;
        FXr = Math.pow(Xr, 10) - 1;

        error_c = calcularErrorRelativo(Xr, Xi);
        tableRows += `<tr><td>${iteracion}</td><td>${Xi.toFixed(4)}</td><td>${Xs.toFixed(4)}</td><td>${Xr.toFixed(4)}</td><td>${FXi.toFixed(4)}</td><td>${FXr.toFixed(4)}</td><td>${error_c.toFixed(4)}</td></tr>`;

        if (FXi * FXr < 0) {
            Xs = Xr;
        } else {
            Xi = Xr;
        }

        iteracion++;
    }

    return tableRows;
}

function regulaFalsa(xi, xs, Es) {
    let tableRows = "";
    let iteracion = 1;
    let Xi = xi;
    let Xs = xs;
    let Xr, FXi, FXs, FXr, error_c = 100;

    while (error_c > Es) {
        FXi = Math.pow(Xi, 10) - 1;
        FXs = Math.pow(Xs, 10) - 1;
        Xr = Xs - ((FXs * (Xi - Xs)) / (FXi - FXs));
        FXr = Math.pow(Xr, 10) - 1;

        error_c = calcularErrorRelativo(Xr, Xi);
        tableRows += `<tr><td>${iteracion}</td><td>${Xi.toFixed(4)}</td><td>${Xs.toFixed(4)}</td><td>${Xr.toFixed(4)}</td><td>${FXi.toFixed(4)}</td><td>${FXs.toFixed(4)}</td><td>${FXr.toFixed(4)}</td><td>${error_c.toFixed(4)}</td></tr>`;

        if (FXi * FXr < 0) {
            Xs = Xr;
        } else {
            Xi = Xr;
        }

        iteracion++;
    }

    return tableRows;
}

function runMethod() {
    const xi = parseFloat(document.getElementById("xi").value);
    const xs = parseFloat(document.getElementById("xs").value);

    if (isNaN(xi) || isNaN(xs)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const Cs = parseInt(document.getElementById("cs").value)
    const Es = parseFloat(Math.pow(10, (2 - Cs)) * 0.5); // 4 cifras significativas

    const bisectionOutput = bisection(xi, xs, Es);
    const regulaFalsaOutput = regulaFalsa(xi, xs, Es);

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `
        <h2>Resultados:</h2>
        <h3>Método de Bisección:</h3>
        <table>
            <tr>
                <th>Término</th>
                <th>Xi</th>
                <th>Xs</th>
                <th>Xr</th>
                <th>F(Xi)</th>
                <th>F(Xr)</th>
                <th>Error</th>
            </tr>
            ${bisectionOutput}
        </table>
        <h3>Método de Regla Falsa:</h3>
        <table>
            <tr>
                <th>Término</th>
                <th>Xi</th>
                <th>Xs</th>
                <th>Xr</th>
                <th>F(Xi)</th>
                <th>F(Xs)</th>
                <th>F(Xr)</th>
                <th>Error</th>
            </tr>
            ${regulaFalsaOutput}
        </table>
    `;
}
