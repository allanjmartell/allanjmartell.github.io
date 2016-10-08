var camara,escena,renderizador;
var torre1,torre2,torre3,torre4;//Torres
var peonn1,peonn2,peonn3,peonn4,peonn5,peonn6,peonn7,peonn8;//Peonesnegros
var peonb1,peonb2,peonb3,peonb4,peonb5,peonb6,peonb7,peonb8;//Peonesblancos
var malla1,malla2,malla3;//Tablero

var prototipo = new Object();

//Escena
  escena = new THREE.Scene();
  escena.rotateX(Math.PI/4);
  //Camara
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 

prototipo.TorreGeometry= function() {
  THREE.Geometry.call(this);
  
  var torre= [];

  //Torre
  for (var i=0;i<15;i++){
    torre.push(new THREE.Vector2(4,i));
  }

  var formatorre= new THREE.LatheGeometry(torre);

  //Base
  var base= new THREE.CylinderGeometry(5,5,2.5,10);

  //Techo
  var techo= new THREE.CylinderGeometry(4.85,4.85,1.75,6);
  var techo2= new THREE.CylinderGeometry(2,2,5,8);
  var techo3= new THREE.CylinderGeometry(1.5,1.5,6.75,10);

  techo.translate(0,15,0);
  techo2.translate(0,15,0);
  techo3.translate(0,15,0);

  //Decoración
  var cubito= new THREE.BoxGeometry(1.5,1,4.75);
  cubito.translate(-3.5,16.75,0);

  var cubito2= new THREE.BoxGeometry(1.5,1,4.75);
  cubito2.rotateY(Math.PI/-3);
  cubito2.translate(1.75,16.75,3);

  var cubito3= new THREE.BoxGeometry(1.5,1,4.75);
  cubito3.rotateY(Math.PI/3);
  cubito3.translate(1.75,16.75,-3);

  var cubito1= new THREE.BoxGeometry(1.5,3,4.75);
  cubito1.translate(3.5,16.75,0);

  var cubito22= new THREE.BoxGeometry(1.5,3,4.75);
  cubito22.rotateY(Math.PI/-3);
  cubito22.translate(-1.75,16.75,-3);

  var cubito33= new THREE.BoxGeometry(1.5,3,4.75);
  cubito33.rotateY(Math.PI/3);
  cubito33.translate(-1.75,16.75,3);

  //pico
  var pico= new THREE.ConeGeometry(1.5,2,10);
  pico.translate(0,14.35,0);

  var malla= new THREE.Mesh(formatorre);//1
  var mallabase= new THREE.Mesh(base);//2
  var mallatecho= new THREE.Mesh(techo);//3
  var mallatecho2= new THREE.Mesh(techo2);//4
  var mallatecho3= new THREE.Mesh(techo3);//5
  var mallaanillo= new THREE.Mesh(cubito);//6
  var mallacubito2= new THREE.Mesh(cubito2);
  var mallacubito3= new THREE.Mesh(cubito3);
  var mallacubito1= new THREE.Mesh(cubito1);
  var mallacubito22= new THREE.Mesh(cubito22);
  var mallacubito33= new THREE.Mesh(cubito33);
  var mallapico= new THREE.Mesh(pico);

  //Cuerpo completo
  var torrefinal= new THREE.Geometry();
  torrefinal.merge(malla.geometry,malla.matrix);
  torrefinal.merge(mallabase.geometry,mallabase.matrix);

  var torrefinal2= new THREE.Geometry();
  torrefinal2.merge(mallatecho.geometry,mallatecho.matrix);
  torrefinal2.merge(mallatecho2.geometry,mallatecho2.matrix);

  var torrefinal3= new THREE.Geometry();
  torrefinal3.merge(mallatecho3.geometry,mallatecho3.matrix);
  torrefinal3.merge(mallaanillo.geometry,mallaanillo.matrix);

  var mallatorrefinal= new THREE.Mesh(torrefinal);
  var mallatorrefinal2= new THREE.Mesh(torrefinal2);
  var mallatorrefinal3= new THREE.Mesh(torrefinal3);

  var torrefinal4= new THREE.Geometry();
  torrefinal4.merge(mallatorrefinal.geometry,mallatorrefinal.matrix);
  torrefinal4.merge(mallatorrefinal2.geometry,mallatorrefinal2.matrix);

  var mallatorrefinal4= new THREE.Mesh(torrefinal4);

  var torrefinal5= new THREE.Geometry();
  torrefinal5.merge(mallatorrefinal3.geometry,mallatorrefinal3.matrix);
  torrefinal5.merge(mallatorrefinal4.geometry,mallatorrefinal4.matrix);

  var mallatorrefinal5= new THREE.Mesh(torrefinal5);

  var torrefinal6= new THREE.Geometry();
  torrefinal6.merge(mallatorrefinal5.geometry,mallatorrefinal5.matrix);
  torrefinal6.merge(mallapico.geometry,mallapico.matrix);

  var mallatorrefinal6= new THREE.Mesh(torrefinal6);

  var torrefinal7= new THREE.Geometry();
  torrefinal7.merge(mallatorrefinal6.geometry,mallatorrefinal6.matrix);
  torrefinal7.merge(mallacubito2.geometry,mallacubito2.matrix);

  var mallatorrefinal7= new THREE.Mesh(torrefinal7);

  var torrefinal8= new THREE.Geometry();
  torrefinal8.merge(mallatorrefinal7.geometry,mallatorrefinal7.matrix);
  torrefinal8.merge(mallacubito3.geometry,mallacubito3.matrix);

  var mallatorrefinal8= new THREE.Mesh(torrefinal8);

  var torrefinal9= new THREE.Geometry();
  torrefinal9.merge(mallatorrefinal8.geometry,mallatorrefinal8.matrix);
  torrefinal9.merge(mallacubito1.geometry,mallacubito1.matrix);

  var mallatorrefinal9= new THREE.Mesh(torrefinal9);

  var torrefinal10= new THREE.Geometry();
  torrefinal10.merge(mallatorrefinal9.geometry,mallatorrefinal9.matrix);
  torrefinal10.merge(mallacubito22.geometry,mallacubito22.matrix);

  var mallatorrefinal10= new THREE.Mesh(torrefinal10);
  
  this.merge(mallatorrefinal10.geometry,mallatorrefinal10.matrix);
  this.merge(mallacubito33.geometry,mallacubito33.matrix);
}

