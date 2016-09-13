var torre= [];

//Torre
for (var i=0;i<30;i++){
  torre.push(new THREE.Vector2(8,i));
}

var formatorre= new THREE.LatheGeometry(torre);
var material= new THREE.MeshNormalMaterial();

//Base
var base= new THREE.CylinderGeometry(10,10,5,10);

//Techo
var techo= new THREE.CylinderGeometry(10,10,3.5,10);
var techo2= new THREE.CylinderGeometry(5,5,10,10);
var techo3= new THREE.CylinderGeometry(3,3,13.5,10);

techo.translate(0,30,0);
techo2.translate(0,30,0);
techo3.translate(0,30,0);


var malla= new THREE.Mesh(formatorre);//1
var mallabase= new THREE.Mesh(base);//2
var mallatecho= new THREE.Mesh(techo);//3
var mallatecho2= new THREE.Mesh(techo2);//4
var mallatecho3= new THREE.Mesh(techo3);//5

//Cuerpo completo
var torrefinal= new THREE.Geometry();
torrefinal.merge(malla.geometry,malla.matrix);
torrefinal.merge(mallabase.geometry,mallabase.matrix);

var mallatorrefinal= new THREE.Mesh(torrefinal);

var torrefinal2= new THREE.Geometry();
torrefinal2.merge(mallatecho.geometry,mallatecho.matrix);
torrefinal2.merge(mallatecho2.geometry,mallatecho2.matrix);

var mallatorrefinal2= new THREE.Mesh(torrefinal2);

var torrefinal3= new THREE.Geometry();
torrefinal3.merge(mallatecho3.geometry,mallatecho3.matrix);
torrefinal3.merge(mallatorrefinal.geometry,mallatorrefinal.matrix);

var mallatorrefinal3= new THREE.Mesh(torrefinal3);

var torrefinal4= new THREE.Geometry();
torrefinal4.merge(mallatorrefinal2.geometry,mallatorrefinal2.matrix);
torrefinal4.merge(mallatorrefinal3.geometry,mallatorrefinal3.matrix);

var mallatorrefinal4= new THREE.Mesh(torrefinal4);

var Torrefinal= new THREE.Mesh(torrefinal4,material);
