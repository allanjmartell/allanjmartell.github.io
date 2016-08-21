var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var forma=new THREE.CylinderGeometry(.1,.1,2);
var forma2=new THREE.SphereGeometry(1.7,8,6);

var material= new THREE.MeshNormalMaterial();

var arbol=new THREE.Mesh(forma,material);
var arbol2=new THREE.Mesh(forma2,material);


arbol2.position.set(0,2,0);


escena.add(arbol,arbol2);
renderizador.render(escena,camara);

