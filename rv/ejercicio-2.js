var escena=new THREE.Scene();

var camara=new THREE.Perspective();

camara.position.z=1;
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);

document.body.appendChild(renderizador.domElement);

var forma=new THREE.CylinderGeometry(5,5,20,32);
var material=new THREE.MeshNormalMaterial();
var arbol=new THREE.Mesh(forma,material);

arbol.rotateX(Math.PI/4);
arbol.rotateY(Math.PI/4);

escena.add(arbol);
renderizador.render(escena,camara);
