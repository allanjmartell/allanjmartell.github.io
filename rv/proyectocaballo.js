var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var forma=new THREE.Shape();

forma.moveTo(-10,0);
forma.lineTo(-4,6);
forma.lineTo(-4,9);
forma.lineTo(-1,6);
forma.lineTo(1,7);
forma.lineTo(5,7);
forma.lineTo(8,3);
forma.lineTo(10,-1);
forma.lineTo(10,-4);
forma.lineTo(7,-9);
forma.lineTo(-5,-9);
forma.lineTo(-6,-6);
forma.lineTo(-2,-2);
forma.lineTo(0,2);
forma.lineTo(-2,1);
forma.lineTo(-4,0);
forma.lineTo(-5,-2);
forma.lineTo(-6,-3);
forma.lineTo(-7,-3);
forma.lineTo(-10,0);

var caballo= new THREE.ExtrudeGeometry(forma,{amount:3.5});
//caballo.scale(.12,.12,.12);
caballo.translate(0,3.5,0);

//Mallas
var mbase = new THREE.Mesh(base);
var mcolumna1 = new THREE.Mesh(columna1);
var mtoroide1 = new THREE.Mesh(toroide1);
var mcaballo = new THREE.Mesh(caballo);

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

var mcaballofinal3 = new THREE.Mesh(caballofinal3);

var caballofinal4 = new THREE.Geometry();
caballofinal4.merge(mcaballofinal3.geometry,mcaballofinal3.matrix);
caballofinal4.merge(mcaballo.geometry,mcaballo.matrix);

var mcaballofinal4 = new THREE.Mesh(caballofinal4,material);

var escena=new THREE.Scene();
escena.add(mcaballofinal4);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=70;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
