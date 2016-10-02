var camara,escena,renderizador;
var torre1,torre2;

init();
loop();

function init() {
  //Camara
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 
  //Escena
  escena = new THREE.Scene();
  escena.rotateX(Math.PI/4);
  
  //Textura
  var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
  var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');
  var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
  var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
  //Torre1
  torre1 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre1.position.y=5;
  torre1.position.z=-10;
  torre1.position.x=10;
  //Torre2
  torre2 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre2.position.y=5;
  torre2.position.z=-80;
  torre2.position.x=10;
  //Torre3
  torre3 = new THREE.Mesh(torrefinal11,marmolnegro);
  torre3.position.y=5;
  torre3.z=-80;
  torre3.position.x=80;
  //torre4
  torre4 = new THREE.Mesh(torrefinal11,marmolnegro);
  torre4.position.y=5;
  torre4.position.z=-10;
  torre4.position.x=80;
  escena.add(torre1,torre2,torre3,torre4);
  
  renderizador = new THREE.WebGLRenderer();
  renderizador.setPixelRatio( window.devicePixelRatio );
  renderizador.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild(renderizador.domElement);
}

function loop() {
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
