var camara,escena,renderizador;
var torre1,malla,malla2,malla3,grupo,grupo2,grupo3;

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
  
  //Textura
  var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
  var textura3 = new THREE.TextureLoader().load('cerablanca.jpg');
  var textura4 = new THREE.TextureLoader().load('ceranegra.jpg');
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
  var cerablanco = new THREE.MeshBasicMaterial({map:textura3});
  var ceranegro = new THREE.MeshBasicMaterial({map:textura4});
  var madera = new THREE.MeshBasicMaterial({map:textura5});
  //Torre1
  torre1 = new THREE.Mesh(torrefinal11,marmolblanco);
  torre1.position.y=5;
  torre1.position.z=-10;
  torre1.position.x=10;
  
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
    malla3.updateMatrix();
    grupo3.add(malla3);
  }}

  escena.add(torre1,grupo,grupo2,grupo3);
  
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
}

function loop() {
    window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza)
    {
      var tecla = pieza.which;
          switch (tecla)
          {
              case 37 : //Izquierda
                  torre1.translateX(-10);
                  break;
              case 38 :  //Arriba
                  torre1.translateZ(-10);
                  break;
              case 39 :  //Derecha 
                  torre1.translateX(10);
                  break;
              case 40 :  //Abajo
                  torre1.translateZ(10);
                  break;
          default :alert("Pulsar las flechas del teclado");
          }
    }
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
} 
