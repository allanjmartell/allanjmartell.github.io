var VENTANA = new Object();

VENTANA.listener = function(){
  VENTANA.camara.aspect = window.innerWidth/window.innerHeight;
  VENTANA.camara.updateProjectionMatrix();
  VENTANA.renderizador.setSize(window.innerWidth,window.innerHeight);
}

VENTANA.setup = function(){
  var tipo_evento = 'resize';
  var capturarp = false; //No capturar de forma directa los siguientes eventos
  window.addEventListener(tipo_evento,VENTANA.listener,capturap);
  VENTANA.escena = new THREE.Scene();
  VENTANA.camara = nwe THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight*0.1,1000);
  
  VENTANA.camara.position.z=5;
  var lienzo = document.getElementById("ejemplo-ventana");
  VENTANA.renderizador = new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  VENTANA.renderizador.setSize(window.innerWidth,window.innerHeight);
  VENTANA.malla = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
  VENTANA.escena.add(VENTANA.malla);
}

 VENTANA.loop = function(){
  requestAnimationFrame(VENTANA.loop);
  VENTANA.malla.rotateX(0.01);
  VENTANA.malla.rotateY(0.01);
  VENTANA.renderizador.render(VENTANA.escena,VENTANA.malla);
 }
 
  VENTANA.setup();
  VENTANA.loop();
  
