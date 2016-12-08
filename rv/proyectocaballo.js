var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

//Mallas
var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);
var mtoroide1 = new THREE.Mesh(toroide1);

//Cuerpo completo

var caballofinal = new THREE.Geometry();
caballofinal.merge(mbase.geometry,mbase.matrix);
caballofinal.merge(mcolumna1.geometry,mcolumna1.matrix);

var mcaballofinal = new THREE.Mesh(caballofinal);

var caballofinal2 = new THREE.Geometry();
caballofinal2.merge(mcaballofinal.geometry,mcaballofinal.matrix);
caballofinal2.merge(mcolumna1.geometry,mcolumna1.matrix);

var mcaballofinal2 = new THREE.Mesh(caballofinal2);

var caballofinal3 = new THREE.Geometry();
caballofinal3.merge(mcaballofinal2.geometry,mcaballofinal2.matrix);
caballofinal3.merge(mtoroide1.geometry,mtoroide1.matrix);

var mcaballofinal3 = new THREE.Mesh(caballofinal3,material);

var escena=new THREE.Scene();
escena.add(mcaballofinal3);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=70;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
