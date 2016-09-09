var cubos=[];
var material= new THREE.MeshNormalMaterial();

for (var j=1;j<=8;j++){
   cubos[j]=new THREE.BoxGeometry(10,10,10);
}

var malla=new THREE.Mesh(cubos,material);

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
