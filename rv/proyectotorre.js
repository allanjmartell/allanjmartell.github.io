var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(2.5,3.5,10,50);
columna2.translate(0,8.5,0);

var btecho = new THREE.CylinderGeometry(3.5,2.5,2,16);
btecho.translate(0,14.5,0);

var btecho2 = new THREE.CylinderGeometry(2,3.5,1,16);
btecho2.translate(0,16,0);

var piedra = new THREE.BoxGeometry(2,2.5,.1);
piedra.translate(0,16.5,3.25);

var piedra2 = new THREE.BoxGeometry(2,2.5,.1);
piedra2.translate(0,16.5,-3.25); 

var piedra3 = new THREE.BoxGeometry(2,2.5,.1);
piedra3.rotateY(Math.PI/2);
piedra3.translate(3.25,16.5,0); 

var piedra4 = new THREE.BoxGeometry(2,2.5,.1);
piedra4.rotateY(Math.PI/2);
piedra4.translate(-3.25,16.5,0);

var piedra5 = new THREE.BoxGeometry(2,2.5,.1);
piedra5.rotateY(Math.PI/4);
piedra5.translate(3.25,16.5,3.25);

//Mallas
var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);//1
var mtoroide1 = new THREE.Mesh(toroide1);//2
var mcolumna2 = new THREE.Mesh(columna2);//3
var mbtecho = new THREE.Mesh(btecho);
var mbtecho2 = new THREE.Mesh(btecho2);
var mpiedra = new THREE.Mesh(piedra);
var mpiedra2 = new THREE.Mesh(piedra2);
var mpiedra3 = new THREE.Mesh(piedra3);
var mpiedra4 = new THREE.Mesh(piedra4);
var mpiedra5 = new THREE.Mesh(piedra5);

//Cuerpo completo
var torrefinal = new THREE.Geometry();
torrefinal.merge(mcolumna1.geometry,mcolumna1.matrix);
torrefinal.merge(mtoroide1.geometry,mtoroide1.matrix);

var mtorrefinal = new THREE.Mesh(torrefinal);

var torrefinal2 = new THREE.Geometry();
torrefinal2.merge(mtorrefinal.geometry,mtorrefinal.matrix);
torrefinal2.merge(mcolumna2.geometry,mcolumna2.matrix);

var mtorrefinal2 = new THREE.Mesh(torrefinal2);

var torrefinal3 = new THREE.Geometry();
torrefinal3.merge(mtorrefinal2.geometry,mtorrefinal2.matrix);
torrefinal3.merge(mbase.geometry,mbase.matrix);

var mtorrefinal3 = new THREE.Mesh(torrefinal3);

var torrefinal4 = new THREE.Geometry();
torrefinal4.merge(mtorrefinal3.geometry,mtorrefinal3.matrix);
torrefinal4.merge(mbtecho.geometry,mbtecho.matrix);

var mtorrefinal4 = new THREE.Mesh(torrefinal4);

var torrefinal5 = new THREE.Geometry();
torrefinal5.merge(mtorrefinal4.geometry,mtorrefinal4.matrix);
torrefinal5.merge(mbtecho2.geometry,mbtecho2.matrix);

var mtorrefinal5 = new THREE.Mesh(torrefinal5);

var torrefinal6 = new THREE.Geometry();
torrefinal6.merge(mtorrefinal5.geometry,mtorrefinal5.matrix);
torrefinal6.merge(mpiedra.geometry,mpiedra.matrix);

var mtorrefinal6 = new THREE.Mesh(torrefinal6);

var torrefinal7 = new THREE.Geometry();
torrefinal7.merge(mtorrefinal6.geometry,mtorrefinal6.matrix);
torrefinal7.merge(mpiedra2.geometry,mpiedra2.matrix);

var mtorrefinal7 = new THREE.Mesh(torrefinal7);

var torrefinal8 = new THREE.Geometry();
torrefinal8.merge(mtorrefinal7.geometry,mtorrefinal7.matrix);
torrefinal8.merge(mpiedra3.geometry,mpiedra3.matrix);

var mtorrefinal8 = new THREE.Mesh(torrefinal8);

var torrefinal9 = new THREE.Geometry();
torrefinal9.merge(mtorrefinal8.geometry,mtorrefinal8.matrix);
torrefinal9.merge(mpiedra4.geometry,mpiedra4.matrix);

var mtorrefinal9 = new THREE.Mesh(torrefinal9);

var torrefinal10 = new THREE.Geometry();
torrefinal10.merge(mtorrefinal9.geometry,mtorrefinal9.matrix);
torrefinal10.merge(mpiedra5.geometry,mpiedra5.matrix);

var mtorrefinal10 = new THREE.Mesh(torrefinal10,material);

var escena = new THREE.Scene();
escena.add(mtorrefinal10);
escena.rotateX(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.y=15;
camara.position.z=70;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
