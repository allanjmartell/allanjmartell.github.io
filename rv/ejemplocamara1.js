var escena=new THREE.Scene();

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var mblanco= new THREE.MeshBasicMaterial({color: 0xffffff});
var mnegro= new THREE.MeshBasicMaterial({color: 0x686868});
var cubo=new THREE.BoxGeometry(10,10,10);
var grupo= new THREE.Group();


for (var i=0;i<8;i++){
  
if(i%2==0){var malla= new THREE.Mesh(cubo,mnegro);}
else{var malla= new THREE.Mesh(cubo,mblanco);}

malla.position.x=i*10;

malla.matrixAutoUpdate = false;
malla.updateMatrix();

grupo.add(malla);
}
grupo.rotateX(Math.PI/4);
//figura.rotateY(Math.PI/4);

escena.add(grupo);
renderizador.render(escena,camara);
