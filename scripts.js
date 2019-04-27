/*jshint esversion: 6*/

function initGimmiCoords(){
  var Mapa = cargarMapa();  // Cargo Mapa
      editorDePoligonos = drawingMan(Mapa);
      Geocoder = new google.maps.Geocoder();
      nuevoPoligono = document.getElementById('nuevoPoly');

  google.maps.event.addListener(editorDePoligonos, 'overlaycomplete', function(polygon) {
    // guardo coordenadas del poligono
    var coordenadasGuardadas = polygon.overlay.getPath().getArray();
    mostrarCoordenadas(coordenadasGuardadas);
  });
}

// FUNCION PARA INICIAR EL MAPA
function cargarMapa() {
  var Mapa = new google.maps.Map(document.getElementById('map'), {
    center: {lat:-34.618356, lng:-58.433464},
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  return Mapa;
}

// FUNCION PARA DIBUJAR POLIGONOS
function drawingMan(map){
    var drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: 'polygon',
        polygonOptions: {
          editable: true,
        },
      },
    });
    drawingManager.setMap(map);
    return drawingManager;
}

function mostrarCoordenadas(coordenadas){
  // creo elemento
  var coords = document.createElement("table");
  // lo lleno con las coordenadas
  coords.innerHTML = coordenadas + "<br>";
  // Agrego el elemento al DOM
  document.getElementById("listaDeCoords").appendChild(coords);
};
