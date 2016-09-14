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
var techo= new THREE.CylinderGeometry(10,10,3.5,6);
var techo2= new THREE.CylinderGeometry(4,4,10,8);
var techo3= new THREE.CylinderGeometry(3,3,13.5,10);

techo.translate(0,30,0);
techo2.translate(0,30,0);
techo3.translate(0,30,0);

//Decoración
var cubito= new THREE.BoxGeometry(3,4,9.5);
cubito.translate(-7,33.5,0);

var cubito2= new THREE.BoxGeometry(3,4,9.5);
cubito2.rotateY(Math.PI/-3);
cubito2.translate(3.5,33.5,6);

var cubito3= new THREE.BoxGeometry(3,4,9.5);
cubito3.rotateY(Math.PI/3);
cubito3.translate(3.5,33.5,-6);

var cubito1= new THREE.BoxGeometry(3,2,9.5);
cubito1.translate(7,32.5,0);

var cubito22= new THREE.BoxGeometry(3,2,9.5);
cubito22.rotateY(Math.PI/-3);
cubito22.translate(-3.5,32.5,-6);

var cubito33= new THREE.BoxGeometry(3,2,9.5);
cubito33.rotateY(Math.PI/3);
cubito33.translate(-3.5,32.5,6);

//pico
var pico= new THREE.ConeGeometry(3,4,10);
pico.translate(0,38.7,0);

var malla= new THREE.Mesh(formatorre);//1
var mallabase= new THREE.Mesh(base);//2
var mallatecho= new THREE.Mesh(techo);//3
var mallatecho2= new THREE.Mesh(techo2);//4
var mallatecho3= new THREE.Mesh(techo3);//5
var mallaanillo= new THREE.Mesh(cubito);//6
var mallacubito2= new THREE.Mesh(cubito2);
var mallacubito3= new THREE.Mesh(cubito3);
var mallacubito1= new THREE.Mesh(cubito1);
var mallacubito22= new THREE.Mesh(cubito22);
var mallacubito33= new THREE.Mesh(cubito33);
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
torrefinal3.merge(mallaanillo.geometry,mallaanillo.matrix);

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

var mallatorrefinal6= new THREE.Mesh(torrefinal6);

var torrefinal7= new THREE.Geometry();
torrefinal7.merge(mallatorrefinal6.geometry,mallatorrefinal6.matrix);
torrefinal7.merge(mallacubito2.geometry,mallacubito2.matrix);

var mallatorrefinal7= new THREE.Mesh(torrefinal7);

var torrefinal8= new THREE.Geometry();
torrefinal8.merge(mallatorrefinal7.geometry,mallatorrefinal7.matrix);
torrefinal8.merge(mallacubito3.geometry,mallacubito3.matrix);

var mallatorrefinal8= new THREE.Mesh(torrefinal8);

var torrefinal9= new THREE.Geometry();
torrefinal9.merge(mallatorrefinal8.geometry,mallatorrefinal8.matrix);
torrefinal9.merge(mallacubito1.geometry,mallacubito1.matrix);

var mallatorrefinal9= new THREE.Mesh(torrefinal9);

var torrefinal10= new THREE.Geometry();
torrefinal10.merge(mallatorrefinal9.geometry,mallatorrefinal9.matrix);
torrefinal10.merge(mallacubito22.geometry,mallacubito22.matrix);

var mallatorrefinal10= new THREE.Mesh(torrefinal10);

var torrefinal11= new THREE.Geometry();
torrefinal11.merge(mallatorrefinal10.geometry,mallatorrefinal10.matrix);
torrefinal11.merge(mallacubito33.geometry,mallacubito33.matrix);

var Torrefinal= new THREE.Mesh(torrefinal11,material);

Torrefinal.rotateX(Math.PI/6);

var escena= new THREE.Scene();
escena.add(Torrefinal);

var camara= new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
