var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(2,3.5,6,50);
columna2.translate(0,6.5,0);



//Mallas
var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);
var mtoroide1 = new THREE.Mesh(toroide1);
var mcolumna2 = new THREE.Mesh(columna2);

//Cuerpo completo

var peonfinal = new THREE.Geometry();
peonfinal.merge(mbase.geometry,mbase.matrix);
peonfinal.merge(mcolumna1.geometry,mcolumna1.matrix);

var mpeonfinal = new THREE.Mesh(peonfinal);

var peonfinal2 = new THREE.Geometry();
peonfinal2.merge(mpeonfinal.geometry,mpeonfinal.matrix);
peonfinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

var mpeonfinal2 = new THREE.Mesh(peonfinal2);

var peonfinal3 = new THREE.Geometry();
peonfinal3.merge(mpeonfinal2.geometry,mpeonfinal2.matrix);
peonfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var mpeonfinal3 = new THREE.Mesh(peonfinal3);

var peonfinal4 = new THREE.Geometry();
peonfinal4.merge(mpeonfinal3.geometry,mpeonfinal3.matrix);
peonfinal4.merge(mcolumna2.geometry,mcolumna2.matrix);

var mpeonfinal4 = new THREE.Mesh(peonfinal4,material);

var escena=new THREE.Scene();
escena.add(mpeonfinal4);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=40;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