prototipo.TableroGeometry = function(){
  THREE.Group.call(this);
    var textura3 = new THREE.TextureLoader().load('cerablanca.jpg');
    var textura4 = new THREE.TextureLoader().load('ceranegra.jpg');

    var cerablanco = new THREE.MeshBasicMaterial({map:textura3});
    var ceranegro = new THREE.MeshBasicMaterial({map:textura4});
    
    var k=0;
    for (var i=0;i<8;i++){
      for(var j=0;j<8;j++){

      if(k%2==0){malla1= new THREE.Mesh(new THREE.BoxGeometry(10,10,10),ceranegro);}
      else{malla1= new THREE.Mesh(new THREE.BoxGeometry(10,10,10),cerablanco);}

      malla1.position.x=(j+1)*10;
      malla1.position.z=(-i-1)*10;

      malla1.matrixAutoUpdate = false;
      malla1.updateMatrix();

      this.add(malla1);
      k++;
    }
      k++;
    }
}

prototipo.TableroGeometry1 = function(){
  THREE.Group.call(this);
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var madera = new THREE.MeshBasicMaterial({map:textura5});
    for(var l=0;l<10;l++){
    for(var m=0;m<2;m++){
    malla2= new THREE.Mesh(new THREE.BoxGeometry(10,10,10),madera);
    if(m==1){malla2.position.z=(-90);}
    malla2.position.x=(l*10);
    malla2.matrixAutoUpdate = false;
    malla2.updateMatrix();
    this.add(malla2);
  }}
}
  
prototipo.TableroGeometry2 = function(){
  THREE.Group.call(this);
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var madera = new THREE.MeshBasicMaterial({map:textura5});
  for(var l=1;l<9;l++){
    for(var m=0;m<2;m++){
    malla3= new THREE.Mesh(new THREE.BoxGeometry(10,10,10),madera);
    if(m==1){malla3.position.x=(90);}
    malla3.position.z=(-l*10);
    malla3.matrixAutoUpdate = false;
    malla3.updateMatrix();
    this.add(malla3);
  }}
}

