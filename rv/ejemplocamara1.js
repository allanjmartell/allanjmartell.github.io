var escena=new THREE.Scene();

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var cubo=[];
for (var i=0;i<2;i++){
cubo.push(new THREE.BoxGeometry());
}

var material= new THREE.MeshNormalMaterial();
var figura=new THREE.Mesh(cubo,material);
//cubo.rotateX(Math.PI/4);
//cubo.rotateY(Math.PI/4);

escena.add(figura);
renderizador.render(escena,camara);
