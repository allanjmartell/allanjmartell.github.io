var torre= [];

//Torre
for (var i=0;i<30;i++){
  torre.push(new THREE.Vector2(8,i));
}

var formatorre= new THREE.LatheGeometry(torre);
var material= new THREE.MeshNormalMaterial();

//Base
var base= new THREE.CylinderGeometry(10,10,5,1);

//Techo
var techo= new THREE.CylinderGeometry(10,10,3.5,1);
var techo2= new THREE.CylinderGeometry(5,5,10,1);
var techo3= new THREE.CylinderGeometry(3,3,13.5,1);

techo.translate(0,30,0);
techo2.translate(0,30,0);
techo3.translate(0,30,0);

//Decoración
var estrella=new THREE.Shape();

estrella.moveTo(-1,2);
estrella.lineTo(-5,5);
estrella.lineTo(-2,1);
estrella.lineTo(-7,0);
estrella.lineTo(-2,-1);
estrella.lineTo(-5,-5);
estrella.lineTo(-1,-2);
estrella.lineTo(0,-7);
estrella.lineTo(1,-2);
estrella.lineTo(5,-5);
estrella.lineTo(2,-1);
estrella.lineTo(7,0);
estrella.lineTo(2,1);
estrella.lineTo(5,5);
estrella.lineTo(1,2);
estrella.lineTo(0,7);
estrella.lineTo(-1,2);

var forma2= new THREE.ExtrudeGeometry(estrella,{amount:2});
forma2.rotateX(Math.PI/2);
forma2.translate(0,34,0);

//pico
var pico= new THREE.ConeGeometry(3,4,1);
pico.translate(0,38.7,0);

var malla= new THREE.Mesh(formatorre);//1
var mallabase= new THREE.Mesh(base);//2
var mallatecho= new THREE.Mesh(techo);//3
var mallatecho2= new THREE.Mesh(techo2);//4
var mallatecho3= new THREE.Mesh(techo3);//5
var mallaestrella= new THREE.Mesh(forma2);//6
var mallapico= new THREE.Mesh(pico);

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

var mallatorrefinal5= new THREE.Mesh(torrefinal5);

var torrefinal6= new THREE.Geometry();
torrefinal6.merge(mallatorrefinal5.geometry,mallatorrefinal5.matrix);
torrefinal6.merge(mallapico.geometry,mallapico.matrix);

var Torrefinal= new THREE.Mesh(torrefinal6,material);
