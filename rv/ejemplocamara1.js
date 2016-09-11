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
var k=0;

for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    
  if(k%2==0){var malla= new THREE.Mesh(cubo,mnegro);}
  else{var malla= new THREE.Mesh(cubo,mblanco);}

  malla.position.x=j*10;
  malla.position.z=-i*10;

  malla.matrixAutoUpdate = false;
  malla.updateMatrix();

  grupo.add(malla);
  k++;
}
  k++;
}

grupo.rotateX(Math.PI/4);
grupo.rotateY(Math.PI/4);

escena.add(grupo);
renderizador.render(escena,camara);
