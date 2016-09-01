var torre= [];

//Torre
for (var i=0;i<300;i++){
  torre.push(new THREE.Vector2(80,i));
}

var formatorre= new THREE.LatheGeometry(torre);
var material= new THREE.MeshNormalMaterial();

//Base
var base= new THREE.CylinderGeometry(100,100,50,10);

//Techo
var techo= new THREE.CylinderGeometry(100,100,35,10);
var techo2= new THREE.CylinderGeometry(50,50,100,10);
var techo3= new THREE.CylinderGeometry(30,30,135,10);

techo.translate(0,300,0);
techo2.translate(0,300,0);
techo3.translate(0,300,0);

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

var forma2= new THREE.ExtrudeGeometry(estrella,{amount:20});
forma2.translate(100,0,0);
forma2.rotateX(Math.PI/2);

var malla= new THREE.Mesh(formatorre);//1
var mallabase= new THREE.Mesh(base);//2
var mallatecho= new THREE.Mesh(techo);//3
var mallatecho2= new THREE.Mesh(techo2);//4
var mallatecho3= new THREE.Mesh(techo3);//5
var mallaestrella= new THREE.Mesh(forma2);//6

//Cuerpo completo
var torrefinal= new THREE.Geometry();
torrefinal.merge(malla.geometry,malla.matrix);
torrefinal.merge(mallabase.geometry,mallabase.matrix);

var torrefinal2= new THREE.Geometry();
torrefinal2.merge(mallatecho.geometry,mallatecho.matrix);
torrefinal2.merge(mallatecho2.geometry,mallatecho2.matrix);

var torrefinal3= new THREE.Geometry();
torrefinal3.merge(mallatecho3.geometry,mallatecho3.matrix);
torrefinal3.merge(mallaestrella.geometry,mallaestrella.matrix);

var mallatorrefinal= new THREE.Mesh(torrefinal);
var mallatorrefinal2= new THREE.Mesh(torrefinal2);
var mallatorrefinal3= new THREE.Mesh(torrefinal3);

var torrefinal4= new THREE.Geometry();
torrefinal4.merge(mallatorrefinal.geometry,mallatorrefinal.matrix);
torrefinal4.merge(mallatorrefinal2.geometry,mallatorrefinal2.matrix);

var mallatorrefinal4= new THREE.Mesh(torrefinal4);

var torrefinal5= new THREE.Geometry();
torrefinal5.merge(mallatorrefinal3.geometry,mallatorrefinal3.matrix);
torrefinal5.merge(mallatorrefinal4.geometry,mallatorrefinal4.matrix);

var Torrefinal= new THREE.Mesh(torrefinal5,material);

var escena= new THREE.Scene();
escena.add(Torrefinal);

var camara= new THREE.PerspectiveCamera();
camara.position.z=900;
camara.position.y=200;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
