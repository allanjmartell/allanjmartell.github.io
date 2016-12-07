var base = new THREE.CylinderGeometry(5,5,3,10);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,1.5);
columna1.translate(0,1.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,1,10,10);
toroide1.translate(0,4,0);
toroide1.rotateX(Math.PI/2);


var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);
var mtoroide1 = new THREE.Mesh(toroide1);

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
alfilfinal3.merge(malfilfinal2.geometry,malfilfinal.matrix);
alfilfinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var malfilfinal3 = new THREE.Mesh(alfilfinal3,material);

var escena=new THREE.Scene();
escena.add(malfilfinal3);

var camara=new THREE.PerspectiveCamera();
camara.position.z=100;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
