var cubo=new THREE.BoxGeometry();
var material= new THREE.MeshNormalMaterial();

for (var j=1;j<=8;j++){
   cubo.clone();
   cubo.translate(j*10,0,0);
}

var malla=new THREE.Mesh(cubo,material);

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=30;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
