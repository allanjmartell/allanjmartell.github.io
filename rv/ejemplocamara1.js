var escena=new THREE.Scene();

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var material= new THREE.MeshNormalMaterial();
var cubo=new THREE.BoxGeometry(10,10,10);
var grupo= new THREE.Group();

for (var i=0;i<8;i++){
var malla= new THREE.Mesh(cubo,material);
malla.position.x=i*10;

malla.matrixAutoUpdate = false;
malla.updateMatrix();

grupo.add(malla);
}
grupo.rotateX(Math.PI/4);
//figura.rotateY(Math.PI/4);

escena.add(grupo);
renderizador.render(escena,camara);
