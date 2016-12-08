var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(2,3.5,14,50);
columna2.translate(0,10.5,0);

var btecho = new THREE.CylinderGeometry(2,3.2,2,50);
btecho.translate(0,16.5,0);

var toroide2 = new THREE.TorusGeometry(2,.35,50,50);
toroide2.rotateX(Math.PI/2);
toroide2.translate(0,17.6,0);

var toroide3 = new THREE.TorusGeometry(1.75,.35,50,50);
toroide3.rotateX(Math.PI/2);
toroide3.translate(0,17.8,0);

var corona1 = new THREE.CylinderGeometry(2,1.5,3,50);
corona1.translate(0,19,0);

var corona2 = new THREE.CylinderGeometry(1,2,.5,50);
corona2.translate(0,20.75,0);

//Decoración
var forma=new THREE.Shape();

forma.moveTo(-1,1);
forma.lineTo(-7,3);
forma.lineTo(-7,-3);
forma.lineTo(-1,-1);
forma.lineTo(-3,-7);
forma.lineTo(3,-7);
forma.lineTo(1,-1);
forma.lineTo(7,-3);
forma.lineTo(7,3);
forma.lineTo(1,1);
forma.lineTo(3,7);
forma.lineTo(-3,7);
forma.lineTo(-1,1);

var cruz= new THREE.ExtrudeGeometry(forma,{amount:2});
cruz.scale(.12,.12,.12);
cruz.translate(0,22.4,0);

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
var mcruz = new THREE.Mesh(cruz)

//Cuerpo completo

var reyfinal = new THREE.Geometry();
reyfinal.merge(mbase.geometry,mbase.matrix);
reyfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

var mreyfinal = new THREE.Mesh(reyfinal);

var reyfinal2 = new THREE.Geometry();
reyfinal2.merge(mreyfinal.geometry,mreyfinal.matrix);
reyfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

var mreyfinal2 = new THREE.Mesh(reyfinal2);

var reyfinal3 = new THREE.Geometry();
reyfinal3.merge(mreyfinal2.geometry,mreyfinal2.matrix);
reyfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var mreyfinal3 = new THREE.Mesh(reyfinal3);

var reyfinal4 = new THREE.Geometry();
reyfinal4.merge(mreyfinal3.geometry,mreyfinal3.matrix);
reyfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

var mreyfinal4 = new THREE.Mesh(reyfinal4);

var reyfinal5 = new THREE.Geometry();
reyfinal5.merge(mreyfinal4.geometry,mreyfinal4.matrix);
reyfinal5.merge(mbtecho.geometry,mbtecho.matrix);

var mreyfinal5 = new THREE.Mesh(reyfinal5);

var reyfinal6 = new THREE.Geometry();
reyfinal6.merge(mreyfinal5.geometry,mreyfinal5.matrix);
reyfinal6.merge(mtoroide2.geometry,mtoroide2.matrix);

var mreyfinal6 = new THREE.Mesh(reyfinal6);

var reyfinal7 = new THREE.Geometry();
reyfinal7.merge(mreyfinal6.geometry,mreyfinal6.matrix);
reyfinal7.merge(mtoroide3.geometry,mtoroide3.matrix);

var mreyfinal7 = new THREE.Mesh(reyfinal7);

var reyfinal8 = new THREE.Geometry();
reyfinal8.merge(mreyfinal7.geometry,mreyfinal7.matrix);
reyfinal8.merge(mcorona1.geometry,mcorona1.matrix);

var mreyfinal8 = new THREE.Mesh(reyfinal8);

var reyfinal9 = new THREE.Geometry();
reyfinal9.merge(mreyfinal8.geometry,mreyfinal8.matrix);
reyfinal9.merge(mcorona2.geometry,mcorona2.matrix);

var mreyfinal9 = new THREE.Mesh(reyfinal9);

var reyfinal10 = new THREE.Geometry();
reyfinal10.merge(mreyfinal9.geometry,mreyfinal9.matrix);
reyfinal10.merge(mcruz.geometry,mcruz.matrix);

var mreyfinal10 = new THREE.Mesh(reyfinal10,material);

var escena=new THREE.Scene();
escena.add(mreyfinal10);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=70;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
