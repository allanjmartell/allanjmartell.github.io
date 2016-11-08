var camara,escena,renderizador;
var torre1,torre2,torre3,torre4,malla,malla2,malla3,grupo,grupo2,grupo3;

init();
loop();

function init() {
  //Escena
  escena = new THREE.Scene();
  escena.rotateX(Math.PI/4);
  //Camara
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 
  //Luces
  var luzama= new THREE.PointLight(0xFFFFFF);
  var luzcyan=new THREE.PointLight(0xFFFFFF);
  var luzmag= new THREE.PointLight(0xFFFFFF);
  
  luzcyan.position.y=80; luzcyan.position.z=50; luzcyan.position.x=-50;
  luzama.position.y=80;  luzama.position.z=-150; luzama.position.x=50;
  luzmag.position.y=80;  luzmag.position.z=50;  luzmag.position.x=150
  //Textura
  var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
  var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');
  var textura3 = new THREE.TextureLoader().load('cerablanca.jpg');
  var textura4 = new THREE.TextureLoader().load('ceranegra.jpg');
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var marmolblanco = new THREE.MeshLambertMaterial({map:textura1});
  var marmolnegro = new THREE.MeshLambertMaterial({map:textura2});
  var cerablanco = new THREE.MeshLambertMaterial({map:textura3});
  var ceranegro = new THREE.MeshLambertMaterial({map:textura4});
  var madera = new THREE.MeshLambertMaterial({map:textura5});
  //Torre1
  torre1 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre1.position.y=5;
  torre1.position.z=-10;
  torre1.position.x=10;
  //Torre2
  torre2 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre2.position.y=5;
  torre2.position.z=-80;
  torre2.position.x=10;
  //Torre3
  torre3 = new THREE.Mesh(torrefinal11,marmolnegro);
  torre3.position.y=5;
  torre3.position.z=-80;
  torre3.position.x=80;
  //Torre4
  torre4 = new THREE.Mesh(torrefinal11,marmolnegro);
  torre4.position.y=5;
  torre4.position.z=-10;
  torre4.position.x=80;
  
  //Tablero
  var cubo=new THREE.BoxGeometry(10,10,10);
  grupo= new THREE.Group();
  var k=0;
  
  for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){

    if(k%2==0){malla= new THREE.Mesh(cubo,ceranegro);}
    else{malla= new THREE.Mesh(cubo,cerablanco);}

    malla.position.x=(j+1)*10;
    malla.position.z=(-i-1)*10;
    malla.receiveShadow=true; //Sombras
    malla.matrixAutoUpdate = false;
    malla.updateMatrix();

    grupo.add(malla);
    k++;
  }
    k++;
  }

  //grupo2
  grupo2= new THREE.Group();

  for(var l=0;l<10;l++){
    for(var m=0;m<2;m++){
    malla2= new THREE.Mesh(cubo,madera);
    if(m==1){malla2.position.z=(-90);}
    malla2.position.x=(l*10);
    malla2.receiveShadow=true; //Sombras
    malla2.matrixAutoUpdate = false;
    malla2.updateMatrix();
    grupo2.add(malla2);
  }}

  //grupo3
  grupo3= new THREE.Group();

  for(var l=1;l<9;l++){
    for(var m=0;m<2;m++){
    malla3= new THREE.Mesh(cubo,madera);
    if(m==1){malla3.position.x=(90);}
    malla3.position.z=(-l*10);
    malla3.matrixAutoUpdate = false;
    malla3.receiveShadow=true;
    malla3.updateMatrix();
    grupo3.add(malla3);
  }}
  
  renderizador = new THREE.WebGLRenderer();
  //renderizador.setPixelRatio( window.devicePixelRatio );
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
  
  
  //Sombras
  renderizador.shadowMap.enabled=true;
  torre1.castShadow= true;
  torre2.castShadow= true;
  torre3.castShadow= true;
  torre4.castShadow= true;
  luzama.castShadow= true;
  luzcyan.castShadow= true;
  luzmag.castShadow= true;
  escena.add(torre1,torre2,torre3,torre4,grupo,grupo2,grupo3);
  //Luces
  escena.add(luzcyan,luzama,luzmag);
}

function loop() {
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
