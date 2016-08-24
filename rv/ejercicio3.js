var cubo= new THREE.Geometry();

cubo.vertices.push(new THREE.Vector3(1,-1,1));//Vértice 0
cubo.vertices.push(new THREE.Vector3(1,-1,-1));//Vértice 1
cubo.vertices.push(new THREE.Vector3(-1,-1,-1));//Vértice 2
cubo.vertices.push(new THREE.Vector3(-1,-1,1));//Vértice 3
cubo.vertices.push(new THREE.Vector3(1,1,1));//Vértice 4
cubo.vertices.push(new THREE.Vector3(1,1,-1));//Vértice 5
cubo.vertices.push(new THREE.Vector3(-1,1,-1));//Vértice 6
cubo.vertices.push(new THREE.Vector3(-1,1,1));//Vértice 7

//Cara superior e inferior
cubo.faces.push(new THREE.Face3(3,0,1));//Cara 0
cubo.faces.push(new THREE.Face3(1,2,3));//Cara 1
cubo.faces.push(new THREE.Face3(4,5,6));//Cara 2
cubo.faces.push(new THREE.Face3(6,7,4));//Cara 3

//Cara delantera y trasera
cubo.faces.push(new THREE.Face3(0,3,7));//Cara 4
cubo.faces.push(new THREE.Face3(7,4,0));//Cara 5
cubo.faces.push(new THREE.Face3(2,1,5));//Cara 6
cubo.faces.push(new THREE.Face3(5,6,2));//Cara 7

//Caras laterales
cubo.faces.push(new THREE.Face3(0,1,5));//Cara 8
cubo.faces.push(new THREE.Face3(5,4,0));//Cara 9
cubo.faces.push(new THREE.Face3(3,2,6));//Cara 10
cubo.faces.push(new THREE.Face3(6,7,3));//Cara 11

cubo.computeBoundingSphere();
cubo.computeFaceNormals();

var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(cubo,material);
malla.rotateX(Math.PI/4);

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=6;
camara.position.x=.5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
