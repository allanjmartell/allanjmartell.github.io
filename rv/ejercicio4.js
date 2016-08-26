var estrella=new THREE.Shape();

estrella.moveTo(-10,20);
estrella.lineTo(-50,50);
estrella.lineTo(-20,10);
estrella.lineTo(-70,0);
estrella.lineTo(-20,-10);
estrella.lineTo(-50,-50);
estrella.lineTo(-10,-20);
estrella.lineTo(0,-70);
estrella.lineTo(10,-20);
estrella.lineTo(50,-50);
estrella.lineTo(20,-10);
estrella.lineTo(70,0);
estrella.lineTo(20,10);
estrella.lineTo(50,50);
estrella.lineTo(10,20);
estrella.lineTo(0,70);
estrella.lineTo(-10,20);

var forma= new THREE.ShapeGeometry(estrella);
var malla= new THREE.Mesh(forma);

var escena= new THREE.Scene();
escena.add(malla);

var camara= new THREE.PerspectiveCamera();
camara.position.z=50;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
