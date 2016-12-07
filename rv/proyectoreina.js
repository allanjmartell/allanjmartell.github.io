var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(1.75,3.5,14,50);
columna2.translate(0,10.5,0);

var btecho = new THREE.CylinderGeometry(2,3,2,50);
btecho.translate(0,12.5,0);

var toroide2 = new THREE.TorusGeometry(2,.35,50,50);
toroide2.rotateX(Math.PI/2);
toroide2.translate(0,17.6,0);

var toroide3 = new THREE.TorusGeometry(1.75,.35,50,50);
toroide3.rotateX(Math.PI/2);
toroide3.translate(0,17.8,0);

var corona1 = new THREE.CylinderGeometry(2,1.5,3,50);
corona1.translate(0,19,0);

var corona2 = new THREE.SphereGeometry(1.8,50,50);
corona2.translate(0,19.5,0);

var bola = new THREE.SphereGeometry(.5,50,50);
bola.translate(0,21.5,0);
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

var reinafinal = new THREE.Geometry();
reinafinal.merge(mbase.geometry,mbase.matrix);
reinafinal.merge(mcolumna1.geometry,mcolumna1.matrix);

var mreinafinal = new THREE.Mesh(reinafinal);

var reinafinal2 = new THREE.Geometry();
reinafinal2.merge(mreinafinal.geometry,mreinafinal.matrix);
reinafinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

var mreinafinal2 = new THREE.Mesh(reinafinal2);

var reinafinal3 = new THREE.Geometry();
reinafinal3.merge(mreinafinal2.geometry,mreinafinal2.matrix);
reinafinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var mreinafinal3 = new THREE.Mesh(reinafinal3);

var reinafinal4 = new THREE.Geometry();
reinafinal4.merge(mreinafinal3.geometry,mreinafinal3.matrix);
reinafinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

var mreinafinal4 = new THREE.Mesh(reinafinal4);

var reinafinal5 = new THREE.Geometry();
reinafinal5.merge(mreinafinal4.geometry,mreinafinal4.matrix);
reinafinal5.merge(mbtecho.geometry,mbtecho.matrix);

var mreinafinal5 = new THREE.Mesh(reinafinal5);

var reinafinal6 = new THREE.Geometry();
reinafinal6.merge(mreinafinal5.geometry,mreinafinal5.matrix);
reinafinal6.merge(mtoroide2.geometry,mtoroide2.matrix);

var mreinafinal6 = new THREE.Mesh(reinafinal6);

var reinafinal7 = new THREE.Geometry();
reinafinal7.merge(mreinafinal6.geometry,mreinafinal6.matrix);
reinafinal7.merge(mtoroide3.geometry,mtoroide3.matrix);

var mreinafinal7 = new THREE.Mesh(reinafinal7);

var reinafinal8 = new THREE.Geometry();
reinafinal8.merge(mreinafinal7.geometry,mreinafinal7.matrix);
reinafinal8.merge(mcorona1.geometry,mcorona1.matrix);

var mreinafinal8 = new THREE.Mesh(reinafinal8);

var reinafinal9 = new THREE.Geometry();
reinafinal9.merge(mreinafinal8.geometry,mreinafinal8.matrix);
reinafinal9.merge(mcorona2.geometry,mcorona2.matrix);

var mreinafinal9 = new THREE.Mesh(reinafinal9);

var reinafinal10 = new THREE.Geometry();
reinafinal10.merge(mreinafinal9.geometry,mreinafinal9.matrix);
reinafinal10.merge(mbola.geometry,mbola.matrix);

//var malfilfinal10 = new THREE.Mesh(alfilfinal10,material);

//var escena=new THREE.Scene();
//escena.add(malfilfinal10);
//escena.rotateX(Math.PI/6);

//var camara=new THREE.PerspectiveCamera();
//camara.position.z=55;

//var renderizador=new THREE.WebGLRenderer();
//renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
//document.body.appendChild(renderizador.domElement);
//renderizador.render(escena,camara);
