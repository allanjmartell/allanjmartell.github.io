var escena=new THREE.Scene();
escena.rotateX(Math.PI/4);

var camara=new THREE.PerspectiveCamera();
camara.position.z=130;
camara.position.x=50;

var luzama= new THREE.PointLight(0xFFFF00);
var luzcyan=new THREE.PointLight(0x00FFFF);
var luzmag= new THREE.PointLight(0xFF00FF);

luzcyan.position.y=80; luzcyan.position.z=50; luzcyan.position.x=-50;
luzama.position.y=80;  luzama.position.z=-150; luzama.position.x=50;
luzmag.position.y=80;  luzmag.position.z=50;  luzmag.position.x=150

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

var cubo=new THREE.BoxGeometry(10,10,10);

var mblanco= new THREE.MeshLambertMaterial({color: 0xffffff});
var mnegro= new THREE.MeshLambertMaterial({color: 0x686868});
var mcafe= new THREE.MeshLambertMaterial({color: 0x714523});

//Grupo1
var grupo= new THREE.Group();
var k=0;
for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    
  if(k%2==0){var malla= new THREE.Mesh(cubo,mnegro);}
  else{var malla= new THREE.Mesh(cubo,mblanco);}

  malla.position.x=(j+1)*10;
  malla.position.z=(-i-1)*10;
  
  malla.receiveShadow=true;
  
  malla.matrixAutoUpdate = false;
  malla.updateMatrix();

  grupo.add(malla);
  k++;
}
  k++;
}

//grupo2
var grupo2= new THREE.Group();

for(var l=0;l<10;l++){
  for(var m=0;m<2;m++){
  var malla2= new THREE.Mesh(cubo,mcafe);
  if(m==1){malla2.position.z=(-90);}
  malla2.position.x=(l*10);
  malla2.receiveShadow=true;
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  grupo2.add(malla2);
}}

//grupo3
var grupo3= new THREE.Group();

for(var l=1;l<9;l++){
  for(var m=0;m<2;m++){
  var malla3= new THREE.Mesh(cubo,mcafe);
  if(m==1){malla3.position.x=(90);}
  malla3.position.z=(-l*10);
  malla3.receiveShadow=true;
  malla3.matrixAutoUpdate = false;
  malla3.updateMatrix();
  grupo3.add(malla3);
}}

//Opacidad 50
var torre1= Torreblanca2.clone();
torre1.position.y=5;
torre1.position.z=-10;
torre1.position.x=10;

//Opacidad 100
var torre2= Torrenegra2.clone();
torre2.position.y=5;
torre2.position.z=-80;
torre2.position.x=10;

//Opacidad 75
var torre3= Torrenegra3.clone();
torre3.position.y=5;
torre3.position.z=-80;
torre3.position.x=80;

//Opacidad 25
var torre4= Torreblanca3.clone();
torre4.position.y=5;
torre4.position.z=-10;
torre4.position.x=80;

//Sombras
renderizador.shadowMap.enabled=true;
torre1.castShadow= true;
torre2.castShadow= true;
torre3.castShadow= true;
torre4.castShadow= true;
luzama.castShadow= true;
luzcyan.castShadow= true;
luzmag.castShadow= true;

//Objetos
escena.add(grupo,grupo2,grupo3,torre1,torre2,torre3,torre4);
//Luces
escena.add(luzcyan,luzama,luzmag);

renderizador.render(escena,camara);
