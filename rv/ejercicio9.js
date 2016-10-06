var camara,escena,renderizador;
var torre1,torre2,torre3,torre4;
var prototipo = new Object();

prototipo.TorreGeometry() = function{
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

prototipo.TorreGeometry.prototype = new THREE.Geometry();

prototipo.setup = function(){
  //Escena
  escena = new THREE.Scene();
  escena.rotateX(Math.PI/4);
  //Camara
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 
  
  //Textura
  var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
  var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');
  var marmolblanco = new THREE.MeshBasicMaterial({map:textura1});
  var marmolnegro = new THREE.MeshBasicMaterial({map:textura2});
  
  //Figuras
  torre1 = new THREE.Mesh(new TorreGeometry(),marmolblanco);
  torre1.position.y=5;
  torre1.position.z=-10;
  torre1.position.x=10;
  //Torre2
  torre2 = new THREE.Mesh(new TorreGeometry(),marmolblanco);
  torre2.position.y=5;
  torre2.position.z=-80;
  torre2.position.x=10;
  //Torre3
  torre3 = new THREE.Mesh(new TorreGeometry(),marmolnegro);
  torre3.position.y=5;
  torre3.position.z=-80;
  torre3.position.x=80;
  //Torre4
  torre4 = new THREE.Mesh(new TorreGeometry(),marmolnegro);
  torre4.position.y=5;
  torre4.position.z=-10;
  torre4.position.x=80;
  
  escena.add(torre1,torre2,torre3,torre4);
  
  renderizador = new THREE.WebGLRenderer();
  //renderizador.setPixelRatio( window.devicePixelRatio );
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
}
  
prototipo.loop = function(){
  requestAnimationFrame(prototipo.loop);
  renderizador.render(escena,camara);
}

