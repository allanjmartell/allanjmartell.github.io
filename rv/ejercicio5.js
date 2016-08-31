var torre= [];

//Torre
for (var i=0;i<300;i++){
  torre.push(new THREE.Vector2(50,i));
}
var formatorre= new THREE.LatheGeometry(torre);
var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(formatorre,material);

//Base
var base= new THREE.CylinderGeometry(100,100,30,10);
var mallabase= new THREE.Mesh(base,material);

//Techo
var techo= new THREE.CylinderGeometry(100,100,25,10);
var techo2= new THREE.CylinderGeometry(50,50,50,10);
var techo3= new THREE.CylinderGeometry(30,30,65,10);
var mallatecho= new THREE.Mesh(techo,material);
var mallatecho2= new THREE.Mesh(techo2,material);
var mallatecho3= new THREE.Mesh(techo3,material);
mallatecho.translateY(300);
mallatecho2.translateY(300);
mallatecho3.translateY(300);

//Decoración
var estrella=new THREE.Shape();

estrella.lineTo(-50,50);
estrella.lineTo(-20,10);
estrella.lineTo(-70,0);
estrella.lineTo(-20,-10);
estrella.lineTo(-50,-50);
estrella.lineTo(-10,-20);
estrella.lineTo(0,-70);
estrella.lineTo(10,-20);
estrella.lineTo(50,-50);
estrella.lineTo(20,-10);
estrella.lineTo(70,0);
estrella.lineTo(20,10);
estrella.lineTo(50,50);
estrella.lineTo(10,20);
estrella.lineTo(0,70);
estrella.lineTo(-10,20);

var forma2= new THREE.ExtrudeGeometry(estrella,{amount:10});
var mallaestrella= new THREE.Mesh(forma2,material);
mallaestrella.translateY(315);
mallaestrella.rotateX(Math.PI/2);

var escena= new THREE.Scene();
escena.add(malla,mallabase,mallatecho,mallatecho2,mallatecho3,mallaestrella);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;
camara.position.y=400;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
