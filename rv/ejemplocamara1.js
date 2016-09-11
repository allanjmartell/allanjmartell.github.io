var escena=new THREE.Scene();

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var material= new THREE.MeshNormalMaterial();
var cubo=[];
var figura=[];
for (var i=0;i<2;i++){
cubo.push(new THREE.BoxGeometry());
figura.push(new THREE.Mesh(cubo[i],material));
}

figura.rotateX(Math.PI/4);
figura.rotateY(Math.PI/4);

escena.add(figura);
renderizador.render(escena,camara);
