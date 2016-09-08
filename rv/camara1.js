var mallacubo=[];
var tablero=[];
var b= new THREE.Color("rgb(255,255,255)");
var g= new THREE.Color("rgb(130,130,130)");
var blanco= new THREE.MeshBasicMaterial(b);
var negro= new THREE.MeshBasicMaterial(g);


for (var j=1;j<=8;j++){
   //Creación de geometria
   var cubo= new THREE.BoxGeometry(10,10,10);
   cubo.translate(j*10,0,0);
   var m=j%2;
   //Creación de mallas
   if (m==0){
      mallacubo[j]= new THREE.Mesh(cubo,blanco);
   }
   else{
      mallacubo[j]= new THREE.Mesh(cubo,negro);}
}

for (var j=1;j<=8;j++){
 tablero[j]=new THREE.Geometry();
   tablero[j-1].merge(mallacubo[j-1].geometry,mallacubo[j-1].matrix);
   tablero[j].merge(mallacubo[j].geometry,mallacubo[j].matrix)
}

var escena=new THREE.Scene();
escena.add(tablero);

var camara=new THREE.PerspectiveCamera();

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
