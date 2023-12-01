
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  var miVentanaEmergente = document.getElementById('vemerinicio');
  var instanciaVentanaEmergente = M.Modal.getInstance(miVentanaEmergente);
  instanciaVentanaEmergente.open();
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});