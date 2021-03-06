var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma=new THREE.BoxGeometry(5,5,5);
var material= new THREE.MeshNormalMaterial();
var cubo=new THREE.Mesh(forma,material);
cubo.rotateX(-Math.PI/4);
cubo.rotateY(Math.PI/4);

escena.add(cubo);
renderizador.render(escena,camara);
