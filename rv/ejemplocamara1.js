var escena=new THREE.Scene();

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var mblanco= new THREE.MeshBasicMaterial({color: 0xffffff});
var mnegro= new THREE.MeshBasicMaterial({color: 0x686868});
var mcafe= new THREE.MeshBasicMaterial({color: 0x90642B});
var cubo=new THREE.BoxGeometry(10,10,10);
var grupo= new THREE.Group();
var k=0;

for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    
  if(k%2==0){var malla= new THREE.Mesh(cubo,mnegro);}
  else{var malla= new THREE.Mesh(cubo,mblanco);}

  malla.position.x=(j+1)*10;
  malla.position.z=(-i-1)*10;

  malla.matrixAutoUpdate = false;
  malla.updateMatrix();

  grupo.add(malla);
  k++;
}
  k++;
}

grupo.rotateX(Math.PI/4);
grupo.rotateY(Math.PI/4);

var grupo2= new THREE.Group();

for(var l=0;l<=10;l++){
  var malla2= new THREE.Mesh(cubo,mcafe);
  malla2.position.x=(l*10);
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  grupo2.add(malla2);
}

grupo2.rotateX(Math.PI/4);
grupo2.rotateY(Math.PI/4);

escena.add(grupo,grupo2);
renderizador.render(escena,camara);