prototipo.PeonGeometry = function(){
  THREE.Group.call(this);
  //Geometrias
  var basepeon = new THREE.CylinderGeometry(5,5,2,20);//Altura = 2
  var basepeon2= new THREE.TorusGeometry(3,1.5,20,100);//Altura = 4
  basepeon2.rotateX(Math.PI/2);
  basepeon2.translate(0,1,0);
  var columna = new THREE.CylinderGeometry(3.5,3.5,8,10);
  columna.translate(0,6,0);
  var techopeon= new THREE.CylinderGeometry(4,4,1,20);//Altura = 9
  techopeon.translate(0,10,0);
  var techopeon2=new THREE.SphereGeometry(3.5,20,20);
  techopeon2.translate(0,12,0);
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

  this.merge(mtechopeon2.geometry,mtechopeon2.matrix);
  this.merge(mpeonfinal3.geometry,mpeonfinal3.matrix);
}
prototipo.PeonGeometry.prototype = new THREE.Geometry();
prototipo.TableroGeometry.prototype = new THREE.Group();
prototipo.TableroGeometry1.prototype = new THREE.Group();
prototipo.TableroGeometry2.prototype = new THREE.Group();
prototipo.TorreGeometry.prototype = new THREE.Geometry();

prototipo.setup = function(){
  //Textura
    var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
    var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');

    var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
    var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
  //Figuras
    torre1 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolblanco);
    torre1.position.y=5;
    torre1.position.z=-10;
    torre1.position.x=10;
  //Torre2
    torre2 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolblanco);
    torre2.position.y=5;
    torre2.position.z=-80;
    torre2.position.x=10;
  //Torre3
    torre3 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolnegro);
    torre3.position.y=5;
    torre3.position.z=-80;
    torre3.position.x=80;
  //Torre4
    torre4 = new THREE.Mesh(new prototipo.TorreGeometry(),marmolnegro);
    torre4.position.y=5;
    torre4.position.z=-10;
    torre4.position.x=80;
  //Peonnegro1
    peonn1 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn1.position.y=5;
    peonn1.position.z=-10;
    peonn1.position.x=70;
  //Peonnegro2
    peonn2 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn2.position.y=5;
    peonn2.position.z=-20;
    peonn2.position.x=70;
  //Peonnegro3
    peonn3 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn3.position.y=5;
    peonn3.position.z=-30;
    peonn3.position.x=70;
  //Peonnegro4
    peonn4 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn4.position.y=5;
    peonn4.position.z=-40;
    peonn4.position.x=70;
  //Peonnegro5
    peonn5 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn5.position.y=5;
    peonn5.position.z=-50;
    peonn5.position.x=70;
  //Peonnegro6
    peonn6 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn6.position.y=5;
    peonn6.position.z=-60;
    peonn6.position.x=70;
  //Peonnegro7
    peonn7 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn7.position.y=5;
    peonn7.position.z=-70;
    peonn7.position.x=70;
  //Peonnegro8
    peonn8 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolnegro);
    peonn8.position.y=5;
    peonn8.position.z=-80;
    peonn8.position.x=70;  
  //Peonblanco1
    peonb1 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb1.position.y=5;
    peonb1.position.z=-10;
    peonb1.position.x=20;
  //Peonblanco2
    peonb2 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb2.position.y=5;
    peonb2.position.z=-20;
    peonb2.position.x=20;
  //Peonblanco3
    peonb3 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb3.position.y=5;
    peonb3.position.z=-30;
    peonb3.position.x=20;
  //Peonblanco4
    peonb4 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb4.position.y=5;
    peonb4.position.z=-40;
    peonb4.position.x=20;
  //Peonblanco5
    peonb5 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb5.position.y=5;
    peonb5.position.z=-50;
    peonb5.position.x=20;
  //Peonblanco6
    peonb6 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb6.position.y=5;
    peonb6.position.z=-60;
    peonb6.position.x=20;
  //Peonblanco7
    peonb7 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb7.position.y=5;
    peonb7.position.z=-70;
    peonb7.position.x=20;
  //Peonblanco8
    peonb8 = new THREE.Mesh(new prototipo.PeonGeometry(),marmolblanco);
    peonb8.position.y=5;
    peonb8.position.z=-80;
    peonb8.position.x=20;  
  escena.add(torre1,torre2,torre3,torre4);
  escena.add(new prototipo.TableroGeometry(),new prototipo.TableroGeometry1(),new prototipo.TableroGeometry2());
  escena.add(peonn1,peonn2,peonn3,peonn4,peonn5,peonn6,peonn7,peonn8);
  escena.add(peonb1,peonb2,peonb3,peonb4,peonb5,peonb6,peonb7,peonb8);
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
}

prototipo.loop = function(){
  requestAnimationFrame(prototipo.loop);
  renderizador.render(escena,camara);
}

prototipo.setup();
prototipo.loop();
