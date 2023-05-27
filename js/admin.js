window.onload = function () {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button";//esta linea es necesaria para chrome
}

window.onhashchange = function(){
    window.location.hash = "no-back-button"; 
}

function donaciones(){
// Obtener una referencia al cuerpo de la tabla
const tbody = document.querySelector('#donaciones-table tbody');

// Datos de ejemplo
const datosEjemplo = [
  { fecha: '2023-05-01', donante: 'Juan Pérez', descripcion: 'Alimentos no perecederos', cantidad: 10 },
  { fecha: '2023-05-02', donante: 'María Gómez', descripcion: 'Ropa y calzado', cantidad: 5 },
  { fecha: '2023-05-03', donante: 'Pedro Rodríguez', descripcion: 'Artículos de higiene', cantidad: 8 },
];

// Generar las filas de la tabla con los datos de ejemplo
datosEjemplo.forEach((dato) => {
  // Crear una nueva fila
  const row = document.createElement('tr');

  // Crear las celdas y asignarles los valores
  const fechaCell = document.createElement('td');
  fechaCell.textContent = dato.fecha;
  row.appendChild(fechaCell);

  const donanteCell = document.createElement('td');
  donanteCell.textContent = dato.donante;
  row.appendChild(donanteCell);

  const descripcionCell = document.createElement('td');
  descripcionCell.textContent = dato.descripcion;
  row.appendChild(descripcionCell);

  const cantidadCell = document.createElement('td');
  cantidadCell.textContent = dato.cantidad;
  row.appendChild(cantidadCell);

  // Agregar la fila al cuerpo de la tabla
  tbody.appendChild(row);
});

}

donaciones();


function cerrarVentana() {
  window.close();
}