var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(1.75,3.5,10,50);
columna2.translate(0,8.5,0);

var btecho = new THREE.CylinderGeometry(2,3,2,50);
btecho.translate(0,14.5,0);

var toroide2 = new THREE.TorusGeometry(2,.35,50,50);
toroide2.rotateX(Math.PI/2);
toroide2.translate(0,15.6,0);

var toroide3 = new THREE.TorusGeometry(1.75,.35,50,50);
toroide3.rotateX(Math.PI/2);
toroide3.translate(0,15.8,0);

var corona1 = new THREE.CylinderGeometry(2,1.5,3,50);
corona1.translate(0,17,0);

var corona2 = new THREE.SphereGeometry(1.8,50,50);
corona2.translate(0,17.5,0);

var bola = new THREE.SphereGeometry(.5,50,50);
bola.translate(0,19.5,0);
//Mallas
var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);
var mtoroide1 = new THREE.Mesh(toroide1);
var mcolumna2 = new THREE.Mesh(columna2);
var mbtecho = new THREE.Mesh(btecho);
var mtoroide2 = new THREE.Mesh(toroide2);
var mtoroide3 = new THREE.Mesh(toroide3);
var mcorona1 = new THREE.Mesh(corona1);
var mcorona2 = new THREE.Mesh(corona2);
var mbola = new THREE.Mesh(bola);

//Cuerpo completo

var alfilfinal = new THREE.Geometry();
alfilfinal.merge(mbase.geometry,mbase.matrix);
alfilfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

var malfilfinal = new THREE.Mesh(alfilfinal);

var alfilfinal2 = new THREE.Geometry();
alfilfinal2.merge(malfilfinal.geometry,malfilfinal.matrix);
alfilfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

var malfilfinal2 = new THREE.Mesh(alfilfinal2);

var alfilfinal3 = new THREE.Geometry();
alfilfinal3.merge(malfilfinal2.geometry,malfilfinal2.matrix);
alfilfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var malfilfinal3 = new THREE.Mesh(alfilfinal3);

var alfilfinal4 = new THREE.Geometry();
alfilfinal4.merge(malfilfinal3.geometry,malfilfinal3.matrix);
alfilfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

var malfilfinal4 = new THREE.Mesh(alfilfinal4);

var alfilfinal5 = new THREE.Geometry();
alfilfinal5.merge(malfilfinal4.geometry,malfilfinal4.matrix);
alfilfinal5.merge(mbtecho.geometry,mbtecho.matrix);

var malfilfinal5 = new THREE.Mesh(alfilfinal5);

var alfilfinal6 = new THREE.Geometry();
alfilfinal6.merge(malfilfinal5.geometry,malfilfinal5.matrix);
alfilfinal6.merge(mtoroide2.geometry,mtoroide2.matrix);

var malfilfinal6 = new THREE.Mesh(alfilfinal6);

var alfilfinal7 = new THREE.Geometry();
alfilfinal7.merge(malfilfinal6.geometry,malfilfinal6.matrix);
alfilfinal7.merge(mtoroide3.geometry,mtoroide3.matrix);

var malfilfinal7 = new THREE.Mesh(alfilfinal7);

var alfilfinal8 = new THREE.Geometry();
alfilfinal8.merge(malfilfinal7.geometry,malfilfinal7.matrix);
alfilfinal8.merge(mcorona1.geometry,mcorona1.matrix);

var malfilfinal8 = new THREE.Mesh(alfilfinal8);

var alfilfinal9 = new THREE.Geometry();
alfilfinal9.merge(malfilfinal8.geometry,malfilfinal8.matrix);
alfilfinal9.merge(mcorona2.geometry,mcorona2.matrix);

var malfilfinal9 = new THREE.Mesh(alfilfinal9);

var alfilfinal10 = new THREE.Geometry();
alfilfinal10.merge(malfilfinal9.geometry,malfilfinal9.matrix);
alfilfinal10.merge(mbola.geometry,mbola.matrix);

var malfilfinal10 = new THREE.Mesh(alfilfinal10,material);

var escena=new THREE.Scene();
escena.add(malfilfinal10);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=55;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
