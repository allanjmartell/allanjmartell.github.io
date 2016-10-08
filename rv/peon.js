//Geometrias
var basepeon = new THREE.CylinderGeometry(5,5,2,20);//Altura = 2
var basepeon2= new THREE.TorusGeometry(3,1,20,100);//Altura = 4
basepeon2.rotateX(Math.PI/2);
basepeon2.translate(0,2,0);
var columna = new THREE.CylinderGeometry(3.5,3.5,8,10);
columna.translate(0,6,0);
var techopeon= new THREE.CylinderGeometry(4.5,4.5,1,20);//Altura = 9
techopeon.translate(0,10,0);
var techopeon2=new THREE.SphereGeometry(3.5,20,20);
techopeon2.translate(0,11,0);
//Mesh
var mbasepeon = new THREE.Mesh(basepeon);
var mbasepeon2= new THREE.Mesh(basepeon2);
var mcolumna = new THREE.Mesh(columna);
var mtechopeon= new THREE.Mesh(techopeon);
var mtechopeon2=new THREE.Mesh(techopeon2);

//Acoplamiento
var peonfinal = new THREE.Geometry();
peonfinal.merge(mbasepeon.geometry,mbasepeon.matrix);
peonfinal.merge(mbasepeon2.geometry,mbasepeon2.matrix);
var mpeonfinal = new THREE.Mesh(peonfinal);

var peonfinal2 = new THREE.Geometry();
peonfinal2.merge(mcolumna.geometry,mcolumna.matrix);
peonfinal2.merge(mpeonfinal.geometry,mpeonfinal.matrix);
var mpeonfinal2= new THREE.Mesh(peonfinal2);

var peonfinal3 = new THREE.Geometry();
peonfinal3.merge(mtechopeon.geometry,mtechopeon.matrix);
peonfinal3.merge(mpeonfinal2.geometry,mpeonfinal2.matrix);
var mpeonfinal3= new THREE.Mesh(peonfinal3);

var peonfinal4 = new THREE.Geometry();
peonfinal4.merge(mtechopeon2.geometry,mtechopeon2.matrix);
peonfinal4.merge(mpeonfinal3.geometry,mpeonfinal3.matrix);

//Material
var material= new THREE.MeshNormalMaterial();
var peon= new THREE.Mesh(peonfinal4,material);

var escena,camara,renderizador;
escena = new THREE.Scene();
escena.rotateX(Math.PI/4);
//Camara
camara = new THREE.PerspectiveCamera();
camara.position.z=30;
 
escena.add(peon);
  
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
