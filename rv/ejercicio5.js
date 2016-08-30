var puntos= new THREE.Shape();

puntos.lineTo(5,0);
puntos.lineTo(5,10);
puntos.lineTo(0,10);
puntos.lineTo(0,0);

var forma= new THREE.LatheGeometry(puntos);

var material= new THREE.MeshNormalMaterial();

var malla= new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/6);


var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=20;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
