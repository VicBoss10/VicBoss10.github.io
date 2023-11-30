
document.addEventListener('DOMContentLoaded', function () {
  // Inicializar la ventana emergente
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  // Abrir la ventana emergente automáticamente al cargar la página
  var miVentanaEmergente = document.getElementById('vemerinicio');
  var instanciaVentanaEmergente = M.Modal.getInstance(miVentanaEmergente);
  instanciaVentanaEmergente.open();
});