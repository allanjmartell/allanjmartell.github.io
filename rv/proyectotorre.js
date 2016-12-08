var base = new THREE.CylinderGeometry(5,5,3,50);
var material = new THREE.MeshNormalMaterial();

var columna1 = new THREE.CylinderGeometry(3.5,4,2,50);
columna1.translate(0,2.5,0);

var toroide1 = new THREE.TorusGeometry(3.5,.5,50,50);
toroide1.rotateX(Math.PI/2);
toroide1.translate(0,3.5,0);

var columna2 = new THREE.CylinderGeometry(2,3.5,10,50);
columna2.translate(0,8.5,0);

//Mallas
var mcolumna1= new THREE.Mesh(columna1);//1
var mtoroide1= new THREE.Mesh(toroide1);//2
var mcolumna2= new THREE.Mesh(columna2);//3

//Cuerpo completo
var torrefinal= new THREE.Geometry();
torrefinal.merge(mcolumna1.geometry,mcolumna1.matrix);
torrefinal.merge(mtoroide1.geometry,mtoroide1.matrix);

var mtorrefinal= new THREE.Mesh(torrefinal);

var torrefinal2= new THREE.Geometry();
torrefinal2.merge(mtorrefinal.geometry,mtorrefinal.matrix);
torrefinal2.merge(mcolumna2.geometry,mcolumna2.matrix);

var mtorrefinal2= new THREE.Mesh(torrefinal2,material);

var escena=new THREE.Scene();
escena.add(mtorrefinal2);
escena.rotateX(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=70;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
