var torre= [];

//Torre
for (var i=0;i<30;i++){
  torre.push(new THREE.Vector2(7,i));
}
var formatorre= new THREE.LatheGeometry(torre);

var material= new THREE.MeshNormalMaterial();

var malla= new THREE.Mesh(formatorre,material);
malla.rotateX(Math.PI/6);

//Base
var base= new THREE.CylinderGeometry(10,10,5,10);

var mallabase= new THREE.Mesh(base,material);
mallabase.rotateX(Math.PI/6);

//Techo
var techo= new THREE.CylinderGeometry(15,15,5,10);

var mallatecho= new THREE.Mesh(techo,material);
mallatecho.translate(0,30,0);
mallatecho.rotateX(Math.PI/6);

var escena= new THREE.Scene();
escena.add(malla,mallabase,mallatecho);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
