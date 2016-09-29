//Texturas
var TEXTURA = new Object();

TEXTURA.retrollamada = function(textura){
  var marmolblanco = new THREE.MeshBasicMaterial({map:textura});
  //Torre1
  TEXTURA.malla = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),marmolblanco);
  TEXTURA.malla.position.y=5;
  TEXTURA.malla.position.z=-10;
  TEXTURA.malla.position.x=10;
  //Torre2
  TEXTURA.malla2 = new THREE.Mesh(torrefinal11,marmolblanco);
  TEXTURA.malla2.position.y=5;
  TEXTURA.malla2.position.z=-80;
  TEXTURA.malla2.position.x=10;
}

TEXTURA.retrollamada2 = function(textura2){
  var marmolnegro = new THREE.MeshBasicMaterial({map:textura2}); 
  //Torre3
  TEXTURA.malla3 = new THREE.Mesh(torrefinal11,marmolnegro);
  TEXTURA.malla3.position.y=5;
  TEXTURA.malla3.z=-80;
  TEXTURA.malla3.position.x=80;
  //torre4
  TEXTURA.malla4 = new THREE.Mesh(torrefinal11,marmolnegro);
  TEXTURA.malla4.position.y=5;
  TEXTURA.malla4.position.z=-10;
  TEXTURA.malla4.position.x=80;
}

TEXTURA.setup = function(){
  TEXTURA.escena = new THREE.Scene();
  var cargador1 = new THREE.TextureLoader();
  cargador1.load("marmolblanco.jpg",TEXTURA.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolnegro.jpg",TEXTURA.retrollamada2);
  
  TEXTURA.camara = new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z=130;
  TEXTURA.camara.position.x=50;
  
  TEXTURA.renderizador = new THREE.WebGLRenderer();
  TEXTURA.renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(TEXTURA.renderizador.domElement);
}
  
TEXTURA.loop = function(){
  requestAnimationFrame(TEXTURA.loop);
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
} 

TEXTURA.setup();
TEXTURA.loop();


