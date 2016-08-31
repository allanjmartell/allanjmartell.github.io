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
var techo2= new THREE.CylinderGeometry(5,5,10,10);
var techo3= new THREE.CylinderGeometry(3,3,15,10);
var mallatecho= new THREE.Mesh(techo,material);
var mallatecho2= new THREE.Mesh(techo2,material);
var mallatecho3= new THREE.Mesh(techo3,material);
mallatecho.translateY(30);
mallatecho2.translateY(30);
mallatecho3.translateY(30);

//Decoración
var estrella= new THREE.Shape();

estrella.lineTo(-50,0,50);
estrella.lineTo(-20,0,10);
estrella.lineTo(-70,0,0);
estrella.lineTo(-20,0,-10);
estrella.lineTo(-50,0,-50);
estrella.lineTo(-10,0,-20);
estrella.lineTo(0,0,-70);
estrella.lineTo(10,0,-20);
estrella.lineTo(50,0,-50);
estrella.lineTo(20,0,-10);
estrella.lineTo(70,0,0);
estrella.lineTo(20,0,10);
estrella.lineTo(50,0,50);
estrella.lineTo(10,0,20);
estrella.lineTo(0,0,70);
estrella.lineTo(-10,0,20);

var forma2= new THREE.ShapeGeometry(estrella);
var mallaestrella= new THREE.Mesh(forma2);

var escena= new THREE.Scene();
escena.add(malla,mallabase,mallatecho,mallatecho2,mallatecho3,mallaestrella);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;
camara.position.y=30;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
