var torre= [];

//Torre
for (var i=0;i<30;i++){
  torre.push(new THREE.Vector2(10,i));
}
var formatorre= new THREE.LatheGeometry(torre);
var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(formatorre,material);

//Base
var base= new THREE.CylinderGeometry(13,13,5,10);
var mallabase= new THREE.Mesh(base,material);

//Techo
var techo= new THREE.CylinderGeometry(15,15,5,10);
var techo2= new THREE.CylinderGeometry(5,5,5,20);
var mallatecho= new THREE.Mesh(techo,material);
var mallatecho2= new THREE.Mesh(techo2,material);
mallatecho.translateY(30);
mallatecho2.translateY(30);

var escena= new THREE.Scene();
escena.add(malla,mallabase,mallatecho,mallatecho2);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
