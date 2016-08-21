var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma=new THREE.CylinderGeometry(.5,.5,2);
var material= new THREE.MeshNormalMaterial();
var arbol=new THREE.Mesh(forma,material);
arbol.rotateX(Math.PI/4);
arbol.rotateY(Math.PI/4);

var forma2=new THREE.SphereGeometry(.5,3,2);
var arbol2=new THREE.Mesh(forma2,material);
arbol2.rotateX(Math.PI/4);
arbol2.rotateY(Math.PI/4);

escena.add(arbol,arbol2);
renderizador.render(escena,camara);
