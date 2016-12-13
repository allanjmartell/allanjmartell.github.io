///////////////////////////////////////Agente//////////////////////////////////////////////////////////////////////////////
function Agent(x=0,y=0,z=0){
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
  this.position.z=z;
}

Agent.prototype = new THREE.Object3D();

//Las tres primitivas esenciales de un agente:
Agent.prototype.sense = function(environment) {}; //Percibir
Agent.prototype.plan = function(environment) {}; //Planificar
Agent.prototype.act = function(environment) {}; //Actuar
////////////////////////////////////////////////////Environment/////////////////////////////////////////////////////////////
//Un Agente opera sobre un entorno
function Environment(){
  THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

//Preguntar a todos los agentes si sienten
Environment.prototype.sense = function(){ 
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].sense!==undefined)
      this.children[i].sense(this);
  }
}

//Preguntar a todos los agentes si planean
Environment.prototype.plan = function(){
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].plan !== undefined)
      this.children[i].plan(this);
  }
}

//Preguntar a todos los agentes si actuan
Environment.prototype.act = function(){
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].act !== undefined)
      this.children[i].act(this);
  }
}

function Patitasblancas(x=0,z=0){
THREE.Object3D.call(this);
var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
piernaIzq=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieIzq=new THREE.CylinderGeometry(1,.6,4,32);
piernaDer=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieDer=new THREE.CylinderGeometry(1,.6,4,32);
pieIzq.translate(-3.5,-1,0);
pieDer.translate(-3.5,-1,0);
pieIzq.rotateZ(Math.PI/2);
pieDer.rotateZ(Math.PI/2);
var PiernaizqMalla=new THREE.Mesh(piernaIzq);
var PieizqMalla=new THREE.Mesh(pieIzq);
	
var PiernaderMalla=new THREE.Mesh(piernaDer);
var PiederMalla=new THREE.Mesh(pieDer);

var Piernal=new THREE.Geometry();
Piernal.merge(PiernaizqMalla.geometry, PiernaizqMalla.matrix);
Piernal.merge(PieizqMalla.geometry, PieizqMalla.matrix);
this.Plcompleta=new THREE.Mesh(Piernal,maderablanca);
	
var Piernar=new THREE.Geometry();
Piernar.merge(PiernaderMalla.geometry, PiernaderMalla.matrix);
Piernar.merge(PiederMalla.geometry, PiederMalla.matrix);
this.Prcompleta=new THREE.Mesh(Piernar,maderablanca);//new THREE.MeshNormalMaterial()

this.Plcompleta.position.x=x;
this.Plcompleta.position.y=10;
this.Plcompleta.position.z=z-3.5;
this.Prcompleta.position.x=x;
this.Prcompleta.position.y=10;
this.Prcompleta.position.z=z+3.5;
	
this.add(this.Plcompleta,this.Prcompleta);
}

function Patitasnegras(x=0,z=0){
THREE.Object3D.call(this);
var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
piernaIzq=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieIzq=new THREE.CylinderGeometry(1,.6,4,32);
piernaDer=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieDer=new THREE.CylinderGeometry(1,.6,4,32);
pieIzq.translate(3.5,-1,0);
pieDer.translate(3.5,-1,0);
pieIzq.rotateZ(-Math.PI/2);
pieDer.rotateZ(-Math.PI/2);
var PiernaizqMalla=new THREE.Mesh(piernaIzq);
var PieizqMalla=new THREE.Mesh(pieIzq);
	
var PiernaderMalla=new THREE.Mesh(piernaDer);
var PiederMalla=new THREE.Mesh(pieDer);

var Piernal=new THREE.Geometry();
Piernal.merge(PiernaizqMalla.geometry, PiernaizqMalla.matrix);
Piernal.merge(PieizqMalla.geometry, PieizqMalla.matrix);
this.Plcompleta=new THREE.Mesh(Piernal,maderanegra);
	
var Piernar=new THREE.Geometry();
Piernar.merge(PiernaderMalla.geometry, PiernaderMalla.matrix);
Piernar.merge(PiederMalla.geometry, PiederMalla.matrix);
this.Prcompleta=new THREE.Mesh(Piernar,maderanegra);//new THREE.MeshNormalMaterial()

this.Plcompleta.position.x=x;
this.Plcompleta.position.y=10;
this.Plcompleta.position.z=z-3.5;
this.Prcompleta.position.x=x;
this.Prcompleta.position.y=10;
this.Prcompleta.position.z=z+3.5;
	
this.add(this.Plcompleta,this.Prcompleta);
}

///////////////////////////////////////////Variables////////////////////////////////////////////////////////////////////////////////////
var camara,escena,renderizador;
//var pIzqinit,pDerinit;
var malla,malla2,malla3,grupo,grupo2,grupo3,grupomorado;
var bloquemorado,bloqueazul,bloquerojo,bloqueverde;
var bandera=0,banderacaballo=0;
var torreblanca1,torreblanca2,torrenegra1,torrenegra2;
var peonblanco1,peonblanco2,peonblanco3,peonblanco4,peonblanco5,peonblanco6,peonblanco7,peonblanco8;
var peonnegro1,peonnegro2,peonnegro3,peonnegro4,peonnegro5,peonnegro6,peonnegro7,peonnegro8;
var alfilblanco1,alfilblanco2,alfilnegro1,alfilnegro2;
var caballoblanco1,caballoblanco2,caballonegro1,caballonegro2;
var reinablanca,reinanegra;
var reyblanco,reynegro;
var patitas1,patitas2,patitas3,patitas4,patitas5,patitas6,patitas7,patitas8,patitas9,patitas10;
var patitas11,patitas12,patitas13,patitas14,patitas15,patitas16;

var patitasn1,patitasn2,patitasn3,patitasn4,patitasn5,patitasn6,patitasn7,patitasn8,patitasn9,patitasn10;
var patitasn11,patitasn12,patitasn13,patitasn14,patitasn15,patitasn16;

Patitasblancas.prototype=new THREE.Object3D;
Patitasnegras.prototype=new THREE.Object3D;
//////////////////////////////////////////Sensor/////////////////////////////////////////////////////////////////////////////////
function Sensor(position,direction){ 
  THREE.Raycaster.call(this,position,direction);
  this.colision = false;
}

Sensor.prototype = new THREE.Raycaster();
//////////////////////////////////////////////Torres////////////////////////////////////////////////////////////////////////////////////
function TorreBlanca(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(torrefinal13,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;//5;
  this.position.z=z;//-10;
  this.position.x=x;//10;
  this.sensor = new Sensor();
}

function TorreNegra(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(torrefinal13,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

TorreBlanca.prototype = new Agent();
TorreNegra.prototype = new Agent();
///////////////////////////////////////Peones//////////////////////////////////////////////////////////////////////////////////////////
function PeonBlanco(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(peonfinal6,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

function PeonNegro(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(peonfinal6,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

PeonBlanco.prototype = new Agent();
PeonNegro.prototype = new Agent();

///////////////////////////////////////Alfiles//////////////////////////////////////////////////////////////////////////////////////
function AlfilBlanco(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(alfilfinal8,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

function AlfilNegro(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(alfilfinal8,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

AlfilBlanco.prototype = new Agent();
AlfilNegro.prototype = new Agent();
/////////////////////////////////////////Caballos/////////////////////////////////////////////////////////////////////////////
function CaballoBlanco(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(caballofinal5,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.castShadow=true;
  this.sensor = new Sensor();
}

function CaballoNegro(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(caballofinal4,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.castShadow=true;
  this.sensor = new Sensor();
}

CaballoBlanco.prototype = new Agent();
CaballoNegro.prototype = new Agent();
//////////////////////////////////////////Reinas//////////////////////////////////////////////////////////////////////////////
function ReinaBlanca(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(reinafinal10,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

function ReinaNegra(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(reinafinal10,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

ReinaBlanca.prototype = new Agent();
ReinaNegra.prototype = new Agent();
////////////////////////////////////////Reyes/////////////////////////////////////////////////////////////////////////////////////
function ReyBlanco(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura1 = new THREE.TextureLoader().load('maderablanca.jpg');
  var maderablanca = new THREE.MeshLambertMaterial({map:textura1});
  this.actuator = new THREE.Mesh(reyfinal10,maderablanca);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

function ReyNegro(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var textura2 = new THREE.TextureLoader().load('maderanegra.jpg');
  var maderanegra = new THREE.MeshLambertMaterial({map:textura2});
  this.actuator = new THREE.Mesh(reyfinal10,maderanegra);
  this.actuator.commands = [];
  this.add(this.actuator);
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.sensor = new Sensor();
}

ReyBlanco.prototype = new Agent();
ReyNegro.prototype = new Agent();
///////////////////////////////////////Bloque Azul////////////////////////////////////////////////////////////////////////////////////
function BloqueAzul(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzazul.jpg');
  var luzazul = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.1,10.1,10.1),luzazul));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueAzul.prototype = new Agent();

BloqueAzul.prototype.act = function(environment){
  window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza){
      var tecla = pieza.which;
        switch (tecla){
          case 37 : //Izquierda
		if (bandera===1){
		  if (bloqueverde.position.x>=20){
		    bloqueverde.translateX(-10);
		  }
		}
		else{
	  	   escena.remove(grupomorado);
	           escena.remove(bloquerojo);
	           escena.remove(bloqueverde);
		   if (bloqueazul.position.x>=20){
		     bloqueazul.translateX(-10);
		   }
		}
                break;
          case 38 :  //Arriba
		if (bandera===1){
		  if (bloqueverde.position.z>=-70){
		    bloqueverde.translateZ(-10);
		  }
		}
		else{
	  	   escena.remove(grupomorado);
	           escena.remove(bloquerojo);
	           escena.remove(bloqueverde);
		   if (bloqueazul.position.z>=-70){
	             bloqueazul.translateZ(-10);
		   }
		}
                break;
          case 39 :  //Derecha 
		if (bandera===1){
		  if (bloqueverde.position.x<=70){
		    bloqueverde.translateX(10);
		  }
		}
		else{
	  	   escena.remove(grupomorado);
	           escena.remove(bloquerojo);
	           escena.remove(bloqueverde);
		   if (bloqueazul.position.x<=70){
		     bloqueazul.translateX(10);
		   }
		}
                break;
          case 40 :  //Abajo
		if (bandera===1){
		  if (bloqueverde.position.z<=-20){
		    bloqueverde.translateZ(10);
		  }
		}
		else{
	  	   escena.remove(grupomorado);
	           escena.remove(bloquerojo);
	           escena.remove(bloqueverde);
		   if (bloqueazul.position.z<=-20){
		     bloqueazul.translateZ(10);
		   }
		}
                break;
	  case 13 :  //Enter
	        if (bandera===1){
//////////////////////////////////////////////////////Torres///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Torre blanca 1//////////////////////////////////////////////////////////////////
		  if (torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z){
		    var bvtb1=bloqueverde;//Bloqueverdetorreblanca1
		    var pIzqinit=0.05;
				var pDerinit=-0.05;
		    TorreBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvtb1,true);
		      if(obstaculo.length >0){this.colision = 1;this.step=0;}
 		      else{this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    TorreBlanca.prototype.act = function(environment){ 
		      if (this.colision!=1){
			if(torreblanca1.position.x<=bvtb1.position.x){
			  torreblanca1.position.x += this.step;
			}
			else{
			  torreblanca1.position.x -= this.step;
		        }
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca1.position.z<=bvtb1.position.z){
			  torreblanca1.position.z += this.step;
			 }
			else{
			  torreblanca1.position.z -= this.step;
			}
		      }//fin if posicion z
		  if (this.colision!=1){
				if(torreblanca1.position.x!=bvtb1.position.x || torreblanca1.position.z!=bvtb1.position.z)
			   	{patitas1.Plcompleta.rotateZ(pIzqinit);
					patitas1.Prcompleta.rotateZ(pDerinit);
					if (patitas1.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas1.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas1.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas1.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas1.Plcompleta.rotation.z=0;
				patitas1.Prcompleta.rotation.z=0;				
				}				 
		}

			//////////////////////////////////////////Piezas diferentes////////////////////////////////////////
		        if((torreblanca1.position.x==torrenegra1.position.x && torreblanca1.position.z==torrenegra1.position.z)&&
		 	  (torreblanca1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((torreblanca1.position.x==torrenegra2.position.x && torreblanca1.position.z==torrenegra2.position.z)&&
			  (torreblanca1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((torreblanca1.position.x==caballonegro1.position.x && torreblanca1.position.z==caballonegro1.position.z)&&
			  (torreblanca1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((torreblanca1.position.x==caballonegro2.position.x && torreblanca1.position.z==caballonegro2.position.z)&&
			  (torreblanca1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((torreblanca1.position.x==alfilnegro1.position.x && torreblanca1.position.z==alfilnegro1.position.z)&&
			  (torreblanca1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((torreblanca1.position.x==alfilnegro2.position.x && torreblanca1.position.z==alfilnegro2.position.z)&&
			  (torreblanca1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((torreblanca1.position.x==reinanegra.position.x && torreblanca1.position.z==reinanegra.position.z)&&
			  (torreblanca1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((torreblanca1.position.x==reynegro.position.x && torreblanca1.position.z==reynegro.position.z)&&
			  (torreblanca1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((torreblanca1.position.x==peonnegro1.position.x && torreblanca1.position.z==peonnegro1.position.z)&&
			  (torreblanca1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((torreblanca1.position.x==peonnegro2.position.x && torreblanca1.position.z==peonnegro2.position.z)&&
			  (torreblanca1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((torreblanca1.position.x==peonnegro3.position.x && torreblanca1.position.z==peonnegro3.position.z)&&
			  (torreblanca1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((torreblanca1.position.x==peonnegro4.position.x && torreblanca1.position.z==peonnegro4.position.z)&&
			  (torreblanca1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((torreblanca1.position.x==peonnegro5.position.x && torreblanca1.position.z==peonnegro5.position.z)&&
			  (torreblanca1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((torreblanca1.position.x==peonnegro6.position.x && torreblanca1.position.z==peonnegro6.position.z)&&
			  (torreblanca1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((torreblanca1.position.x==peonnegro7.position.x && torreblanca1.position.z==peonnegro7.position.z)&&
			  (torreblanca1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((torreblanca1.position.x==peonnegro8.position.x && torreblanca1.position.z==peonnegro8.position.z)&&
			  (torreblanca1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}  
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torreblanca1.position.x==peonblanco1.position.x && torreblanca1.position.z==peonblanco1.position.z)||
			   (torreblanca1.position.x==peonblanco2.position.x && torreblanca1.position.z==peonblanco2.position.z))||
			   (torreblanca1.position.x==peonblanco3.position.x && torreblanca1.position.z==peonblanco3.position.z))||
			   (torreblanca1.position.x==peonblanco4.position.x && torreblanca1.position.z==peonblanco4.position.z))||
			   (torreblanca1.position.x==peonblanco5.position.x && torreblanca1.position.z==peonblanco5.position.z))||
			   (torreblanca1.position.x==peonblanco6.position.x && torreblanca1.position.z==peonblanco6.position.z))||
			   (torreblanca1.position.x==peonblanco7.position.x && torreblanca1.position.z==peonblanco7.position.z))||
			   (torreblanca1.position.x==peonblanco8.position.x && torreblanca1.position.z==peonblanco8.position.z))||
			   (torreblanca1.position.x==torreblanca2.position.x && torreblanca1.position.z==torreblanca2.position.z))||
			   (torreblanca1.position.x==alfilblanco1.position.x && torreblanca1.position.z==alfilblanco1.position.z))||
			   (torreblanca1.position.x==alfilblanco2.position.x && torreblanca1.position.z==alfilblanco2.position.z))||
			   (torreblanca1.position.x==caballoblanco1.position.x && torreblanca1.position.z==caballoblanco1.position.z))||
			   (torreblanca1.position.x==caballoblanco2.position.x && torreblanca1.position.z==caballoblanco2.position.z))||
			   (torreblanca1.position.x==reyblanco.position.x && torreblanca1.position.z==reyblanco.position.z))||
			   (torreblanca1.position.x==reinablanca.position.x && torreblanca1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				torreblanca1.position.x=bloquerojo.position.x;torreblanca1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca1
	          /////////////////////////////////Torre blanca 2//////////////////////////////////////////////////////////////////
		  if (torreblanca2.position.x===bloquerojo.position.x && torreblanca2.position.z===bloquerojo.position.z){
		    var bvtb2=bloqueverde;//Bloqueverdetorreblanca2
				var pIzqinit=0.05;
				var pDerinit=-0.05;
		    TorreBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvtb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    TorreBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torreblanca2.position.x<bvtb2.position.x)
			  torreblanca2.position.x += this.step;
			else
			  torreblanca2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca2.position.z<bvtb2.position.z)
			  torreblanca2.position.z += this.step;
			else
			  torreblanca2.position.z -= this.step;
		      }//fin if posicion z
					//Movimiento de las patrullas
		 if (this.colision!=1){
				if(torreblanca2.position.x!=bvtb2.position.x || torreblanca2.position.z!=bvtb2.position.z)
			   	{patitas2.Plcompleta.rotateZ(pIzqinit);
					patitas2.Prcompleta.rotateZ(pDerinit);
					if (patitas2.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas2.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas2.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas2.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas2.Plcompleta.rotation.z=0;
				patitas2.Prcompleta.rotation.z=0;				
				}				 
		}
		        if((torreblanca2.position.x==torrenegra1.position.x && torreblanca2.position.z==torrenegra1.position.z)&&
			  (torreblanca2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((torreblanca2.position.x==torrenegra2.position.x && torreblanca2.position.z==torrenegra2.position.z)&&
			  (torreblanca2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((torreblanca2.position.x==caballonegro1.position.x && torreblanca2.position.z==caballonegro1.position.z)&&
			  (torreblanca2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((torreblanca2.position.x==caballonegro2.position.x && torreblanca2.position.z==caballonegro2.position.z)&&
			  (torreblanca2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((torreblanca2.position.x==alfilnegro1.position.x && torreblanca2.position.z==alfilnegro1.position.z)&&
			  (torreblanca2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((torreblanca2.position.x==alfilnegro2.position.x && torreblanca2.position.z==alfilnegro2.position.z)&&
			  (torreblanca2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((torreblanca2.position.x==reinanegra.position.x && torreblanca2.position.z==reinanegra.position.z)&&
			  (torreblanca2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((torreblanca2.position.x==reynegro.position.x && torreblanca2.position.z==reynegro.position.z)&&
			  (torreblanca2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((torreblanca2.position.x==peonnegro1.position.x && torreblanca2.position.z==peonnegro1.position.z)&&
			  (torreblanca2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((torreblanca2.position.x==peonnegro2.position.x && torreblanca2.position.z==peonnegro2.position.z)&&
			  (torreblanca2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((torreblanca2.position.x==peonnegro3.position.x && torreblanca2.position.z==peonnegro3.position.z)&&
			  (torreblanca2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((torreblanca2.position.x==peonnegro4.position.x && torreblanca2.position.z==peonnegro4.position.z)&&
			  (torreblanca2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((torreblanca2.position.x==peonnegro5.position.x && torreblanca2.position.z==peonnegro5.position.z)&&
			  (torreblanca2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((torreblanca2.position.x==peonnegro6.position.x && torreblanca2.position.z==peonnegro6.position.z)&&
			  (torreblanca2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((torreblanca2.position.x==peonnegro7.position.x && torreblanca2.position.z==peonnegro7.position.z)&&
			  (torreblanca2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((torreblanca2.position.x==peonnegro8.position.x && torreblanca2.position.z==peonnegro8.position.z)&&
			  (torreblanca2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}  
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torreblanca2.position.x==peonblanco1.position.x && torreblanca2.position.z==peonblanco1.position.z)||
			   (torreblanca2.position.x==peonblanco2.position.x && torreblanca2.position.z==peonblanco2.position.z))||
			   (torreblanca2.position.x==peonblanco3.position.x && torreblanca2.position.z==peonblanco3.position.z))||
			   (torreblanca2.position.x==peonblanco4.position.x && torreblanca2.position.z==peonblanco4.position.z))||
			   (torreblanca2.position.x==peonblanco5.position.x && torreblanca2.position.z==peonblanco5.position.z))||
			   (torreblanca2.position.x==peonblanco6.position.x && torreblanca2.position.z==peonblanco6.position.z))||
			   (torreblanca2.position.x==peonblanco7.position.x && torreblanca2.position.z==peonblanco7.position.z))||
			   (torreblanca2.position.x==peonblanco8.position.x && torreblanca2.position.z==peonblanco8.position.z))||
			   (torreblanca2.position.x==torreblanca1.position.x && torreblanca2.position.z==torreblanca1.position.z))||
			   (torreblanca2.position.x==alfilblanco1.position.x && torreblanca2.position.z==alfilblanco1.position.z))||
			   (torreblanca2.position.x==alfilblanco2.position.x && torreblanca2.position.z==alfilblanco2.position.z))||
			   (torreblanca2.position.x==caballoblanco1.position.x && torreblanca2.position.z==caballoblanco1.position.z))||
			   (torreblanca2.position.x==caballoblanco2.position.x && torreblanca2.position.z==caballoblanco2.position.z))||
			   (torreblanca2.position.x==reyblanco.position.x && torreblanca2.position.z==reyblanco.position.z))||
			   (torreblanca2.position.x==reinablanca.position.x && torreblanca2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				torreblanca2.position.x=bloquerojo.position.x;torreblanca2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
	          /////////////////////////////////Torre negra 1///////////////////////////////////////////////////////////////////
		  if (torrenegra1.position.x===bloquerojo.position.x && torrenegra1.position.z===bloquerojo.position.z){
		    var bvtn1 = bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
		    TorreNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvtn1,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    TorreNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torrenegra1.position.x<bvtn1.position.x)
			  torrenegra1.position.x += this.step;
			else
			  torrenegra1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torrenegra1.position.z<bvtn1.position.z)
			  torrenegra1.position.z += this.step;
			else
			  torrenegra1.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(torrenegra1.position.x!=bvtn1.position.x || torrenegra1.position.z!=bvtn1.position.z)
			   	{patitasn1.Plcompleta.rotateZ(pIzqinit);
					patitasn1.Prcompleta.rotateZ(pDerinit);
					if (patitasn1.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn1.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn1.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn1.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn1.Plcompleta.rotation.z=0;
				patitasn1.Prcompleta.rotation.z=0;				
				}				 
		}
		        if((torrenegra1.position.x==torreblanca1.position.x && torrenegra1.position.z==torreblanca1.position.z)&&
			  (torrenegra1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((torrenegra1.position.x==torreblanca2.position.x && torrenegra1.position.z==torreblanca2.position.z)&&
			  (torrenegra1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((torrenegra1.position.x==caballoblanco1.position.x && torrenegra1.position.z==caballoblanco1.position.z)&&
			  (torrenegra1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((torrenegra1.position.x==caballoblanco2.position.x && torrenegra1.position.z==caballoblanco2.position.z)&&
			  (torrenegra1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((torrenegra1.position.x==alfilblanco1.position.x && torrenegra1.position.z==alfilblanco1.position.z)&&
			  (torrenegra1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((torrenegra1.position.x==alfilblanco2.position.x && torrenegra1.position.z==alfilblanco2.position.z)&&
			  (torrenegra1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((torrenegra1.position.x==reinablanca.position.x && torrenegra1.position.z==reinablanca.position.z)&&
			  (torrenegra1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((torrenegra1.position.x==reyblanco.position.x && torrenegra1.position.z==reyblanco.position.z)&&
			  (torrenegra1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((torrenegra1.position.x==peonblanco1.position.x && torrenegra1.position.z==peonblanco1.position.z)&&
			  (torrenegra1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((torrenegra1.position.x==peonblanco2.position.x && torrenegra1.position.z==peonblanco2.position.z)&&
			  (torrenegra1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((torrenegra1.position.x==peonblanco3.position.x && torrenegra1.position.z==peonblanco3.position.z)&&
			  (torrenegra1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((torrenegra1.position.x==peonblanco4.position.x && torrenegra1.position.z==peonblanco4.position.z)&&
			  (torrenegra1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((torrenegra1.position.x==peonblanco5.position.x && torrenegra1.position.z==peonblanco5.position.z)&&
			  (torrenegra1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((torrenegra1.position.x==peonblanco6.position.x && torrenegra1.position.z==peonblanco6.position.z)&&
			  (torrenegra1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((torrenegra1.position.x==peonblanco7.position.x && torrenegra1.position.z==peonblanco7.position.z)&&
			  (torrenegra1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((torrenegra1.position.x==peonblanco8.position.x && torrenegra1.position.z==peonblanco8.position.z)&&
			  (torrenegra1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torrenegra1.position.x==peonnegro1.position.x && torrenegra1.position.z==peonnegro1.position.z)||
			   (torrenegra1.position.x==peonnegro2.position.x && torrenegra1.position.z==peonnegro2.position.z))||
			   (torrenegra1.position.x==peonnegro3.position.x && torrenegra1.position.z==peonnegro3.position.z))||
			   (torrenegra1.position.x==peonnegro4.position.x && torrenegra1.position.z==peonnegro4.position.z))||
			   (torrenegra1.position.x==peonnegro5.position.x && torrenegra1.position.z==peonnegro5.position.z))||
			   (torrenegra1.position.x==peonnegro6.position.x && torrenegra1.position.z==peonnegro6.position.z))||
			   (torrenegra1.position.x==peonnegro7.position.x && torrenegra1.position.z==peonnegro7.position.z))||
			   (torrenegra1.position.x==peonnegro8.position.x && torrenegra1.position.z==peonnegro8.position.z))||
			   (torrenegra1.position.x==torrenegra2.position.x && torrenegra1.position.z==torrenegra2.position.z))||
			   (torrenegra1.position.x==alfilnegro1.position.x && torrenegra1.position.z==alfilnegro1.position.z))||
			   (torrenegra1.position.x==alfilnegro2.position.x && torrenegra1.position.z==alfilnegro2.position.z))||
			   (torrenegra1.position.x==caballonegro1.position.x && torrenegra1.position.z==caballonegro1.position.z))||
			   (torrenegra1.position.x==caballonegro2.position.x && torrenegra1.position.z==caballonegro2.position.z))||
			   (torrenegra1.position.x==reynegro.position.x && torrenegra1.position.z==reynegro.position.z))||
			   (torrenegra1.position.x==reinanegra.position.x && torrenegra1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				torrenegra1.position.x=bloquerojo.position.x;torrenegra1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
		  ////////////////////////////Torre negra 2///////////////////////////////////////////////////////////////////  
		  if (torrenegra2.position.x===bloquerojo.position.x && torrenegra2.position.z===bloquerojo.position.z){
		    var bvtn2 = bloqueverde;
				var pIzqinit=0.05;
				var pDerinit=-0.05;
		    TorreNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvtn2,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    TorreNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torrenegra2.position.x<bvtn2.position.x)
			  torrenegra2.position.x += this.step;
			else
			  torrenegra2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torrenegra2.position.z<bvtn2.position.z)
			  torrenegra2.position.z += this.step;
			else
			  torrenegra2.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(torrenegra2.position.x!=bvtn2.position.x || torrenegra2.position.z!=bvtn2.position.z)
			   	{patitasn2.Plcompleta.rotateZ(pIzqinit);
					patitasn2.Prcompleta.rotateZ(pDerinit);
					if (patitasn2.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn2.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn2.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn2.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn2.Plcompleta.rotation.z=0;
				patitasn2.Prcompleta.rotation.z=0;				
				}				 
		}
		        if((torrenegra2.position.x==torreblanca1.position.x && torrenegra2.position.z==torreblanca1.position.z)&&
			  (torrenegra2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((torrenegra2.position.x==torreblanca2.position.x && torrenegra2.position.z==torreblanca2.position.z)&&
			  (torrenegra2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((torrenegra2.position.x==caballoblanco1.position.x && torrenegra2.position.z==caballoblanco1.position.z)&&
			  (torrenegra2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((torrenegra2.position.x==caballoblanco2.position.x && torrenegra2.position.z==caballoblanco2.position.z)&&
			  (torrenegra2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((torrenegra2.position.x==alfilblanco1.position.x && torrenegra2.position.z==alfilblanco1.position.z)&&
			  (torrenegra2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((torrenegra2.position.x==alfilblanco2.position.x && torrenegra2.position.z==alfilblanco2.position.z)&&
			  (torrenegra2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((torrenegra2.position.x==reinablanca.position.x && torrenegra2.position.z==reinablanca.position.z)&&
			  (torrenegra2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((torrenegra2.position.x==reyblanco.position.x && torrenegra2.position.z==reyblanco.position.z)&&
			  (torrenegra2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((torrenegra2.position.x==peonblanco1.position.x && torrenegra2.position.z==peonblanco1.position.z)&&
			  (torrenegra2.position.y==torreblanca1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((torrenegra2.position.x==peonblanco2.position.x && torrenegra2.position.z==peonblanco2.position.z)&&
			  (torrenegra2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((torrenegra2.position.x==peonblanco3.position.x && torrenegra2.position.z==peonblanco3.position.z)&&
			  (torrenegra2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((torrenegra2.position.x==peonblanco4.position.x && torrenegra2.position.z==peonblanco4.position.z)&&
			  (torrenegra2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((torrenegra2.position.x==peonblanco5.position.x && torrenegra2.position.z==peonblanco5.position.z)&&
			  (torrenegra2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((torrenegra2.position.x==peonblanco6.position.x && torrenegra2.position.z==peonblanco6.position.z)&&
			  (torrenegra2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((torrenegra2.position.x==peonblanco7.position.x && torrenegra2.position.z==peonblanco7.position.z)&&
			  (torrenegra2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((torrenegra2.position.x==peonblanco8.position.x && torrenegra2.position.z==peonblanco8.position.z)&&
			  (torrenegra2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((torrenegra2.position.x==peonnegro1.position.x && torrenegra2.position.z==peonnegro1.position.z)||
			   (torrenegra2.position.x==peonnegro2.position.x && torrenegra2.position.z==peonnegro2.position.z))||
			   (torrenegra2.position.x==peonnegro3.position.x && torrenegra2.position.z==peonnegro3.position.z))||
			   (torrenegra2.position.x==peonnegro4.position.x && torrenegra2.position.z==peonnegro4.position.z))||
			   (torrenegra2.position.x==peonnegro5.position.x && torrenegra2.position.z==peonnegro5.position.z))||
			   (torrenegra2.position.x==peonnegro6.position.x && torrenegra2.position.z==peonnegro6.position.z))||
			   (torrenegra2.position.x==peonnegro7.position.x && torrenegra2.position.z==peonnegro7.position.z))||
			   (torrenegra2.position.x==peonnegro8.position.x && torrenegra2.position.z==peonnegro8.position.z))||
			   (torrenegra2.position.x==torrenegra1.position.x && torrenegra2.position.z==torrenegra1.position.z))||
			   (torrenegra2.position.x==alfilnegro1.position.x && torrenegra2.position.z==alfilnegro1.position.z))||
			   (torrenegra2.position.x==alfilnegro2.position.x && torrenegra2.position.z==alfilnegro2.position.z))||
			   (torrenegra2.position.x==caballonegro1.position.x && torrenegra2.position.z==caballonegro1.position.z))||
			   (torrenegra2.position.x==caballonegro2.position.x && torrenegra2.position.z==caballonegro2.position.z))||
			   (torrenegra2.position.x==reynegro.position.x && torrenegra2.position.z==reynegro.position.z))||
			   (torrenegra2.position.x==reinanegra.position.x && torrenegra2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				torrenegra2.position.x=bloquerojo.position.x;torrenegra2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if torreblanca2
//////////////////////////////////////////////////////Peones///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Peon blanco 1//////////////////////////////////////////////////////////////////
		  if (peonblanco1.position.x===bloquerojo.position.x && peonblanco1.position.z===bloquerojo.position.z){
		    var bvpb1=bloqueverde;//Bloqueverdetorreblanca1
				var pIzqinit=0.05;
				var pDerinit=-0.05;
			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco1.position.x<bvpb1.position.x)
			  peonblanco1.position.x += this.step;
			else
			  peonblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco1.position.z<bvpb1.position.z)
			  peonblanco1.position.z += this.step;
			else
			  peonblanco1.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco1.position.x!=bvpb1.position.x || peonblanco1.position.z!=bvpb1.position.z)
			   	{patitas3.Plcompleta.rotateZ(pIzqinit);
					patitas3.Prcompleta.rotateZ(pDerinit);
					if (patitas3.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas3.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas3.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas3.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas3.Plcompleta.rotation.z=0;
				patitas3.Prcompleta.rotation.z=0;				
				}				 
		}
                        if((peonblanco1.position.x==torrenegra1.position.x && peonblanco1.position.z==torrenegra1.position.z)&&
			  (peonblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco1.position.x==torrenegra2.position.x && peonblanco1.position.z==torrenegra2.position.z)&&
			  (peonblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco1.position.x==caballonegro1.position.x && peonblanco1.position.z==caballonegro1.position.z)&&
			  (peonblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco1.position.x==caballonegro2.position.x && peonblanco1.position.z==caballonegro2.position.z)&&
			  (peonblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco1.position.x==alfilnegro1.position.x && peonblanco1.position.z==alfilnegro1.position.z)&&
			  (peonblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco1.position.x==alfilnegro2.position.x && peonblanco1.position.z==alfilnegro2.position.z)&&
			  (peonblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco1.position.x==reinanegra.position.x && peonblanco1.position.z==reinanegra.position.z)&&
			  (peonblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco1.position.x==reynegro.position.x && peonblanco1.position.z==reynegro.position.z)&&
			  (peonblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco1.position.x==peonnegro1.position.x && peonblanco1.position.z==peonnegro1.position.z)&&
			  (peonblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco1.position.x==peonnegro2.position.x && peonblanco1.position.z==peonnegro2.position.z)&&
			  (peonblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco1.position.x==peonnegro3.position.x && peonblanco1.position.z==peonnegro3.position.z)&&
			  (peonblanco1.position.y==peonnegro3.position.y))
			{peonnegra3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco1.position.x==peonnegro4.position.x && peonblanco1.position.z==peonnegro4.position.z)&&
			  (peonblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco1.position.x==peonnegro5.position.x && peonblanco1.position.z==peonnegro5.position.z)&&
			  (peonblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco1.position.x==peonnegro6.position.x && peonblanco1.position.z==peonnegro6.position.z)&&
			  (peonblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco1.position.x==peonnegro7.position.x && peonblanco1.position.z==peonnegro7.position.z)&&
			  (peonblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco1.position.x==peonnegro8.position.x && peonblanco1.position.z==peonnegro8.position.z)&&
			  (peonblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}   
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco1.position.x==torreblanca1.position.x && peonblanco1.position.z==torreblanca1.position.z)||
			   (peonblanco1.position.x==peonblanco2.position.x && peonblanco1.position.z==peonblanco2.position.z))||
			   (peonblanco1.position.x==peonblanco3.position.x && peonblanco1.position.z==peonblanco3.position.z))||
			   (peonblanco1.position.x==peonblanco4.position.x && peonblanco1.position.z==peonblanco4.position.z))||
			   (peonblanco1.position.x==peonblanco5.position.x && peonblanco1.position.z==peonblanco5.position.z))||
			   (peonblanco1.position.x==peonblanco6.position.x && peonblanco1.position.z==peonblanco6.position.z))||
			   (peonblanco1.position.x==peonblanco7.position.x && peonblanco1.position.z==peonblanco7.position.z))||
			   (peonblanco1.position.x==peonblanco8.position.x && peonblanco1.position.z==peonblanco8.position.z))||
			   (peonblanco1.position.x==torreblanca2.position.x && peonblanco1.position.z==torreblanca2.position.z))||
			   (peonblanco1.position.x==alfilblanco1.position.x && peonblanco1.position.z==alfilblanco1.position.z))||
			   (peonblanco1.position.x==alfilblanco2.position.x && peonblanco1.position.z==alfilblanco2.position.z))||
			   (peonblanco1.position.x==caballoblanco1.position.x && peonblanco1.position.z==caballoblanco1.position.z))||
			   (peonblanco1.position.x==caballoblanco2.position.x && peonblanco1.position.z==caballoblanco2.position.z))||
			   (peonblanco1.position.x==reyblanco.position.x && peonblanco1.position.z==reyblanco.position.z))||
			   (peonblanco1.position.x==reinablanca.position.x && peonblanco1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco1.position.x=bloquerojo.position.x;peonblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco1
	          ///////////////////////////////////Peon blanco 2//////////////////////////////////////////////////////////////////
		  if (peonblanco2.position.x===bloquerojo.position.x && peonblanco2.position.z===bloquerojo.position.z){
		    var bvpb2=bloqueverde;//Bloqueverdetorreblanca1
				var pIzqinit=0.05;
				var pDerinit=-0.05;
			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco2.position.x<bvpb2.position.x)
			  peonblanco2.position.x += this.step;
			else
			  peonblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco2.position.z<bvpb2.position.z)
			  peonblanco2.position.z += this.step;
			else
			  peonblanco2.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco2.position.x!=bvpb2.position.x || peonblanco2.position.z!=bvpb2.position.z)
			   	{patitas4.Plcompleta.rotateZ(pIzqinit);
					patitas4.Prcompleta.rotateZ(pDerinit);
					if (patitas4.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas4.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas4.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas4.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas4.Plcompleta.rotation.z=0;
				patitas4.Prcompleta.rotation.z=0;				
				}				 
		}
		        if((peonblanco2.position.x==torrenegra1.position.x && peonblanco2.position.z==torrenegra1.position.z)&&
			  (peonblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco2.position.x==torrenegra2.position.x && peonblanco2.position.z==torrenegra2.position.z)&&
			  (peonblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco2.position.x==caballonegro1.position.x && peonblanco2.position.z==caballonegro1.position.z)&&
			  (peonblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco2.position.x==caballonegro2.position.x && peonblanco2.position.z==caballonegro2.position.z)&&
			  (peonblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco2.position.x==alfilnegro1.position.x && peonblanco2.position.z==alfilnegro1.position.z)&&
			  (peonblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco2.position.x==alfilnegro2.position.x && peonblanco2.position.z==alfilnegro2.position.z)&&
			  (peonblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco2.position.x==reinanegra.position.x && peonblanco2.position.z==reinanegra.position.z)&&
			  (peonblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco2.position.x==reynegro.position.x && peonblanco2.position.z==reynegro.position.z)&&
			  (peonblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco2.position.x==peonnegro1.position.x && peonblanco2.position.z==peonnegro1.position.z)&&
			  (peonblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco2.position.x==peonnegro2.position.x && peonblanco2.position.z==peonnegro2.position.z)&&
			  (peonblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco2.position.x==peonnegro3.position.x && peonblanco2.position.z==peonnegro3.position.z)&&
			  (peonblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco2.position.x==peonnegro4.position.x && peonblanco2.position.z==peonnegro4.position.z)&&
			  (peonblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco2.position.x==peonnegro5.position.x && peonblanco2.position.z==peonnegro5.position.z)&&
			  (peonblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco2.position.x==peonnegro6.position.x && peonblanco2.position.z==peonnegro6.position.z)&&
			  (peonblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco2.position.x==peonnegro7.position.x && peonblanco2.position.z==peonnegro7.position.z)&&
			  (peonblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco2.position.x==peonnegro8.position.x && peonblanco2.position.z==peonnegro8.position.z)&&
			  (peonblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco2.position.x==torreblanca1.position.x && peonblanco2.position.z==torreblanca1.position.z)||
			   (peonblanco2.position.x==peonblanco1.position.x && peonblanco2.position.z==peonblanco1.position.z))||
			   (peonblanco2.position.x==peonblanco3.position.x && peonblanco2.position.z==peonblanco3.position.z))||
			   (peonblanco2.position.x==peonblanco4.position.x && peonblanco2.position.z==peonblanco4.position.z))||
			   (peonblanco2.position.x==peonblanco5.position.x && peonblanco2.position.z==peonblanco5.position.z))||
			   (peonblanco2.position.x==peonblanco6.position.x && peonblanco2.position.z==peonblanco6.position.z))||
			   (peonblanco2.position.x==peonblanco7.position.x && peonblanco2.position.z==peonblanco7.position.z))||
			   (peonblanco2.position.x==peonblanco8.position.x && peonblanco2.position.z==peonblanco8.position.z))||
			   (peonblanco2.position.x==torreblanca2.position.x && peonblanco2.position.z==torreblanca2.position.z))||
			   (peonblanco2.position.x==alfilblanco1.position.x && peonblanco2.position.z==alfilblanco1.position.z))||
			   (peonblanco2.position.x==alfilblanco2.position.x && peonblanco2.position.z==alfilblanco2.position.z))||
			   (peonblanco2.position.x==caballoblanco1.position.x && peonblanco2.position.z==caballoblanco1.position.z))||
			   (peonblanco2.position.x==caballoblanco2.position.x && peonblanco2.position.z==caballoblanco2.position.z))||
			   (peonblanco2.position.x==reyblanco.position.x && peonblanco2.position.z==reyblanco.position.z))||
			   (peonblanco2.position.x==reinablanca.position.x && peonblanco2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco2.position.x=bloquerojo.position.x;peonblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco2		
	          ///////////////////////////////////Peon blanco 3//////////////////////////////////////////////////////////////////
		  if (peonblanco3.position.x===bloquerojo.position.x && peonblanco3.position.z===bloquerojo.position.z){
		    var bvpb3=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb3,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco3.position.x<bvpb3.position.x)
			  peonblanco3.position.x += this.step;
			else
			  peonblanco3.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco3.position.z<bvpb3.position.z)
			  peonblanco3.position.z += this.step;
			else
			  peonblanco3.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco3.position.x!=bvpb3.position.x || peonblanco3.position.z!=bvpb3.position.z)
			   	{patitas5.Plcompleta.rotateZ(pIzqinit);
					patitas5.Prcompleta.rotateZ(pDerinit);
					if (patitas5.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas5.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas5.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas5.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas5.Plcompleta.rotation.z=0;
				patitas5.Prcompleta.rotation.z=0;				
				}				 
		}
		        if((peonblanco3.position.x==torrenegra1.position.x && peonblanco3.position.z==torrenegra1.position.z)&&
			  (peonblanco3.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco3.position.x==torrenegra2.position.x && peonblanco3.position.z==torrenegra2.position.z)&&
			  (peonblanco3.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco3.position.x==caballonegro1.position.x && peonblanco3.position.z==caballonegro1.position.z)&&
			  (peonblanco3.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco3.position.x==caballonegro2.position.x && peonblanco3.position.z==caballonegro2.position.z)&&
			  (peonblanco3.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco3.position.x==alfilnegro1.position.x && peonblanco3.position.z==alfilnegro1.position.z)&&
			  (peonblanco3.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco3.position.x==alfilnegro2.position.x && peonblanco3.position.z==alfilnegro2.position.z)&&
			  (peonblanco3.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco3.position.x==reinanegra.position.x && peonblanco3.position.z==reinanegra.position.z)&&
			  (peonblanco3.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco3.position.x==reynegro.position.x && peonblanco3.position.z==reynegro.position.z)&&
			  (peonblanco3.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco3.position.x==peonnegro1.position.x && peonblanco3.position.z==peonnegro1.position.z)&&
			  (peonblanco3.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco3.position.x==peonnegro2.position.x && peonblanco3.position.z==peonnegro2.position.z)&&
			  (peonblanco3.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco3.position.x==peonnegro3.position.x && peonblanco3.position.z==peonnegro3.position.z)&&
			  (peonblanco3.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco3.position.x==peonnegro4.position.x && peonblanco3.position.z==peonnegro4.position.z)&&
			  (peonblanco3.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco3.position.x==peonnegro5.position.x && peonblanco3.position.z==peonnegro5.position.z)&&
			  (peonblanco3.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco3.position.x==peonnegro6.position.x && peonblanco3.position.z==peonnegro6.position.z)&&
			  (peonblanco3.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco3.position.x==peonnegro7.position.x && peonblanco3.position.z==peonnegro7.position.z)&&
			  (peonblanco3.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco3.position.x==peonnegro8.position.x && peonblanco3.position.z==peonnegro8.position.z)&&
			  (peonblanco3.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco3.position.x==torreblanca1.position.x && peonblanco3.position.z==torreblanca1.position.z)||
			   (peonblanco3.position.x==peonblanco2.position.x && peonblanco3.position.z==peonblanco2.position.z))||
			   (peonblanco3.position.x==peonblanco1.position.x && peonblanco3.position.z==peonblanco1.position.z))||
			   (peonblanco3.position.x==peonblanco4.position.x && peonblanco3.position.z==peonblanco4.position.z))||
			   (peonblanco3.position.x==peonblanco5.position.x && peonblanco3.position.z==peonblanco5.position.z))||
			   (peonblanco3.position.x==peonblanco6.position.x && peonblanco3.position.z==peonblanco6.position.z))||
			   (peonblanco3.position.x==peonblanco7.position.x && peonblanco3.position.z==peonblanco7.position.z))||
			   (peonblanco3.position.x==peonblanco8.position.x && peonblanco3.position.z==peonblanco8.position.z))||
			   (peonblanco3.position.x==torreblanca2.position.x && peonblanco3.position.z==torreblanca2.position.z))||
			   (peonblanco3.position.x==alfilblanco1.position.x && peonblanco3.position.z==alfilblanco1.position.z))||
			   (peonblanco3.position.x==alfilblanco2.position.x && peonblanco3.position.z==alfilblanco2.position.z))||
			   (peonblanco3.position.x==caballoblanco1.position.x && peonblanco3.position.z==caballoblanco1.position.z))||
			   (peonblanco3.position.x==caballoblanco2.position.x && peonblanco3.position.z==caballoblanco2.position.z))||
			   (peonblanco3.position.x==reyblanco.position.x && peonblanco3.position.z==reyblanco.position.z))||
			   (peonblanco3.position.x==reinablanca.position.x && peonblanco3.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco3.position.x=bloquerojo.position.x;peonblanco3.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco3
	          ///////////////////////////////////Peon blanco 4//////////////////////////////////////////////////////////////////
		  if (peonblanco4.position.x===bloquerojo.position.x && peonblanco4.position.z===bloquerojo.position.z){
		    var bvpb4=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb4,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco4.position.x<bvpb4.position.x)
			  peonblanco4.position.x += this.step;
			else
			  peonblanco4.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco4.position.z<bvpb4.position.z)
			  peonblanco4.position.z += this.step;
			else
			  peonblanco4.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco4.position.x!=bvpb4.position.x || peonblanco4.position.z!=bvpb4.position.z)
			   	{patitas6.Plcompleta.rotateZ(pIzqinit);
					patitas6.Prcompleta.rotateZ(pDerinit);
					if (patitas6.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas6.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas6.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas6.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas6.Plcompleta.rotation.z=0;
				patitas6.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonblanco4.position.x==torrenegra1.position.x && peonblanco4.position.z==torrenegra1.position.z)&&
			  (peonblanco4.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco4.position.x==torrenegra2.position.x && peonblanco4.position.z==torrenegra2.position.z)&&
			  (peonblanco4.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco4.position.x==caballonegro1.position.x && peonblanco4.position.z==caballonegro1.position.z)&&
			  (peonblanco4.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco4.position.x==caballonegro2.position.x && peonblanco4.position.z==caballonegro2.position.z)&&
			  (peonblanco4.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco4.position.x==alfilnegro1.position.x && peonblanco4.position.z==alfilnegro1.position.z)&&
			  (peonblanco4.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco4.position.x==alfilnegro2.position.x && peonblanco4.position.z==alfilnegro2.position.z)&&
			  (peonblanco4.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco4.position.x==reinanegra.position.x && peonblanco4.position.z==reinanegra.position.z)&&
			  (peonblanco4.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco4.position.x==reynegro.position.x && peonblanco4.position.z==reynegro.position.z)&&
			  (peonblanco4.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco4.position.x==peonnegro1.position.x && peonblanco4.position.z==peonnegro1.position.z)&&
			  (peonblanco4.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco4.position.x==peonnegro2.position.x && peonblanco4.position.z==peonnegro2.position.z)&&
			  (peonblanco4.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco4.position.x==peonnegro3.position.x && peonblanco4.position.z==peonnegro3.position.z)&&
			  (peonblanco4.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco4.position.x==peonnegro4.position.x && peonblanco4.position.z==peonnegro4.position.z)&&
			  (peonblanco4.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco4.position.x==peonnegro5.position.x && peonblanco4.position.z==peonnegro5.position.z)&&
			  (peonblanco4.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco4.position.x==peonnegro6.position.x && peonblanco4.position.z==peonnegro6.position.z)&&
			  (peonblanco4.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco4.position.x==peonnegro7.position.x && peonblanco4.position.z==peonnegro7.position.z)&&
			  (peonblanco4.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco4.position.x==peonnegro8.position.x && peonblanco4.position.z==peonnegro8.position.z)&&
			  (peonblanco4.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco4.position.x==torreblanca1.position.x && peonblanco4.position.z==torreblanca1.position.z)||
			   (peonblanco4.position.x==peonblanco2.position.x && peonblanco4.position.z==peonblanco2.position.z))||
			   (peonblanco4.position.x==peonblanco3.position.x && peonblanco4.position.z==peonblanco3.position.z))||
			   (peonblanco4.position.x==peonblanco1.position.x && peonblanco4.position.z==peonblanco1.position.z))||
			   (peonblanco4.position.x==peonblanco5.position.x && peonblanco4.position.z==peonblanco5.position.z))||
			   (peonblanco4.position.x==peonblanco6.position.x && peonblanco4.position.z==peonblanco6.position.z))||
			   (peonblanco4.position.x==peonblanco7.position.x && peonblanco4.position.z==peonblanco7.position.z))||
			   (peonblanco4.position.x==peonblanco8.position.x && peonblanco4.position.z==peonblanco8.position.z))||
			   (peonblanco4.position.x==torreblanca2.position.x && peonblanco4.position.z==torreblanca2.position.z))||
			   (peonblanco4.position.x==alfilblanco1.position.x && peonblanco4.position.z==alfilblanco1.position.z))||
			   (peonblanco4.position.x==alfilblanco2.position.x && peonblanco4.position.z==alfilblanco2.position.z))||
			   (peonblanco4.position.x==caballoblanco1.position.x && peonblanco4.position.z==caballoblanco1.position.z))||
			   (peonblanco4.position.x==caballoblanco2.position.x && peonblanco4.position.z==caballoblanco2.position.z))||
			   (peonblanco4.position.x==reyblanco.position.x && peonblanco4.position.z==reyblanco.position.z))||
			   (peonblanco4.position.x==reinablanca.position.x && peonblanco4.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco4.position.x=bloquerojo.position.x;peonblanco4.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco4
	          ///////////////////////////////////Peon blanco 5//////////////////////////////////////////////////////////////////
		  if (peonblanco5.position.x===bloquerojo.position.x && peonblanco5.position.z===bloquerojo.position.z){
		    var bvpb5=bloqueverde;//Bloqueverdetorreblanca1
				var pIzqinit=0.05;
				var pDerinit=-0.05;		  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb5,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco5.position.x<bvpb5.position.x)
			  peonblanco5.position.x += this.step;
			else
			  peonblanco5.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco5.position.z<bvpb5.position.z)
			  peonblanco5.position.z += this.step;
			else
			  peonblanco5.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco5.position.x!=bvpb5.position.x || peonblanco5.position.z!=bvpb5.position.z)
			   	{patitas7.Plcompleta.rotateZ(pIzqinit);
					patitas7.Prcompleta.rotateZ(pDerinit);
					if (patitas7.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas7.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas7.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas7.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas7.Plcompleta.rotation.z=0;
				patitas7.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonblanco5.position.x==torrenegra1.position.x && peonblanco5.position.z==torrenegra1.position.z)&&
			  (peonblanco5.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco5.position.x==torrenegra2.position.x && peonblanco5.position.z==torrenegra2.position.z)&&
			  (peonblanco5.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco5.position.x==caballonegro1.position.x && peonblanco5.position.z==caballonegro1.position.z)&&
			  (peonblanco5.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco5.position.x==caballonegro2.position.x && peonblanco5.position.z==caballonegro2.position.z)&&
			  (peonblanco5.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco5.position.x==alfilnegro1.position.x && peonblanco5.position.z==alfilnegro1.position.z)&&
			  (peonblanco5.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco5.position.x==alfilnegro2.position.x && peonblanco5.position.z==alfilnegro2.position.z)&&
			  (peonblanco5.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco5.position.x==reinanegra.position.x && peonblanco5.position.z==reinanegra.position.z)&&
			  (peonblanco5.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco5.position.x==reynegro.position.x && peonblanco5.position.z==reynegro.position.z)&&
			  (peonblanco5.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco5.position.x==peonnegro1.position.x && peonblanco5.position.z==peonnegro1.position.z)&&
			  (peonblanco5.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco5.position.x==peonnegro2.position.x && peonblanco5.position.z==peonnegro2.position.z)&&
			  (peonblanco5.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco5.position.x==peonnegro3.position.x && peonblanco5.position.z==peonnegro3.position.z)&&
			  (peonblanco5.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco5.position.x==peonnegro4.position.x && peonblanco5.position.z==peonnegro4.position.z)&&
			  (peonblanco5.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco5.position.x==peonnegro5.position.x && peonblanco5.position.z==peonnegro5.position.z)&&
			  (peonblanco5.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco5.position.x==peonnegro6.position.x && peonblanco5.position.z==peonnegro6.position.z)&&
			  (peonblanco5.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco5.position.x==peonnegro7.position.x && peonblanco5.position.z==peonnegro7.position.z)&&
			  (peonblanco5.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco5.position.x==peonnegro8.position.x && peonblanco5.position.z==peonnegro8.position.z)&&
			  (peonblanco5.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco5.position.x==torreblanca1.position.x && peonblanco5.position.z==torreblanca1.position.z)||
			   (peonblanco5.position.x==peonblanco2.position.x && peonblanco5.position.z==peonblanco2.position.z))||
			   (peonblanco5.position.x==peonblanco3.position.x && peonblanco5.position.z==peonblanco3.position.z))||
			   (peonblanco5.position.x==peonblanco4.position.x && peonblanco5.position.z==peonblanco4.position.z))||
			   (peonblanco5.position.x==peonblanco1.position.x && peonblanco5.position.z==peonblanco1.position.z))||
			   (peonblanco5.position.x==peonblanco6.position.x && peonblanco5.position.z==peonblanco6.position.z))||
			   (peonblanco5.position.x==peonblanco7.position.x && peonblanco5.position.z==peonblanco7.position.z))||
			   (peonblanco5.position.x==peonblanco8.position.x && peonblanco5.position.z==peonblanco8.position.z))||
			   (peonblanco5.position.x==torreblanca2.position.x && peonblanco5.position.z==torreblanca2.position.z))||
			   (peonblanco5.position.x==alfilblanco1.position.x && peonblanco5.position.z==alfilblanco1.position.z))||
			   (peonblanco5.position.x==alfilblanco2.position.x && peonblanco5.position.z==alfilblanco2.position.z))||
			   (peonblanco5.position.x==caballoblanco1.position.x && peonblanco5.position.z==caballoblanco1.position.z))||
			   (peonblanco5.position.x==caballoblanco2.position.x && peonblanco5.position.z==caballoblanco2.position.z))||
			   (peonblanco5.position.x==reyblanco.position.x && peonblanco5.position.z==reyblanco.position.z))||
			   (peonblanco5.position.x==reinablanca.position.x && peonblanco5.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco5.position.x=bloquerojo.position.x;peonblanco5.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco5
	          ///////////////////////////////////Peon blanco 6//////////////////////////////////////////////////////////////////
		  if (peonblanco6.position.x===bloquerojo.position.x && peonblanco6.position.z===bloquerojo.position.z){
		    var bvpb6=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb6,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco6.position.x<bvpb6.position.x)
			  peonblanco6.position.x += this.step;
			else
			  peonblanco6.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco6.position.z<bvpb6.position.z)
			  peonblanco6.position.z += this.step;
			else
			  peonblanco6.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco6.position.x!=bvpb6.position.x || peonblanco6.position.z!=bvpb6.position.z)
			   	{patitas8.Plcompleta.rotateZ(pIzqinit);
					patitas8.Prcompleta.rotateZ(pDerinit);
					if (patitas8.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas8.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas8.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas8.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas8.Plcompleta.rotation.z=0;
				patitas8.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonblanco6.position.x==torrenegra1.position.x && peonblanco6.position.z==torrenegra1.position.z)&&
			  (peonblanco6.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco6.position.x==torrenegra2.position.x && peonblanco6.position.z==torrenegra2.position.z)&&
			  (peonblanco6.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco6.position.x==caballonegro1.position.x && peonblanco6.position.z==caballonegro1.position.z)&&
			  (peonblanco6.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco6.position.x==caballonegro2.position.x && peonblanco6.position.z==caballonegro2.position.z)&&
			  (peonblanco6.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco6.position.x==alfilnegro1.position.x && peonblanco6.position.z==alfilnegro1.position.z)&&
			  (peonblanco6.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco6.position.x==alfilnegro2.position.x && peonblanco6.position.z==alfilnegro2.position.z)&&
			  (peonblanco6.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco6.position.x==reinanegra.position.x && peonblanco6.position.z==reinanegra.position.z)&&
			  (peonblanco6.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco6.position.x==reynegro.position.x && peonblanco6.position.z==reynegro.position.z)&&
			  (peonblanco6.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco6.position.x==peonnegro1.position.x && peonblanco6.position.z==peonnegro1.position.z)&&
			  (peonblanco6.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco6.position.x==peonnegro2.position.x && peonblanco6.position.z==peonnegro2.position.z)&&
			  (peonblanco6.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco6.position.x==peonnegro3.position.x && peonblanco6.position.z==peonnegro3.position.z)&&
			  (peonblanco6.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco6.position.x==peonnegro4.position.x && peonblanco6.position.z==peonnegro4.position.z)&&
			  (peonblanco6.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco6.position.x==peonnegro5.position.x && peonblanco6.position.z==peonnegro5.position.z)&&
			  (peonblanco6.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco6.position.x==peonnegro6.position.x && peonblanco6.position.z==peonnegro6.position.z)&&
			  (peonblanco6.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco6.position.x==peonnegro7.position.x && peonblanco6.position.z==peonnegro7.position.z)&&
			  (peonblanco6.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco6.position.x==peonnegro8.position.x && peonblanco6.position.z==peonnegro8.position.z)&&
			  (peonblanco6.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco6.position.x==torreblanca1.position.x && peonblanco6.position.z==torreblanca1.position.z)||
			   (peonblanco6.position.x==peonblanco2.position.x && peonblanco6.position.z==peonblanco2.position.z))||
			   (peonblanco6.position.x==peonblanco3.position.x && peonblanco6.position.z==peonblanco3.position.z))||
			   (peonblanco6.position.x==peonblanco4.position.x && peonblanco6.position.z==peonblanco4.position.z))||
			   (peonblanco6.position.x==peonblanco5.position.x && peonblanco6.position.z==peonblanco5.position.z))||
			   (peonblanco6.position.x==peonblanco1.position.x && peonblanco6.position.z==peonblanco1.position.z))||
			   (peonblanco6.position.x==peonblanco7.position.x && peonblanco6.position.z==peonblanco7.position.z))||
			   (peonblanco6.position.x==peonblanco8.position.x && peonblanco6.position.z==peonblanco8.position.z))||
			   (peonblanco6.position.x==torreblanca2.position.x && peonblanco6.position.z==torreblanca2.position.z))||
			   (peonblanco6.position.x==alfilblanco1.position.x && peonblanco6.position.z==alfilblanco1.position.z))||
			   (peonblanco6.position.x==alfilblanco2.position.x && peonblanco6.position.z==alfilblanco2.position.z))||
			   (peonblanco6.position.x==caballoblanco1.position.x && peonblanco6.position.z==caballoblanco1.position.z))||
			   (peonblanco6.position.x==caballoblanco2.position.x && peonblanco6.position.z==caballoblanco2.position.z))||
			   (peonblanco6.position.x==reyblanco.position.x && peonblanco6.position.z==reyblanco.position.z))||
			   (peonblanco6.position.x==reinablanca.position.x && peonblanco6.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco6.position.x=bloquerojo.position.x;peonblanco6.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco6
	          ///////////////////////////////////Peon blanco 7//////////////////////////////////////////////////////////////////
		  if (peonblanco7.position.x===bloquerojo.position.x && peonblanco7.position.z===bloquerojo.position.z){
		    var bvpb7=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb7,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco7.position.x<bvpb7.position.x)
			  peonblanco7.position.x += this.step;
			else
			  peonblanco7.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco7.position.z<bvpb7.position.z)
			  peonblanco7.position.z += this.step;
			else
			  peonblanco7.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco7.position.x!=bvpb7.position.x || peonblanco7.position.z!=bvpb7.position.z)
			   	{patitas9.Plcompleta.rotateZ(pIzqinit);
					patitas9.Prcompleta.rotateZ(pDerinit);
					if (patitas9.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas9.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas9.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas9.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas9.Plcompleta.rotation.z=0;
				patitas9.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonblanco7.position.x==torrenegra1.position.x && peonblanco7.position.z==torrenegra1.position.z)&&
			  (peonblanco7.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco7.position.x==torrenegra2.position.x && peonblanco7.position.z==torrenegra2.position.z)&&
			  (peonblanco7.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco7.position.x==caballonegro1.position.x && peonblanco7.position.z==caballonegro1.position.z)&&
			  (peonblanco7.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco7.position.x==caballonegro2.position.x && peonblanco7.position.z==caballonegro2.position.z)&&
			  (peonblanco7.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco7.position.x==alfilnegro1.position.x && peonblanco7.position.z==alfilnegro1.position.z)&&
			  (peonblanco7.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco7.position.x==alfilnegro2.position.x && peonblanco7.position.z==alfilnegro2.position.z)&&
			  (peonblanco7.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco7.position.x==reinanegra.position.x && peonblanco7.position.z==reinanegra.position.z)&&
			  (peonblanco7.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco7.position.x==reynegro.position.x && peonblanco7.position.z==reynegro.position.z)&&
			  (peonblanco7.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco7.position.x==peonnegro1.position.x && peonblanco7.position.z==peonnegro1.position.z)&&
			  (peonblanco7.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco7.position.x==peonnegro2.position.x && peonblanco7.position.z==peonnegro2.position.z)&&
			  (peonblanco7.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco7.position.x==peonnegro3.position.x && peonblanco7.position.z==peonnegro3.position.z)&&
			  (peonblanco7.position.y==peonnegro3.position.y))
			{peonengro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco7.position.x==peonnegro4.position.x && peonblanco7.position.z==peonnegro4.position.z)&&
			  (peonblanco7.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco7.position.x==peonnegro5.position.x && peonblanco7.position.z==peonnegro5.position.z)&&
			  (peonblanco7.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco7.position.x==peonnegro6.position.x && peonblanco7.position.z==peonnegro6.position.z)&&
			  (peonblanco7.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco7.position.x==peonnegro7.position.x && peonblanco7.position.z==peonnegro7.position.z)&&
			  (peonblanco7.position.y==peonnegro7.position.y))
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco7.position.x==peonnegro8.position.x && peonblanco7.position.z==peonnegro8.position.z)&&
			  (peonblanco7.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco7.position.x==torreblanca1.position.x && peonblanco7.position.z==torreblanca1.position.z)||
			   (peonblanco7.position.x==peonblanco2.position.x && peonblanco7.position.z==peonblanco2.position.z))||
			   (peonblanco7.position.x==peonblanco3.position.x && peonblanco7.position.z==peonblanco3.position.z))||
			   (peonblanco7.position.x==peonblanco4.position.x && peonblanco7.position.z==peonblanco4.position.z))||
			   (peonblanco7.position.x==peonblanco5.position.x && peonblanco7.position.z==peonblanco5.position.z))||
			   (peonblanco7.position.x==peonblanco6.position.x && peonblanco7.position.z==peonblanco6.position.z))||
			   (peonblanco7.position.x==peonblanco1.position.x && peonblanco7.position.z==peonblanco1.position.z))||
			   (peonblanco7.position.x==peonblanco8.position.x && peonblanco7.position.z==peonblanco8.position.z))||
			   (peonblanco7.position.x==torreblanca2.position.x && peonblanco7.position.z==torreblanca2.position.z))||
			   (peonblanco7.position.x==alfilblanco1.position.x && peonblanco7.position.z==alfilblanco1.position.z))||
			   (peonblanco7.position.x==alfilblanco2.position.x && peonblanco7.position.z==alfilblanco2.position.z))||
			   (peonblanco7.position.x==caballoblanco1.position.x && peonblanco7.position.z==caballoblanco1.position.z))||
			   (peonblanco7.position.x==caballoblanco2.position.x && peonblanco7.position.z==caballoblanco2.position.z))||
			   (peonblanco7.position.x==reyblanco.position.x && peonblanco7.position.z==reyblanco.position.z))||
			   (peonblanco7.position.x==reinablanca.position.x && peonblanco7.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco7.position.x=bloquerojo.position.x;peonblanco7.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco7
	          ///////////////////////////////////Peon blanco 8//////////////////////////////////////////////////////////////////
		  if (peonblanco8.position.x===bloquerojo.position.x && peonblanco8.position.z===bloquerojo.position.z){
		    var bvpb8=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpb8,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonblanco8.position.x<bvpb8.position.x)
			  peonblanco8.position.x += this.step;
			else
			  peonblanco8.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonblanco8.position.z<bvpb8.position.z)
			  peonblanco8.position.z += this.step;
			else
			  peonblanco8.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonblanco8.position.x!=bvpb8.position.x || peonblanco8.position.z!=bvpb8.position.z)
			   	{patitas10.Plcompleta.rotateZ(pIzqinit);
					patitas10.Prcompleta.rotateZ(pDerinit);
					if (patitas10.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas10.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas10.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas10.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas10.Plcompleta.rotation.z=0;
				patitas10.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonblanco8.position.x==torrenegra1.position.x && peonblanco8.position.z==torrenegra1.position.z)&&
			  (peonblanco8.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((peonblanco8.position.x==torrenegra2.position.x && peonblanco8.position.z==torrenegra2.position.z)&&
			  (peonblanco8.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((peonblanco8.position.x==caballonegro1.position.x && peonblanco8.position.z==caballonegro1.position.z)&&
			  (peonblanco8.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((peonblanco8.position.x==caballonegro2.position.x && peonblanco8.position.z==caballonegro2.position.z)&&
			  (peonblanco8.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((peonblanco8.position.x==alfilnegro1.position.x && peonblanco8.position.z==alfilnegro1.position.z)&&
			  (peonblanco8.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((peonblanco8.position.x==alfilnegro2.position.x && peonblanco8.position.z==alfilnegro2.position.z)&&
			  (peonblanco8.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((peonblanco8.position.x==reinanegra.position.x && peonblanco8.position.z==reinanegra.position.z)&&
			  (peonblanco8.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((peonblanco8.position.x==reynegro.position.x && peonblanco8.position.z==reynegro.position.z)&&
			  (peonblanco8.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((peonblanco8.position.x==peonnegro1.position.x && peonblanco8.position.z==peonnegro1.position.z)&&
			  (peonblanco8.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((peonblanco8.position.x==peonnegro2.position.x && peonblanco8.position.z==peonnegro2.position.z)&&
			  (peonblanco8.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((peonblanco8.position.x==peonnegro3.position.x && peonblanco8.position.z==peonnegro3.position.z)&&
			  (peonblanco8.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((peonblanco8.position.x==peonnegro4.position.x && peonblanco8.position.z==peonnegro4.position.z)&&
			  (peonblanco8.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((peonblanco8.position.x==peonnegro5.position.x && peonblanco8.position.z==peonnegro5.position.z)&&
			  (peonblanco8.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((peonblanco8.position.x==peonnegro6.position.x && peonblanco8.position.z==peonnegro6.position.z)&&
			  (peonblanco8.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((peonblanco8.position.x==peonnegro7.position.x && peonblanco8.position.z==peonnegro7.position.z)&&
			  (peonblanco8.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((peonblanco8.position.x==peonnegro8.position.x && peonblanco8.position.z==peonnegro8.position.z)&&
			  (peonblanco8.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonblanco8.position.x==torreblanca1.position.x && peonblanco8.position.z==torreblanca1.position.z)||
			   (peonblanco8.position.x==peonblanco2.position.x && peonblanco8.position.z==peonblanco2.position.z))||
			   (peonblanco8.position.x==peonblanco3.position.x && peonblanco8.position.z==peonblanco3.position.z))||
			   (peonblanco8.position.x==peonblanco4.position.x && peonblanco8.position.z==peonblanco4.position.z))||
			   (peonblanco8.position.x==peonblanco5.position.x && peonblanco8.position.z==peonblanco5.position.z))||
			   (peonblanco8.position.x==peonblanco6.position.x && peonblanco8.position.z==peonblanco6.position.z))||
			   (peonblanco8.position.x==peonblanco7.position.x && peonblanco8.position.z==peonblanco7.position.z))||
			   (peonblanco8.position.x==peonblanco1.position.x && peonblanco8.position.z==peonblanco1.position.z))||
			   (peonblanco8.position.x==torreblanca2.position.x && peonblanco8.position.z==torreblanca2.position.z))||
			   (peonblanco8.position.x==alfilblanco1.position.x && peonblanco8.position.z==alfilblanco1.position.z))||
			   (peonblanco8.position.x==alfilblanco2.position.x && peonblanco8.position.z==alfilblanco2.position.z))||
			   (peonblanco8.position.x==caballoblanco1.position.x && peonblanco8.position.z==caballoblanco1.position.z))||
			   (peonblanco8.position.x==caballoblanco2.position.x && peonblanco8.position.z==caballoblanco2.position.z))||
			   (peonblanco8.position.x==reyblanco.position.x && peonblanco8.position.z==reyblanco.position.z))||
			   (peonblanco8.position.x==reinablanca.position.x && peonblanco8.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonblanco8.position.x=bloquerojo.position.x;peonblanco8.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonblanco8
	          ///////////////////////////////////Peon negro 1//////////////////////////////////////////////////////////////////
		  if (peonnegro1.position.x===bloquerojo.position.x && peonnegro1.position.z===bloquerojo.position.z){
		    var bvpn1=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro1.position.x<bvpn1.position.x)
			  peonnegro1.position.x += this.step;
			else
			  peonnegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro1.position.z<bvpn1.position.z)
			  peonnegro1.position.z += this.step;
			else
			  peonnegro1.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro1.position.x!=bvpn1.position.x || peonnegro1.position.z!=bvpn1.position.z)
			   	{patitasn3.Plcompleta.rotateZ(pIzqinit);
					patitasn3.Prcompleta.rotateZ(pDerinit);
					if (patitasn3.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn3.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn3.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn3.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn3.Plcompleta.rotation.z=0;
				patitasn3.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro1.position.x==torreblanca1.position.x && peonnegro1.position.z==torreblanca1.position.z)&&
			  (peonnegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro1.position.x==torreblanca2.position.x && peonnegro1.position.z==torreblanca2.position.z)&&
			  (peonnegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro1.position.x==caballoblanco1.position.x && peonnegro1.position.z==caballoblanco1.position.z)&&
			  (peonnegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro1.position.x==caballoblanco2.position.x && peonnegro1.position.z==caballoblanco2.position.z)&&
			  (peonnegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro1.position.x==alfilblanco1.position.x && peonnegro1.position.z==alfilblanco1.position.z)&&
			  (peonnegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro1.position.x==alfilblanco2.position.x && peonnegro1.position.z==alfilblanco2.position.z)&&
			  (peonnegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro1.position.x==reinablanca.position.x && peonnegro1.position.z==reinablanca.position.z)&&
			  (peonnegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro1.position.x==reyblanco.position.x && peonnegro1.position.z==reyblanco.position.z)&&
			  (peonnegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro1.position.x==peonblanco1.position.x && peonnegro1.position.z==peonblanco1.position.z)&&
			  (peonnegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro1.position.x==peonblanco2.position.x && peonnegro1.position.z==peonblanco2.position.z)&&
			  (peonnegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro1.position.x==peonblanco3.position.x && peonnegro1.position.z==peonblanco3.position.z)&&
			  (peonnegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro1.position.x==peonblanco4.position.x && peonnegro1.position.z==peonblanco4.position.z)&&
			  (peonnegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro1.position.x==peonblanco5.position.x && peonnegro1.position.z==peonblanco5.position.z)&&
			  (peonnegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro1.position.x==peonblanco6.position.x && peonnegro1.position.z==peonblanco6.position.z)&&
			  (peonnegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro1.position.x==peonblanco7.position.x && peonnegro1.position.z==peonblanco7.position.z)&&
			  (peonnegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro1.position.x==peonblanco8.position.x && peonnegro1.position.z==peonblanco8.position.z)&&
			  (peonnegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro1.position.x==torrenegra1.position.x && peonnegro1.position.z==torrenegra1.position.z)||
			   (peonnegro1.position.x==peonnegro2.position.x && peonnegro1.position.z==peonnegro2.position.z))||
			   (peonnegro1.position.x==peonnegro3.position.x && peonnegro1.position.z==peonnegro3.position.z))||
			   (peonnegro1.position.x==peonnegro4.position.x && peonnegro1.position.z==peonnegro4.position.z))||
			   (peonnegro1.position.x==peonnegro5.position.x && peonnegro1.position.z==peonnegro5.position.z))||
			   (peonnegro1.position.x==peonnegro6.position.x && peonnegro1.position.z==peonnegro6.position.z))||
			   (peonnegro1.position.x==peonnegro7.position.x && peonnegro1.position.z==peonnegro7.position.z))||
			   (peonnegro1.position.x==peonnegro8.position.x && peonnegro1.position.z==peonnegro8.position.z))||
			   (peonnegro1.position.x==torrenegra2.position.x && peonnegro1.position.z==torrenegra2.position.z))||
			   (peonnegro1.position.x==alfilnegro1.position.x && peonnegro1.position.z==alfilnegro1.position.z))||
			   (peonnegro1.position.x==alfilnegro2.position.x && peonnegro1.position.z==alfilnegro2.position.z))||
			   (peonnegro1.position.x==caballonegro1.position.x && peonnegro1.position.z==caballonegro1.position.z))||
			   (peonnegro1.position.x==caballonegro2.position.x && peonnegro1.position.z==caballonegro2.position.z))||
			   (peonnegro1.position.x==reynegro.position.x && peonnegro1.position.z==reynegro.position.z))||
			   (peonnegro1.position.x==reinanegra.position.x && peonnegro1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro1.position.x=bloquerojo.position.x;peonnegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro1
	          ///////////////////////////////////Peon negro 2//////////////////////////////////////////////////////////////////
		  if (peonnegro2.position.x===bloquerojo.position.x && peonnegro2.position.z===bloquerojo.position.z){
		    var bvpn2=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro2.position.x<bvpn2.position.x)
			  peonnegro2.position.x += this.step;
			else
			  peonnegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro2.position.z<bvpn2.position.z)
			  peonnegro2.position.z += this.step;
			else
			  peonnegro2.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro2.position.x!=bvpn2.position.x || peonnegro2.position.z!=bvpn2.position.z)
			   	{patitasn4.Plcompleta.rotateZ(pIzqinit);
					patitasn4.Prcompleta.rotateZ(pDerinit);
					if (patitasn4.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn4.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn4.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn4.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn4.Plcompleta.rotation.z=0;
				patitasn4.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro2.position.x==torreblanca1.position.x && peonnegro2.position.z==torreblanca1.position.z)&&
			  (peonnegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro2.position.x==torreblanca2.position.x && peonnegro2.position.z==torreblanca2.position.z)&&
			  (peonnegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro2.position.x==caballoblanco1.position.x && peonnegro2.position.z==caballoblanco1.position.z)&&
			  (peonnegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro2.position.x==caballoblanco2.position.x && peonnegro2.position.z==caballoblanco2.position.z)&&
			  (peonnegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro2.position.x==alfilblanco1.position.x && peonnegro2.position.z==alfilblanco1.position.z)&&
			  (peonnegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro2.position.x==alfilblanco2.position.x && peonnegro2.position.z==alfilblanco2.position.z)&&
			  (peonnegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro2.position.x==reinablanca.position.x && peonnegro2.position.z==reinablanca.position.z)&&
			  (peonnegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro2.position.x==reyblanco.position.x && peonnegro2.position.z==reyblanco.position.z)&&
			  (peonnegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro2.position.x==peonblanco1.position.x && peonnegro2.position.z==peonblanco1.position.z)&&
			  (peonnegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro2.position.x==peonblanco2.position.x && peonnegro2.position.z==peonblanco2.position.z)&&
			  (peonnegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro2.position.x==peonblanco3.position.x && peonnegro2.position.z==peonblanco3.position.z)&&
			  (peonnegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro2.position.x==peonblanco4.position.x && peonnegro2.position.z==peonblanco4.position.z)&&
			  (peonnegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro2.position.x==peonblanco5.position.x && peonnegro2.position.z==peonblanco5.position.z)&&
			  (peonnegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro2.position.x==peonblanco6.position.x && peonnegro2.position.z==peonblanco6.position.z)&&
			  (peonnegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro2.position.x==peonblanco7.position.x && peonnegro2.position.z==peonblanco7.position.z)&&
			  (peonnegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro2.position.x==peonblanco8.position.x && peonnegro2.position.z==peonblanco8.position.z)&&
			  (peonnegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro2.position.x==torrenegra1.position.x && peonnegro2.position.z==torrenegra1.position.z)||
			   (peonnegro2.position.x==peonnegro1.position.x && peonnegro2.position.z==peonnegro1.position.z))||
			   (peonnegro2.position.x==peonnegro3.position.x && peonnegro2.position.z==peonnegro3.position.z))||
			   (peonnegro2.position.x==peonnegro4.position.x && peonnegro2.position.z==peonnegro4.position.z))||
			   (peonnegro2.position.x==peonnegro5.position.x && peonnegro2.position.z==peonnegro5.position.z))||
			   (peonnegro2.position.x==peonnegro6.position.x && peonnegro2.position.z==peonnegro6.position.z))||
			   (peonnegro2.position.x==peonnegro7.position.x && peonnegro2.position.z==peonnegro7.position.z))||
			   (peonnegro2.position.x==peonnegro8.position.x && peonnegro2.position.z==peonnegro8.position.z))||
			   (peonnegro2.position.x==torrenegra2.position.x && peonnegro2.position.z==torrenegra2.position.z))||
			   (peonnegro2.position.x==alfilnegro1.position.x && peonnegro2.position.z==alfilnegro1.position.z))||
			   (peonnegro2.position.x==alfilnegro2.position.x && peonnegro2.position.z==alfilnegro2.position.z))||
			   (peonnegro2.position.x==caballonegro1.position.x && peonnegro2.position.z==caballonegro1.position.z))||
			   (peonnegro2.position.x==caballonegro2.position.x && peonnegro2.position.z==caballonegro2.position.z))||
			   (peonnegro2.position.x==reynegro.position.x && peonnegro2.position.z==reynegro.position.z))||
			   (peonnegro2.position.x==reinanegra.position.x && peonnegro2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro2.position.x=bloquerojo.position.x;peonnegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro2
	          ///////////////////////////////////Peon negro 3//////////////////////////////////////////////////////////////////
		  if (peonnegro3.position.x===bloquerojo.position.x && peonnegro3.position.z===bloquerojo.position.z){
		    var bvpn3=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn3,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro3.position.x<bvpn3.position.x)
			  peonnegro3.position.x += this.step;
			else
			  peonnegro3.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro3.position.z<bvpn3.position.z)
			  peonnegro3.position.z += this.step;
			else
			  peonnegro3.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro3.position.x!=bvpn3.position.x || peonnegro3.position.z!=bvpn3.position.z)
			   	{patitasn5.Plcompleta.rotateZ(pIzqinit);
					patitasn5.Prcompleta.rotateZ(pDerinit);
					if (patitasn5.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn5.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn5.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn5.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn5.Plcompleta.rotation.z=0;
				patitasn5.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro3.position.x==torreblanca1.position.x && peonnegro3.position.z==torreblanca1.position.z)&&
			  (peonnegro3.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro3.position.x==torreblanca2.position.x && peonnegro3.position.z==torreblanca2.position.z)&&
			  (peonnegro3.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro3.position.x==caballoblanco1.position.x && peonnegro3.position.z==caballoblanco1.position.z)&&
			  (peonnegro3.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro3.position.x==caballoblanco2.position.x && peonnegro3.position.z==caballoblanco2.position.z)&&
			  (peonnegro3.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro3.position.x==alfilblanco1.position.x && peonnegro3.position.z==alfilblanco1.position.z)&&
			  (peonnegro3.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro3.position.x==alfilblanco2.position.x && peonnegro3.position.z==alfilblanco2.position.z)&&
			  (peonnegro3.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro3.position.x==reinablanca.position.x && peonnegro3.position.z==reinablanca.position.z)&&
			  (peonnegro3.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro3.position.x==reyblanco.position.x && peonnegro3.position.z==reyblanco.position.z)&&
			  (peonnegro3.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro3.position.x==peonblanco1.position.x && peonnegro3.position.z==peonblanco1.position.z)&&
			  (peonnegro3.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro3.position.x==peonblanco2.position.x && peonnegro3.position.z==peonblanco2.position.z)&&
			  (peonnegro3.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro3.position.x==peonblanco3.position.x && peonnegro3.position.z==peonblanco3.position.z)&&
			  (peonnegro3.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro3.position.x==peonblanco4.position.x && peonnegro3.position.z==peonblanco4.position.z)&&
			  (peonnegro3.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro3.position.x==peonblanco5.position.x && peonnegro3.position.z==peonblanco5.position.z)&&
			  (peonnegro3.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro3.position.x==peonblanco6.position.x && peonnegro3.position.z==peonblanco6.position.z)&&
			  (peonnegro3.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro3.position.x==peonblanco7.position.x && peonnegro3.position.z==peonblanco7.position.z)&&
			  (peonnegro3.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro3.position.x==peonblanco8.position.x && peonnegro3.position.z==peonblanco8.position.z)&&
			  (peonnegro3.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro3.position.x==torrenegra1.position.x && peonnegro3.position.z==torrenegra1.position.z)||
			   (peonnegro3.position.x==peonnegro2.position.x && peonnegro3.position.z==peonnegro2.position.z))||
			   (peonnegro3.position.x==peonnegro1.position.x && peonnegro3.position.z==peonnegro1.position.z))||
			   (peonnegro3.position.x==peonnegro4.position.x && peonnegro3.position.z==peonnegro4.position.z))||
			   (peonnegro3.position.x==peonnegro5.position.x && peonnegro3.position.z==peonnegro5.position.z))||
			   (peonnegro3.position.x==peonnegro6.position.x && peonnegro3.position.z==peonnegro6.position.z))||
			   (peonnegro3.position.x==peonnegro7.position.x && peonnegro3.position.z==peonnegro7.position.z))||
			   (peonnegro3.position.x==peonnegro8.position.x && peonnegro3.position.z==peonnegro8.position.z))||
			   (peonnegro3.position.x==torrenegra2.position.x && peonnegro3.position.z==torrenegra2.position.z))||
			   (peonnegro3.position.x==alfilnegro1.position.x && peonnegro3.position.z==alfilnegro1.position.z))||
			   (peonnegro3.position.x==alfilnegro2.position.x && peonnegro3.position.z==alfilnegro2.position.z))||
			   (peonnegro3.position.x==caballonegro1.position.x && peonnegro3.position.z==caballonegro1.position.z))||
			   (peonnegro3.position.x==caballonegro2.position.x && peonnegro3.position.z==caballonegro2.position.z))||
			   (peonnegro3.position.x==reynegro.position.x && peonnegro3.position.z==reynegro.position.z))||
			   (peonnegro3.position.x==reinanegra.position.x && peonnegro3.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro3.position.x=bloquerojo.position.x;peonnegro3.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro3
	          ///////////////////////////////////Peon negro 4//////////////////////////////////////////////////////////////////
		  if (peonnegro4.position.x===bloquerojo.position.x && peonnegro4.position.z===bloquerojo.position.z){
		    var bvpn4=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn4,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro4.position.x<bvpn4.position.x)
			  peonnegro4.position.x += this.step;
			else
			  peonnegro4.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro4.position.z<bvpn4.position.z)
			  peonnegro4.position.z += this.step;
			else
			  peonnegro4.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro4.position.x!=bvpn4.position.x || peonnegro4.position.z!=bvpn4.position.z)
			   	{patitasn6.Plcompleta.rotateZ(pIzqinit);
					patitasn6.Prcompleta.rotateZ(pDerinit);
					if (patitasn6.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn6.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn6.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn6.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn6.Plcompleta.rotation.z=0;
				patitasn6.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro4.position.x==torreblanca1.position.x && peonnegro4.position.z==torreblanca1.position.z)&&
			  (peonnegro4.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro4.position.x==torreblanca2.position.x && peonnegro4.position.z==torreblanca2.position.z)&&
			  (peonnegro4.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro4.position.x==caballoblanco1.position.x && peonnegro4.position.z==caballoblanco1.position.z)&&
			  (peonnegro4.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro4.position.x==caballoblanco2.position.x && peonnegro4.position.z==caballoblanco2.position.z)&&
			  (peonnegro4.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro4.position.x==alfilblanco1.position.x && peonnegro4.position.z==alfilblanco1.position.z)&&
			  (peonnegro4.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro4.position.x==alfilblanco2.position.x && peonnegro4.position.z==alfilblanco2.position.z)&&
			  (peonnegro4.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro4.position.x==reinablanca.position.x && peonnegro4.position.z==reinablanca.position.z)&&
			  (peonnegro4.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro4.position.x==reyblanco.position.x && peonnegro4.position.z==reyblanco.position.z)&&
			  (peonnegro4.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro4.position.x==peonblanco1.position.x && peonnegro4.position.z==peonblanco1.position.z)&&
			  (peonnegro4.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro4.position.x==peonblanco2.position.x && peonnegro4.position.z==peonblanco2.position.z)&&
			  (peonnegro4.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro4.position.x==peonblanco3.position.x && peonnegro4.position.z==peonblanco3.position.z)&&
			  (peonnegro4.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro4.position.x==peonblanco4.position.x && peonnegro4.position.z==peonblanco4.position.z)&&
			  (peonnegro4.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro4.position.x==peonblanco5.position.x && peonnegro4.position.z==peonblanco5.position.z)&&
			  (peonnegro4.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro4.position.x==peonblanco6.position.x && peonnegro4.position.z==peonblanco6.position.z)&&
			  (peonnegro4.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro4.position.x==peonblanco7.position.x && peonnegro4.position.z==peonblanco7.position.z)&&
			  (peonnegro4.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro4.position.x==peonblanco8.position.x && peonnegro4.position.z==peonblanco8.position.z)&&
			  (peonnegro4.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro4.position.x==torrenegra1.position.x && peonnegro4.position.z==torrenegra1.position.z)||
			   (peonnegro4.position.x==peonnegro2.position.x && peonnegro4.position.z==peonnegro2.position.z))||
			   (peonnegro4.position.x==peonnegro3.position.x && peonnegro4.position.z==peonnegro3.position.z))||
			   (peonnegro4.position.x==peonnegro1.position.x && peonnegro4.position.z==peonnegro1.position.z))||
			   (peonnegro4.position.x==peonnegro5.position.x && peonnegro4.position.z==peonnegro5.position.z))||
			   (peonnegro4.position.x==peonnegro6.position.x && peonnegro4.position.z==peonnegro6.position.z))||
			   (peonnegro4.position.x==peonnegro7.position.x && peonnegro4.position.z==peonnegro7.position.z))||
			   (peonnegro4.position.x==peonnegro8.position.x && peonnegro4.position.z==peonnegro8.position.z))||
			   (peonnegro4.position.x==torrenegra2.position.x && peonnegro4.position.z==torrenegra2.position.z))||
			   (peonnegro4.position.x==alfilnegro1.position.x && peonnegro4.position.z==alfilnegro1.position.z))||
			   (peonnegro4.position.x==alfilnegro2.position.x && peonnegro4.position.z==alfilnegro2.position.z))||
			   (peonnegro4.position.x==caballonegro1.position.x && peonnegro4.position.z==caballonegro1.position.z))||
			   (peonnegro4.position.x==caballonegro2.position.x && peonnegro4.position.z==caballonegro2.position.z))||
			   (peonnegro4.position.x==reynegro.position.x && peonnegro4.position.z==reynegro.position.z))||
			   (peonnegro4.position.x==reinanegra.position.x && peonnegro4.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro4.position.x=bloquerojo.position.x;peonnegro4.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro4
	          ///////////////////////////////////Peon negro 5//////////////////////////////////////////////////////////////////
		  if (peonnegro5.position.x===bloquerojo.position.x && peonnegro5.position.z===bloquerojo.position.z){
		    var bvpn5=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn5,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro5.position.x<bvpn5.position.x)
			  peonnegro5.position.x += this.step;
			else
			  peonnegro5.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro5.position.z<bvpn5.position.z)
			  peonnegro5.position.z += this.step;
			else
			  peonnegro5.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro5.position.x!=bvpn5.position.x || peonnegro5.position.z!=bvpn5.position.z)
			   	{patitasn7.Plcompleta.rotateZ(pIzqinit);
					patitasn7.Prcompleta.rotateZ(pDerinit);
					if (patitasn7.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn7.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn7.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn7.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn7.Plcompleta.rotation.z=0;
				patitasn7.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro5.position.x==torreblanca1.position.x && peonnegro5.position.z==torreblanca1.position.z)&&
			  (peonnegro5.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro5.position.x==torreblanca2.position.x && peonnegro5.position.z==torreblanca2.position.z)&&
			  (peonnegro5.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro5.position.x==caballoblanco1.position.x && peonnegro5.position.z==caballoblanco1.position.z)&&
			  (peonnegro5.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro5.position.x==caballoblanco2.position.x && peonnegro5.position.z==caballoblanco2.position.z)&&
			  (peonnegro5.position.y==caballoblanco2.position.y))
			{caballonegro2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro5.position.x==alfilblanco1.position.x && peonnegro5.position.z==alfilblanco1.position.z)&&
			  (peonnegro5.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro5.position.x==alfilblanco2.position.x && peonnegro5.position.z==alfilblanco2.position.z)&&
			  (peonnegro5.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro5.position.x==reinablanca.position.x && peonnegro5.position.z==reinablanca.position.z)&&
			  (peonnegro5.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro5.position.x==reyblanco.position.x && peonnegro5.position.z==reyblanco.position.z)&&
			  (peonnegro5.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro5.position.x==peonblanco1.position.x && peonnegro5.position.z==peonblanco1.position.z)&&
			  (peonnegro5.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro5.position.x==peonblanco2.position.x && peonnegro5.position.z==peonblanco2.position.z)&&
			  (peonnegro5.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro5.position.x==peonblanco3.position.x && peonnegro5.position.z==peonblanco3.position.z)&&
			  (peonnegro5.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro5.position.x==peonblanco4.position.x && peonnegro5.position.z==peonblanco4.position.z)&&
			  (peonnegro5.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro5.position.x==peonblanco5.position.x && peonnegro5.position.z==peonblanco5.position.z)&&
			  (peonnegro5.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro5.position.x==peonblanco6.position.x && peonnegro5.position.z==peonblanco6.position.z)&&
			  (peonnegro5.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro5.position.x==peonblanco7.position.x && peonnegro5.position.z==peonblanco7.position.z)&&
			  (peonnegro5.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro5.position.x==peonblanco8.position.x && peonnegro5.position.z==peonblanco8.position.z)&&
			  (peonnegro5.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro5.position.x==torrenegra1.position.x && peonnegro5.position.z==torrenegra1.position.z)||
			   (peonnegro5.position.x==peonnegro2.position.x && peonnegro5.position.z==peonnegro2.position.z))||
			   (peonnegro5.position.x==peonnegro3.position.x && peonnegro5.position.z==peonnegro3.position.z))||
			   (peonnegro5.position.x==peonnegro4.position.x && peonnegro5.position.z==peonnegro4.position.z))||
			   (peonnegro5.position.x==peonnegro1.position.x && peonnegro5.position.z==peonnegro1.position.z))||
			   (peonnegro5.position.x==peonnegro6.position.x && peonnegro5.position.z==peonnegro6.position.z))||
			   (peonnegro5.position.x==peonnegro7.position.x && peonnegro5.position.z==peonnegro7.position.z))||
			   (peonnegro5.position.x==peonnegro8.position.x && peonnegro5.position.z==peonnegro8.position.z))||
			   (peonnegro5.position.x==torrenegra2.position.x && peonnegro5.position.z==torrenegra2.position.z))||
			   (peonnegro5.position.x==alfilnegro1.position.x && peonnegro5.position.z==alfilnegro1.position.z))||
			   (peonnegro5.position.x==alfilnegro2.position.x && peonnegro5.position.z==alfilnegro2.position.z))||
			   (peonnegro5.position.x==caballonegro1.position.x && peonnegro5.position.z==caballonegro1.position.z))||
			   (peonnegro5.position.x==caballonegro2.position.x && peonnegro5.position.z==caballonegro2.position.z))||
			   (peonnegro5.position.x==reynegro.position.x && peonnegro5.position.z==reynegro.position.z))||
			   (peonnegro5.position.x==reinanegra.position.x && peonnegro5.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro5.position.x=bloquerojo.position.x;peonnegro5.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro5
	          ///////////////////////////////////Peon negro 6//////////////////////////////////////////////////////////////////
		  if (peonnegro6.position.x===bloquerojo.position.x && peonnegro6.position.z===bloquerojo.position.z){
		    var bvpn6=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn6,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro6.position.x<bvpn6.position.x)
			  peonnegro6.position.x += this.step;
			else
			  peonnegro6.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro6.position.z<bvpn6.position.z)
			  peonnegro6.position.z += this.step;
			else
			  peonnegro6.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro6.position.x!=bvpn6.position.x || peonnegro6.position.z!=bvpn6.position.z)
			   	{patitasn8.Plcompleta.rotateZ(pIzqinit);
					patitasn8.Prcompleta.rotateZ(pDerinit);
					if (patitasn8.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn8.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn8.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn8.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn8.Plcompleta.rotation.z=0;
				patitasn8.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro6.position.x==torreblanca1.position.x && peonnegro6.position.z==torreblanca1.position.z)&&
			  (peonnegro6.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro6.position.x==torreblanca2.position.x && peonnegro6.position.z==torreblanca2.position.z)&&
			  (peonnegro6.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro6.position.x==caballoblanco1.position.x && peonnegro6.position.z==caballoblanco1.position.z)&&
			  (peonnegro6.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro6.position.x==caballoblanco2.position.x && peonnegro6.position.z==caballoblanco2.position.z)&&
			  (peonnegro6.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro6.position.x==alfilblanco1.position.x && peonnegro6.position.z==alfilblanco1.position.z)&&
			  (peonnegro6.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro6.position.x==alfilblanco2.position.x && peonnegro6.position.z==alfilblanco2.position.z)&&
			  (peonnegro6.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro6.position.x==reinablanca.position.x && peonnegro6.position.z==reinablanca.position.z)&&
			  (peonnegro6.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro6.position.x==reyblanco.position.x && peonnegro6.position.z==reyblanco.position.z)&&
			  (peonnegro6.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro6.position.x==peonblanco1.position.x && peonnegro6.position.z==peonblanco1.position.z)&&
			  (peonnegro6.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro6.position.x==peonblanco2.position.x && peonnegro6.position.z==peonblanco2.position.z)&&
			  (peonnegro6.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro6.position.x==peonblanco3.position.x && peonnegro6.position.z==peonblanco3.position.z)&&
			  (peonnegro6.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro6.position.x==peonblanco4.position.x && peonnegro6.position.z==peonblanco4.position.z)&&
			  (peonnegro6.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro6.position.x==peonblanco5.position.x && peonnegro6.position.z==peonblanco5.position.z)&&
			  (peonnegro6.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro6.position.x==peonblanco6.position.x && peonnegro6.position.z==peonblanco6.position.z)&&
			  (peonnegro6.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro6.position.x==peonblanco7.position.x && peonnegro6.position.z==peonblanco7.position.z)&&
			  (peonnegro6.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro6.position.x==peonblanco8.position.x && peonnegro6.position.z==peonblanco8.position.z)&&
			  (peonnegro6.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro6.position.x==torrenegra1.position.x && peonnegro6.position.z==torrenegra1.position.z)||
			   (peonnegro6.position.x==peonnegro2.position.x && peonnegro6.position.z==peonnegro2.position.z))||
			   (peonnegro6.position.x==peonnegro3.position.x && peonnegro6.position.z==peonnegro3.position.z))||
			   (peonnegro6.position.x==peonnegro4.position.x && peonnegro6.position.z==peonnegro4.position.z))||
			   (peonnegro6.position.x==peonnegro5.position.x && peonnegro6.position.z==peonnegro5.position.z))||
			   (peonnegro6.position.x==peonnegro1.position.x && peonnegro6.position.z==peonnegro1.position.z))||
			   (peonnegro6.position.x==peonnegro7.position.x && peonnegro6.position.z==peonnegro7.position.z))||
			   (peonnegro6.position.x==peonnegro8.position.x && peonnegro6.position.z==peonnegro8.position.z))||
			   (peonnegro6.position.x==torrenegra2.position.x && peonnegro6.position.z==torrenegra2.position.z))||
			   (peonnegro6.position.x==alfilnegro1.position.x && peonnegro6.position.z==alfilnegro1.position.z))||
			   (peonnegro6.position.x==alfilnegro2.position.x && peonnegro6.position.z==alfilnegro2.position.z))||
			   (peonnegro6.position.x==caballonegro1.position.x && peonnegro6.position.z==caballonegro1.position.z))||
			   (peonnegro6.position.x==caballonegro2.position.x && peonnegro6.position.z==caballonegro2.position.z))||
			   (peonnegro6.position.x==reynegro.position.x && peonnegro6.position.z==reynegro.position.z))||
			   (peonnegro6.position.x==reinanegra.position.x && peonnegro6.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro6.position.x=bloquerojo.position.x;peonnegro6.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro6
	          ///////////////////////////////////Peon negro 7/////////////////////////////////////////////////////////////////
		  if (peonnegro7.position.x===bloquerojo.position.x && peonnegro7.position.z===bloquerojo.position.z){
		    var bvpn7=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn7,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro7.position.x<bvpn7.position.x)
			  peonnegro7.position.x += this.step;
			else
			  peonnegro7.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro7.position.z<bvpn7.position.z)
			  peonnegro7.position.z += this.step;
			else
			  peonnegro7.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro7.position.x!=bvpn7.position.x || peonnegro7.position.z!=bvpn7.position.z)
			   	{patitasn9.Plcompleta.rotateZ(pIzqinit);
					patitasn9.Prcompleta.rotateZ(pDerinit);
					if (patitasn9.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn9.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn9.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn9.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn9.Plcompleta.rotation.z=0;
				patitasn9.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro7.position.x==torreblanca1.position.x && peonnegro7.position.z==torreblanca1.position.z)&&
			  (peonnegro7.position.y==torreblanca1.position.y))
			{torreblanca.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro7.position.x==torreblanca2.position.x && peonnegro7.position.z==torreblanca2.position.z)&&
			  (peonnegro7.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro7.position.x==caballoblanco1.position.x && peonnegro7.position.z==caballoblanco1.position.z)&&
			  (peonnegro7.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro7.position.x==caballoblanco2.position.x && peonnegro7.position.z==caballoblanco2.position.z)&&
			  (peonnegro7.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro7.position.x==alfilblanco1.position.x && peonnegro7.position.z==alfilblanco1.position.z)&&
			  (peonnegro7.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro7.position.x==alfilblanco2.position.x && peonnegro7.position.z==alfilblanco2.position.z)&&
			  (peonnegro7.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro7.position.x==reinablanca.position.x && peonnegro7.position.z==reinablanca.position.z)&&
			  (peonnegro7.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro7.position.x==reyblanco.position.x && peonnegro7.position.z==reyblanco.position.z)&&
			  (peonnegro7.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro7.position.x==peonblanco1.position.x && peonnegro7.position.z==peonblanco1.position.z)&&
			  (peonnegro7.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro7.position.x==peonblanco2.position.x && peonnegro7.position.z==peonblanco2.position.z)&&
			  (peonnegro7.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro7.position.x==peonblanco3.position.x && peonnegro7.position.z==peonblanco3.position.z)&&
			  (peonnegro7.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro7.position.x==peonblanco4.position.x && peonnegro7.position.z==peonblanco4.position.z)&&
			  (peonnegro7.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro7.position.x==peonblanco5.position.x && peonnegro7.position.z==peonblanco5.position.z)&&
			  (peonnegro7.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro7.position.x==peonblanco6.position.x && peonnegro7.position.z==peonblanco6.position.z)&&
			  (peonnegro7.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro7.position.x==peonblanco7.position.x && peonnegro7.position.z==peonblanco7.position.z)&&
			  (peonnegro7.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro7.position.x==peonblanco8.position.x && peonnegro7.position.z==peonblanco8.position.z)&&
			  (peonnegro7.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro7.position.x==torrenegra1.position.x && peonnegro7.position.z==torrenegra1.position.z)||
			   (peonnegro7.position.x==peonnegro2.position.x && peonnegro7.position.z==peonnegro2.position.z))||
			   (peonnegro7.position.x==peonnegro3.position.x && peonnegro7.position.z==peonnegro3.position.z))||
			   (peonnegro7.position.x==peonnegro4.position.x && peonnegro7.position.z==peonnegro4.position.z))||
			   (peonnegro7.position.x==peonnegro5.position.x && peonnegro7.position.z==peonnegro5.position.z))||
			   (peonnegro7.position.x==peonnegro6.position.x && peonnegro7.position.z==peonnegro6.position.z))||
			   (peonnegro7.position.x==peonnegro1.position.x && peonnegro7.position.z==peonnegro1.position.z))||
			   (peonnegro7.position.x==peonnegro8.position.x && peonnegro7.position.z==peonnegro8.position.z))||
			   (peonnegro7.position.x==torrenegra2.position.x && peonnegro7.position.z==torrenegra2.position.z))||
			   (peonnegro7.position.x==alfilnegro1.position.x && peonnegro7.position.z==alfilnegro1.position.z))||
			   (peonnegro7.position.x==alfilnegro2.position.x && peonnegro7.position.z==alfilnegro2.position.z))||
			   (peonnegro7.position.x==caballonegro1.position.x && peonnegro7.position.z==caballonegro1.position.z))||
			   (peonnegro7.position.x==caballonegro2.position.x && peonnegro7.position.z==caballonegro2.position.z))||
			   (peonnegro7.position.x==reynegro.position.x && peonnegro7.position.z==reynegro.position.z))||
			   (peonnegro7.position.x==reinanegra.position.x && peonnegro7.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro7.position.x=bloquerojo.position.x;peonnegro7.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro7
	          ///////////////////////////////////Peon negro 8//////////////////////////////////////////////////////////////////
		  if (peonnegro8.position.x===bloquerojo.position.x && peonnegro8.position.z===bloquerojo.position.z){
		    var bvpn8=bloqueverde;//Bloqueverdetorreblanca1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;			  
		    PeonNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvpn8,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    PeonNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(peonnegro8.position.x<bvpn8.position.x)
			  peonnegro8.position.x += this.step;
			else
			  peonnegro8.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(peonnegro8.position.z<bvpn8.position.z)
			  peonnegro8.position.z += this.step;
			else
			  peonnegro8.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(peonnegro8.position.x!=bvpn8.position.x || peonnegro8.position.z!=bvpn8.position.z)
			   	{patitasn10.Plcompleta.rotateZ(pIzqinit);
					patitasn10.Prcompleta.rotateZ(pDerinit);
					if (patitasn10.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn10.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn10.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn10.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn10.Plcompleta.rotation.z=0;
				patitasn10.Prcompleta.rotation.z=0;				
				}				 
		}
			if((peonnegro8.position.x==torreblanca1.position.x && peonnegro8.position.z==torreblanca1.position.z)&&
			  (peonnegro8.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((peonnegro8.position.x==torreblanca2.position.x && peonnegro8.position.z==torreblanca2.position.z)&&
			  (peonnegro8.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((peonnegro8.position.x==caballoblanco1.position.x && peonnegro8.position.z==caballoblanco1.position.z)&&
			  (peonnegro8.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((peonnegro8.position.x==caballoblanco2.position.x && peonnegro8.position.z==caballoblanco2.position.z)&&
			  (peonnegro8.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((peonnegro8.position.x==alfilblanco1.position.x && peonnegro8.position.z==alfilblanco1.position.z)&&
			  (peonnegro8.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((peonnegro8.position.x==alfilblanco2.position.x && peonnegro8.position.z==alfilblanco2.position.z)&&
			  (peonnegro8.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((peonnegro8.position.x==reinablanca.position.x && peonnegro8.position.z==reinablanca.position.z)&&
			  (peonnegro8.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((peonnegro8.position.x==reyblanco.position.x && peonnegro8.position.z==reyblanco.position.z)&&
			  (peonnegro8.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((peonnegro8.position.x==peonblanco1.position.x && peonnegro8.position.z==peonblanco1.position.z)&&
			  (peonnegro8.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((peonnegro8.position.x==peonblanco2.position.x && peonnegro8.position.z==peonblanco2.position.z)&&
			  (peonnegro8.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((peonnegro8.position.x==peonblanco3.position.x && peonnegro8.position.z==peonblanco3.position.z)&&
			  (peonnegro8.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((peonnegro8.position.x==peonblanco4.position.x && peonnegro8.position.z==peonblanco4.position.z)&&
			  (peonnegro8.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((peonnegro8.position.x==peonblanco5.position.x && peonnegro8.position.z==peonblanco5.position.z)&&
			  (peonnegro8.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((peonnegro8.position.x==peonblanco6.position.x && peonnegro8.position.z==peonblanco6.position.z)&&
			  (peonnegro8.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((peonnegro8.position.x==peonblanco7.position.x && peonnegro8.position.z==peonblanco7.position.z)&&
			  (peonnegro8.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((peonnegro8.position.x==peonblanco8.position.x && peonnegro8.position.z==peonblanco8.position.z)&&
			  (peonnegro8.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((peonnegro8.position.x==torrenegra1.position.x && peonnegro8.position.z==torrenegra1.position.z)||
			   (peonnegro8.position.x==peonnegro2.position.x && peonnegro8.position.z==peonnegro2.position.z))||
			   (peonnegro8.position.x==peonnegro3.position.x && peonnegro8.position.z==peonnegro3.position.z))||
			   (peonnegro8.position.x==peonnegro4.position.x && peonnegro8.position.z==peonnegro4.position.z))||
			   (peonnegro8.position.x==peonnegro5.position.x && peonnegro8.position.z==peonnegro5.position.z))||
			   (peonnegro8.position.x==peonnegro6.position.x && peonnegro8.position.z==peonnegro6.position.z))||
			   (peonnegro8.position.x==peonnegro7.position.x && peonnegro8.position.z==peonnegro7.position.z))||
			   (peonnegro8.position.x==peonnegro1.position.x && peonnegro8.position.z==peonnegro1.position.z))||
			   (peonnegro8.position.x==torrenegra2.position.x && peonnegro8.position.z==torrenegra2.position.z))||
			   (peonnegro8.position.x==alfilnegro1.position.x && peonnegro8.position.z==alfilnegro1.position.z))||
			   (peonnegro8.position.x==alfilnegro2.position.x && peonnegro8.position.z==alfilnegro2.position.z))||
			   (peonnegro8.position.x==caballonegro1.position.x && peonnegro8.position.z==caballonegro1.position.z))||
			   (peonnegro8.position.x==caballonegro2.position.x && peonnegro8.position.z==caballonegro2.position.z))||
			   (peonnegro8.position.x==reynegro.position.x && peonnegro8.position.z==reynegro.position.z))||
			   (peonnegro8.position.x==reinanegra.position.x && peonnegro8.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				peonnegro8.position.x=bloquerojo.position.x;peonnegro8.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if peonnegro8
//////////////////////////////////////////////////////Alfiles///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Alfil Blanco 1//////////////////////////////////////////////////////////////////
		  if (alfilblanco1.position.x===bloquerojo.position.x && alfilblanco1.position.z===bloquerojo.position.z){
		    var bvab1=bloqueverde;//Bloqueverdealfilblanco1
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				AlfilBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvab1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    AlfilBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilblanco1.position.x<bvab1.position.x)
			  alfilblanco1.position.x += this.step;
			else
			  alfilblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilblanco1.position.z<bvab1.position.z)
			  alfilblanco1.position.z += this.step;
			else
			  alfilblanco1.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(alfilblanco1.position.x!=bvab1.position.x || alfilblanco1.position.z!=bvab1.position.z)
			   	{patitas11.Plcompleta.rotateZ(pIzqinit);
					patitas11.Prcompleta.rotateZ(pDerinit);
					if (patitas11.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas11.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas11.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas11.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas11.Plcompleta.rotation.z=0;
				patitas11.Prcompleta.rotation.z=0;				
				}				 
		}
			if((alfilblanco1.position.x==torrenegra1.position.x && alfilblanco1.position.z==torrenegra1.position.z)&&
			  (alfilblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((alfilblanco1.position.x==torrenegra2.position.x && alfilblanco1.position.z==torrenegra2.position.z)&&
			  (alfilblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((alfilblanco1.position.x==caballonegro1.position.x && alfilblanco1.position.z==caballonegro1.position.z)&&
			  (alfilblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((alfilblanco1.position.x==caballonegro2.position.x && alfilblanco1.position.z==caballonegro2.position.z)&&
			  (alfilblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((alfilblanco1.position.x==alfilnegro1.position.x && alfilblanco1.position.z==alfilnegro1.position.z)&&
			  (alfilblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((alfilblanco1.position.x==alfilnegro2.position.x && alfilblanco1.position.z==alfilnegro2.position.z)&&
			  (alfilblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((alfilblanco1.position.x==reinanegra.position.x && alfilblanco1.position.z==reinanegra.position.z)&&
			  (alfilblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((alfilblanco1.position.x==reynegro.position.x && alfilblanco1.position.z==reynegro.position.z)&&
			  (alfilblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((alfilblanco1.position.x==peonnegro1.position.x && alfilblanco1.position.z==peonnegro1.position.z)&&
			  (alfilblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((alfilblanco1.position.x==peonnegro2.position.x && alfilblanco1.position.z==peonnegro2.position.z)&&
			  (alfilblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((alfilblanco1.position.x==peonnegro3.position.x && alfilblanco1.position.z==peonnegro3.position.z)&&
			  (alfilblanco1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((alfilblanco1.position.x==peonnegro4.position.x && alfilblanco1.position.z==peonnegro4.position.z)&&
			  (alfilblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((alfilblanco1.position.x==peonnegro5.position.x && alfilblanco1.position.z==peonnegro5.position.z)&&
			  (alfilblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((alfilblanco1.position.x==peonnegro6.position.x && alfilblanco1.position.z==peonnegro6.position.z)&&
			  (alfilblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((alfilblanco1.position.x==peonnegro7.position.x && alfilblanco1.position.z==peonnegro7.position.z)&&
			  (alfilblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((alfilblanco1.position.x==peonnegro8.position.x && alfilblanco1.position.z==peonnegro8.position.z)&&
			  (alfilblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilblanco1.position.x==peonblanco1.position.x && alfilblanco1.position.z==peonblanco1.position.z)||
			   (alfilblanco1.position.x==peonblanco2.position.x && alfilblanco1.position.z==peonblanco2.position.z))||
			   (alfilblanco1.position.x==peonblanco3.position.x && alfilblanco1.position.z==peonblanco3.position.z))||
			   (alfilblanco1.position.x==peonblanco4.position.x && alfilblanco1.position.z==peonblanco4.position.z))||
			   (alfilblanco1.position.x==peonblanco5.position.x && alfilblanco1.position.z==peonblanco5.position.z))||
			   (alfilblanco1.position.x==peonblanco6.position.x && alfilblanco1.position.z==peonblanco6.position.z))||
			   (alfilblanco1.position.x==peonblanco7.position.x && alfilblanco1.position.z==peonblanco7.position.z))||
			   (alfilblanco1.position.x==peonblanco8.position.x && alfilblanco1.position.z==peonblanco8.position.z))||
			   (alfilblanco1.position.x==torreblanca2.position.x && alfilblanco1.position.z==torreblanca2.position.z))||
			   (alfilblanco1.position.x==torreblanca1.position.x && alfilblanco1.position.z==torreblanca1.position.z))||
			   (alfilblanco1.position.x==alfilblanco2.position.x && alfilblanco1.position.z==alfilblanco2.position.z))||
			   (alfilblanco1.position.x==caballoblanco1.position.x && alfilblanco1.position.z==caballoblanco1.position.z))||
			   (alfilblanco1.position.x==caballoblanco2.position.x && alfilblanco1.position.z==caballoblanco2.position.z))||
			   (alfilblanco1.position.x==reyblanco.position.x && alfilblanco1.position.z==reyblanco.position.z))||
			   (alfilblanco1.position.x==reinablanca.position.x && alfilblanco1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilblanco1.position.x=bloquerojo.position.x;alfilblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilblanco1
	          /////////////////////////////////Alfil blanco 2//////////////////////////////////////////////////////////////////
		  if (alfilblanco2.position.x===bloquerojo.position.x && alfilblanco2.position.z===bloquerojo.position.z){
		    var bvab2=bloqueverde;//Bloqueverdealfilblanco2
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				AlfilBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvab2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    AlfilBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilblanco2.position.x<bvab2.position.x)
			  alfilblanco2.position.x += this.step;
			else
			  alfilblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilblanco2.position.z<bvab2.position.z)
			  alfilblanco2.position.z += this.step;
			else
			  alfilblanco2.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(alfilblanco2.position.x!=bvab2.position.x || alfilblanco2.position.z!=bvab2.position.z)
			   	{patitas11.Plcompleta.rotateZ(pIzqinit);
					patitas12.Prcompleta.rotateZ(pDerinit);
					if (patitas12.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas12.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas12.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas12.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas12.Plcompleta.rotation.z=0;
				patitas12.Prcompleta.rotation.z=0;				
				}				 
		}
			if((alfilblanco2.position.x==torrenegra1.position.x && alfilblanco2.position.z==torrenegra1.position.z)&&
			  (alfilblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((alfilblanco2.position.x==torrenegra2.position.x && alfilblanco2.position.z==torrenegra2.position.z)&&
			  (alfilblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((alfilblanco2.position.x==caballonegro1.position.x && alfilblanco2.position.z==caballonegro1.position.z)&&
			  (alfilblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((alfilblanco2.position.x==caballonegro2.position.x && alfilblanco2.position.z==caballonegro2.position.z)&&
			  (alfilblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((alfilblanco2.position.x==alfilnegro1.position.x && alfilblanco2.position.z==alfilnegro1.position.z)&&
			  (alfilblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((alfilblanco2.position.x==alfilnegro2.position.x && alfilblanco2.position.z==alfilnegro2.position.z)&&
			  (alfilblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((alfilblanco2.position.x==reinanegra.position.x && alfilblanco2.position.z==reinanegra.position.z)&&
			  (alfilblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((alfilblanco2.position.x==reynegro.position.x && alfilblanco2.position.z==reynegro.position.z)&&
			  (alfilblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((alfilblanco2.position.x==peonnegro1.position.x && alfilblanco2.position.z==peonnegro1.position.z)&&
			  (alfilblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((alfilblanco2.position.x==peonnegro2.position.x && alfilblanco2.position.z==peonnegro2.position.z)&&
			  (alfilblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((alfilblanco2.position.x==peonnegro3.position.x && alfilblanco2.position.z==peonnegro3.position.z)&&
			  (alfilblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((alfilblanco2.position.x==peonnegro4.position.x && alfilblanco2.position.z==peonnegro4.position.z)&&
			  (alfilblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((alfilblanco2.position.x==peonnegro5.position.x && alfilblanco2.position.z==peonnegro5.position.z)&&
			  (alfilblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((alfilblanco2.position.x==peonnegro6.position.x && alfilblanco2.position.z==peonnegro6.position.z)&&
			  (alfilblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((alfilblanco2.position.x==peonnegro7.position.x && alfilblanco2.position.z==peonnegro7.position.z)&&
			  (alfilblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((alfilblanco2.position.x==peonnegro8.position.x && alfilblanco2.position.z==peonnegro8.position.z)&&
			  (alfilblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilblanco2.position.x==peonblanco1.position.x && alfilblanco2.position.z==peonblanco1.position.z)||
			   (alfilblanco2.position.x==peonblanco2.position.x && alfilblanco2.position.z==peonblanco2.position.z))||
			   (alfilblanco2.position.x==peonblanco3.position.x && alfilblanco2.position.z==peonblanco3.position.z))||
			   (alfilblanco2.position.x==peonblanco4.position.x && alfilblanco2.position.z==peonblanco4.position.z))||
			   (alfilblanco2.position.x==peonblanco5.position.x && alfilblanco2.position.z==peonblanco5.position.z))||
			   (alfilblanco2.position.x==peonblanco6.position.x && alfilblanco2.position.z==peonblanco6.position.z))||
			   (alfilblanco2.position.x==peonblanco7.position.x && alfilblanco2.position.z==peonblanco7.position.z))||
			   (alfilblanco2.position.x==peonblanco8.position.x && alfilblanco2.position.z==peonblanco8.position.z))||
			   (alfilblanco2.position.x==torreblanca2.position.x && alfilblanco2.position.z==torreblanca2.position.z))||
			   (alfilblanco2.position.x==torreblanca1.position.x && alfilblanco2.position.z==torreblanca1.position.z))||
			   (alfilblanco2.position.x==alfilblanco1.position.x && alfilblanco2.position.z==alfilblanco1.position.z))||
			   (alfilblanco2.position.x==caballoblanco1.position.x && alfilblanco2.position.z==caballoblanco1.position.z))||
			   (alfilblanco2.position.x==caballoblanco2.position.x && alfilblanco2.position.z==caballoblanco2.position.z))||
			   (alfilblanco2.position.x==reyblanco.position.x && alfilblanco2.position.z==reyblanco.position.z))||
			   (alfilblanco2.position.x==reinablanca.position.x && alfilblanco2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilblanco2.position.x=bloquerojo.position.x;alfilblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilblanco2
	          /////////////////////////////////Alfil Negro 1///////////////////////////////////////////////////////////////////
		  if (alfilnegro1.position.x===bloquerojo.position.x && alfilnegro1.position.z===bloquerojo.position.z){
		    var bvan1 = bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;		    
				AlfilNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvan1,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    AlfilNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilnegro1.position.x<bvan1.position.x)
			  alfilnegro1.position.x += this.step;
			else
			  alfilnegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilnegro1.position.z<bvan1.position.z)
			  alfilnegro1.position.z += this.step;
			else
			  alfilnegro1.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(alfilnegro1.position.x!=bvan1.position.x || alfilnegro1.position.z!=bvan1.position.z)
			   	{patitasn11.Plcompleta.rotateZ(pIzqinit);
					patitasn11.Prcompleta.rotateZ(pDerinit);
					if (patitasn11.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn11.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn11.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn11.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn11.Plcompleta.rotation.z=0;
				patitasn11.Prcompleta.rotation.z=0;				
				}				 
		}
			if((alfilnegro1.position.x==torreblanca1.position.x && alfilnegro1.position.z==torreblanca1.position.z)&&
			  (alfilnegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((alfilnegro1.position.x==torreblanca2.position.x && alfilnegro1.position.z==torreblanca2.position.z)&&
			  (alfilnegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((alfilnegro1.position.x==caballoblanco1.position.x && alfilnegro1.position.z==caballoblanco1.position.z)&&
			  (alfilnegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((alfilnegro1.position.x==caballoblanco2.position.x && alfilnegro1.position.z==caballoblanco2.position.z)&&
			  (alfilnegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((alfilnegro1.position.x==alfilblanco1.position.x && alfilnegro1.position.z==alfilblanco1.position.z)&&
			  (alfilnegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((alfilnegro1.position.x==alfilblanco2.position.x && alfilnegro1.position.z==alfilblanco2.position.z)&&
			  (alfilnegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas11);}
		        if((alfilnegro1.position.x==reinablanca.position.x && alfilnegro1.position.z==reinablanca.position.z)&&
			  (alfilnegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((alfilnegro1.position.x==reyblanco.position.x && alfilnegro1.position.z==reyblanco.position.z)&&
			  (alfilnegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((alfilnegro1.position.x==peonblanco1.position.x && alfilnegro1.position.z==peonblanco1.position.z)&&
			  (alfilnegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((alfilnegro1.position.x==peonblanco2.position.x && alfilnegro1.position.z==peonblanco2.position.z)&&
			  (alfilnegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((alfilnegro1.position.x==peonblanco3.position.x && alfilnegro1.position.z==peonblanco3.position.z)&&
			  (alfilnegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((alfilnegro1.position.x==peonblanco4.position.x && alfilnegro1.position.z==peonblanco4.position.z)&&
			  (alfilnegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((alfilnegro1.position.x==peonblanco5.position.x && alfilnegro1.position.z==peonblanco5.position.z)&&
			  (alfilnegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((alfilnegro1.position.x==peonblanco6.position.x && alfilnegro1.position.z==peonblanco6.position.z)&&
			  (alfilnegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((alfilnegro1.position.x==peonblanco7.position.x && alfilnegro1.position.z==peonblanco7.position.z)&&
			  (alfilnegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((alfilnegro1.position.x==peonblanco8.position.x && alfilnegro1.position.z==peonblanco8.position.z)&&
			  (alfilnegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilnegro1.position.x==peonnegro1.position.x && alfilnegro1.position.z==peonnegro1.position.z)||
			   (alfilnegro1.position.x==peonnegro2.position.x && alfilnegro1.position.z==peonnegro2.position.z))||
			   (alfilnegro1.position.x==peonnegro3.position.x && alfilnegro1.position.z==peonnegro3.position.z))||
			   (alfilnegro1.position.x==peonnegro4.position.x && alfilnegro1.position.z==peonnegro4.position.z))||
			   (alfilnegro1.position.x==peonnegro5.position.x && alfilnegro1.position.z==peonnegro5.position.z))||
			   (alfilnegro1.position.x==peonnegro6.position.x && alfilnegro1.position.z==peonnegro6.position.z))||
			   (alfilnegro1.position.x==peonnegro7.position.x && alfilnegro1.position.z==peonnegro7.position.z))||
			   (alfilnegro1.position.x==peonnegro8.position.x && alfilnegro1.position.z==peonnegro8.position.z))||
			   (alfilnegro1.position.x==torrenegra2.position.x && alfilnegro1.position.z==torrenegra2.position.z))||
			   (alfilnegro1.position.x==torrenegra1.position.x && alfilnegro1.position.z==torrenegra1.position.z))||
			   (alfilnegro1.position.x==alfilnegro2.position.x && alfilnegro1.position.z==alfilnegro2.position.z))||
			   (alfilnegro1.position.x==caballonegro1.position.x && alfilnegro1.position.z==caballonegro1.position.z))||
			   (alfilnegro1.position.x==caballonegro2.position.x && alfilnegro1.position.z==caballonegro2.position.z))||
			   (alfilnegro1.position.x==reynegro.position.x && alfilnegro1.position.z==reynegro.position.z))||
			   (alfilnegro1.position.x==reinanegra.position.x && alfilnegro1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilnegro1.position.x=bloquerojo.position.x;alfilnegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilnegro1
		  ////////////////////////////Alfil Negro 2///////////////////////////////////////////////////////////////////  
		  if (alfilnegro2.position.x===bloquerojo.position.x && alfilnegro2.position.z===bloquerojo.position.z){
		    var bvan2 = bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				AlfilNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvan2,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    AlfilNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(alfilnegro2.position.x<bvan2.position.x)
			  alfilnegro2.position.x += this.step;
			else
			  alfilnegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(alfilnegro2.position.z<bvan2.position.z)
			  alfilnegro2.position.z += this.step;
			else
			  alfilnegro2.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(alfilnegro2.position.x!=bvan2.position.x || alfilnegro2.position.z!=bvan2.position.z)
			   	{patitasn12.Plcompleta.rotateZ(pIzqinit);
					patitasn12.Prcompleta.rotateZ(pDerinit);
					if (patitasn12.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn12.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn12.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn12.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn12.Plcompleta.rotation.z=0;
				patitasn12.Prcompleta.rotation.z=0;				
				}				 
		}
			if((alfilnegro2.position.x==torreblanca1.position.x && alfilnegro2.position.z==torreblanca1.position.z)&&
			  (alfilnegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((alfilnegro2.position.x==torreblanca2.position.x && alfilnegro2.position.z==torreblanca2.position.z)&&
			  (alfilnegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((alfilnegro2.position.x==caballoblanco1.position.x && alfilnegro2.position.z==caballoblanco1.position.z)&&
			  (alfilnegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((alfilnegro2.position.x==caballoblanco2.position.x && alfilnegro2.position.z==caballoblanco2.position.z)&&
			  (alfilnegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((alfilnegro2.position.x==alfilblanco1.position.x && alfilnegro2.position.z==alfilblanco1.position.z)&&
			  (alfilnegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((alfilnegro2.position.x==alfilblanco2.position.x && alfilnegro2.position.z==alfilblanco2.position.z)&&
			  (alfilnegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((alfilnegro2.position.x==reinablanca.position.x && alfilnegro2.position.z==reinablanca.position.z)&&
			  (alfilnegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((alfilnegro2.position.x==reyblanco.position.x && alfilnegro2.position.z==reyblanco.position.z)&&
			  (alfilnegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((alfilnegro2.position.x==peonblanco1.position.x && alfilnegro2.position.z==peonblanco1.position.z)&&
			  (alfilnegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((alfilnegro2.position.x==peonblanco2.position.x && alfilnegro2.position.z==peonblanco2.position.z)&&
			  (alfilnegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((alfilnegro2.position.x==peonblanco3.position.x && alfilnegro2.position.z==peonblanco3.position.z)&&
			  (alfilnegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((alfilnegro2.position.x==peonblanco4.position.x && alfilnegro2.position.z==peonblanco4.position.z)&&
			  (alfilnegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((alfilnegro2.position.x==peonblanco5.position.x && alfilnegro2.position.z==peonblanco5.position.z)&&
			  (alfilnegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((alfilnegro2.position.x==peonblanco6.position.x && alfilnegro2.position.z==peonblanco6.position.z)&&
			  (alfilnegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((alfilnegro2.position.x==peonblanco7.position.x && alfilnegro2.position.z==peonblanco7.position.z)&&
			  (alfilnegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((alfilnegro2.position.x==peonblanco8.position.x && alfilnegro2.position.z==peonblanco8.position.z)&&
			  (alfilnegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((alfilnegro2.position.x==peonnegro1.position.x && alfilnegro2.position.z==peonnegro1.position.z)||
			   (alfilnegro2.position.x==peonnegro2.position.x && alfilnegro2.position.z==peonnegro2.position.z))||
			   (alfilnegro2.position.x==peonnegro3.position.x && alfilnegro2.position.z==peonnegro3.position.z))||
			   (alfilnegro2.position.x==peonnegro4.position.x && alfilnegro2.position.z==peonnegro4.position.z))||
			   (alfilnegro2.position.x==peonnegro5.position.x && alfilnegro2.position.z==peonnegro5.position.z))||
			   (alfilnegro2.position.x==peonnegro6.position.x && alfilnegro2.position.z==peonnegro6.position.z))||
			   (alfilnegro2.position.x==peonnegro7.position.x && alfilnegro2.position.z==peonnegro7.position.z))||
			   (alfilnegro2.position.x==peonnegro8.position.x && alfilnegro2.position.z==peonnegro8.position.z))||
			   (alfilnegro2.position.x==torrenegra2.position.x && alfilnegro2.position.z==torrenegra2.position.z))||
			   (alfilnegro2.position.x==alfilnegro1.position.x && alfilnegro2.position.z==alfilnegro1.position.z))||
			   (alfilnegro2.position.x==torrenegra1.position.x && alfilnegro2.position.z==torrenegra1.position.z))||
			   (alfilnegro2.position.x==caballonegro1.position.x && alfilnegro2.position.z==caballonegro1.position.z))||
			   (alfilnegro2.position.x==caballonegro2.position.x && alfilnegro2.position.z==caballonegro2.position.z))||
			   (alfilnegro2.position.x==reynegro.position.x && alfilnegro2.position.z==reynegro.position.z))||
			   (alfilnegro2.position.x==reinanegra.position.x && alfilnegro2.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				alfilnegro2.position.x=bloquerojo.position.x;alfilnegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if alfilnegro2
//////////////////////////////////////////////////////Reinas///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Reina Blanca//////////////////////////////////////////////////////////////////
		  if (reinablanca.position.x===bloquerojo.position.x && reinablanca.position.z===bloquerojo.position.z){
		    var bvrab=bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				ReinaBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvrab,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    ReinaBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reinablanca.position.x<bvrab.position.x)
			  reinablanca.position.x += this.step;
			else
			  reinablanca.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reinablanca.position.z<bvrab.position.z)
			  reinablanca.position.z += this.step;
			else
			  reinablanca.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(reinablanca.position.x!=bvrab.position.x || reinablanca.position.z!=bvrab.position.z)
			   	{patitas15.Plcompleta.rotateZ(pIzqinit);
					patitas15.Prcompleta.rotateZ(pDerinit);
					if (patitas15.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas15.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas15.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas15.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas15.Plcompleta.rotation.z=0;
				patitas15.Prcompleta.rotation.z=0;				
				}				 
		}
			if((reinablanca.position.x==torrenegra1.position.x && reinablanca.position.z==torrenegra1.position.z)&&
			  (reinablanca.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((reinablanca.position.x==torrenegra2.position.x && reinablanca.position.z==torrenegra2.position.z)&&
			  (reinablanca.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((reinablanca.position.x==caballonegro1.position.x && reinablanca.position.z==caballonegro1.position.z)&&
			  (reinablanca.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((reinablanca.position.x==caballonegro2.position.x && reinablanca.position.z==caballonegro2.position.z)&&
			  (reinablanca.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((reinablanca.position.x==alfilnegro1.position.x && reinablanca.position.z==alfilnegro1.position.z)&&
			  (reinablanca.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((reinablanca.position.x==alfilnegro2.position.x && reinablanca.position.z==alfilnegro2.position.z)&&
			  (reinablanca.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((reinablanca.position.x==reinanegra.position.x && reinablanca.position.z==reinanegra.position.z)&&
			  (reinablanca.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((reinablanca.position.x==reynegro.position.x && reinablanca.position.z==reynegro.position.z)&&
			  (reinablanca.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((reinablanca.position.x==peonnegro1.position.x && reinablanca.position.z==peonnegro1.position.z)&&
			  (reinablanca.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((reinablanca.position.x==peonnegro2.position.x && reinablanca.position.z==peonnegro2.position.z)&&
			  (reinablanca.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((reinablanca.position.x==peonnegro3.position.x && reinablanca.position.z==peonnegro3.position.z)&&
			  (reinablanca.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((reinablanca.position.x==peonnegro4.position.x && reinablanca.position.z==peonnegro4.position.z)&&
			  (reinablanca.position.y==peonnegro4.position.y))
			{peonengro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((reinablanca.position.x==peonnegro5.position.x && reinablanca.position.z==peonnegro5.position.z)&&
			  (reinablanca.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((reinablanca.position.x==peonnegro6.position.x && reinablanca.position.z==peonnegro6.position.z)&&
			  (reinablanca.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((reinablanca.position.x==peonnegro7.position.x && reinablanca.position.z==peonnegro7.position.z)&&
			  (reinablanca.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((reinablanca.position.x==peonnegro8.position.x && reinablanca.position.z==peonnegro8.position.z)&&
			  (reinablanca.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reinablanca.position.x==peonblanco1.position.x && reinablanca.position.z==peonblanco1.position.z)||
			   (reinablanca.position.x==peonblanco2.position.x && reinablanca.position.z==peonblanco2.position.z))||
			   (reinablanca.position.x==peonblanco3.position.x && reinablanca.position.z==peonblanco3.position.z))||
			   (reinablanca.position.x==peonblanco4.position.x && reinablanca.position.z==peonblanco4.position.z))||
			   (reinablanca.position.x==peonblanco5.position.x && reinablanca.position.z==peonblanco5.position.z))||
			   (reinablanca.position.x==peonblanco6.position.x && reinablanca.position.z==peonblanco6.position.z))||
			   (reinablanca.position.x==peonblanco7.position.x && reinablanca.position.z==peonblanco7.position.z))||
			   (reinablanca.position.x==peonblanco8.position.x && reinablanca.position.z==peonblanco8.position.z))||
			   (reinablanca.position.x==torreblanca2.position.x && reinablanca.position.z==torreblanca2.position.z))||
			   (reinablanca.position.x==torreblanca1.position.x && reinablanca.position.z==torreblanca1.position.z))||
			   (reinablanca.position.x==alfilblanco2.position.x && reinablanca.position.z==alfilblanco2.position.z))||
			   (reinablanca.position.x==caballoblanco1.position.x && reinablanca.position.z==caballoblanco1.position.z))||
			   (reinablanca.position.x==caballoblanco2.position.x && reinablanca.position.z==caballoblanco2.position.z))||
			   (reinablanca.position.x==reyblanco.position.x && reinablanca.position.z==reyblanco.position.z))||
			   (reinablanca.position.x==alfilblanco1.position.x && reinablanca.position.z==alfilblanco1.position.z)){
				alert("No puedes comer piezas del mismo color");
				reinablanca.position.x=bloquerojo.position.x;reinablanca.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reinablanca
	          /////////////////////////////////Reina Negra//////////////////////////////////////////////////////////////////
		  if (reinanegra.position.x===bloquerojo.position.x && reinanegra.position.z===bloquerojo.position.z){
		    var bvran=bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				ReinaNegra.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvran,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    ReinaNegra.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reinanegra.position.x<bvran.position.x)
			  reinanegra.position.x += this.step;
			else
			  reinanegra.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reinanegra.position.z<bvran.position.z)
			  reinanegra.position.z += this.step;
			else
			  reinanegra.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(reinanegra.position.x!=bvran.position.x || reinanegra.position.z!=bvran.position.z)
			   	{patitasn15.Plcompleta.rotateZ(pIzqinit);
					patitasn15.Prcompleta.rotateZ(pDerinit);
					if (patitasn15.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn15.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn15.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn15.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn15.Plcompleta.rotation.z=0;
				patitasn15.Prcompleta.rotation.z=0;				
				}				 
		}
			if((reinanegra.position.x==torreblanca1.position.x && reinanegra.position.z==torreblanca1.position.z)&&
			  (reinanegra.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((reinanegra.position.x==torreblanca2.position.x && reinanegra.position.z==torreblanca2.position.z)&&
			  (reinanegra.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((reinanegra.position.x==caballoblanco1.position.x && reinanegra.position.z==caballoblanco1.position.z)&&
			  (reinanegra.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((reinanegra.position.x==caballoblanco2.position.x && reinanegra.position.z==caballoblanco2.position.z)&&
			  (reinanegra.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((reinanegra.position.x==alfilblanco1.position.x && reinanegra.position.z==alfilblanco1.position.z)&&
			  (reinanegra.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((reinanegra.position.x==alfilblanco2.position.x && reinanegra.position.z==alfilblanco2.position.z)&&
			  (reinanegra.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((reinanegra.position.x==reinablanca.position.x && reinanegra.position.z==reinablanca.position.z)&&
			  (reinanegra.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((reinanegra.position.x==reyblanco.position.x && reinanegra.position.z==reyblanco.position.z)&&
			  (reinanegra.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((reinanegra.position.x==peonblanco1.position.x && reinanegra.position.z==peonblanco1.position.z)&&
			  (reinanegra.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((reinanegra.position.x==peonblanco2.position.x && reinanegra.position.z==peonblanco2.position.z)&&
			  (reinanegra.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((reinanegra.position.x==peonblanco3.position.x && reinanegra.position.z==peonblanco3.position.z)&&
			  (reinanegra.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((reinanegra.position.x==peonblanco4.position.x && reinanegra.position.z==peonblanco4.position.z)&&
			  (reinanegra.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((reinanegra.position.x==peonblanco5.position.x && reinanegra.position.z==peonblanco5.position.z)&&
			  (reinanegra.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((reinanegra.position.x==peonblanco6.position.x && reinanegra.position.z==peonblanco6.position.z)&&
			  (reinanegra.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((reinanegra.position.x==peonblanco7.position.x && reinanegra.position.z==peonblanco7.position.z)&&
			  (reinanegra.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((reinanegra.position.x==peonblanco8.position.x && reinanegra.position.z==peonblanco8.position.z)&&
			  (reinanegra.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reinanegra.position.x==peonnegro1.position.x && reinanegra.position.z==peonnegro1.position.z)||
			   (reinanegra.position.x==peonnegro2.position.x && reinanegra.position.z==peonnegro2.position.z))||
			   (reinanegra.position.x==peonnegro3.position.x && reinanegra.position.z==peonnegro3.position.z))||
			   (reinanegra.position.x==peonnegro4.position.x && reinanegra.position.z==peonnegro4.position.z))||
			   (reinanegra.position.x==peonnegro5.position.x && reinanegra.position.z==peonnegro5.position.z))||
			   (reinanegra.position.x==peonnegro6.position.x && reinanegra.position.z==peonnegro6.position.z))||
			   (reinanegra.position.x==peonnegro7.position.x && reinanegra.position.z==peonnegro7.position.z))||
			   (reinanegra.position.x==peonnegro8.position.x && reinanegra.position.z==peonnegro8.position.z))||
			   (reinanegra.position.x==torrenegra2.position.x && reinanegra.position.z==torrenegra2.position.z))||
			   (reinanegra.position.x==alfilnegro1.position.x && reinanegra.position.z==alfilnegro1.position.z))||
			   (reinanegra.position.x==alfilnegro2.position.x && reinanegra.position.z==alfilnegro2.position.z))||
			   (reinanegra.position.x==caballonegro1.position.x && reinanegra.position.z==caballonegro1.position.z))||
			   (reinanegra.position.x==caballonegro2.position.x && reinanegra.position.z==caballonegro2.position.z))||
			   (reinanegra.position.x==reynegro.position.x && reinanegra.position.z==reynegro.position.z))||
			   (reinanegra.position.x==torrenegra1.position.x && reinanegra.position.z==torrenegra1.position.z)){
				alert("No puedes comer piezas del mismo color");
				reinanegra.position.x=bloquerojo.position.x;reinanegra.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reinanegra
//////////////////////////////////////////////////////Reyes///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Rey Blanco//////////////////////////////////////////////////////////////////
		  if (reyblanco.position.x===bloquerojo.position.x && reyblanco.position.z===bloquerojo.position.z){
		    var bvryb=bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
		    ReyBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvryb,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    ReyBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reyblanco.position.x<bvryb.position.x)
			  reyblanco.position.x += this.step;
			else
			  reyblanco.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reyblanco.position.z<bvryb.position.z)
			  reyblanco.position.z += this.step;
			else
			  reyblanco.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(reyblanco.position.x!=bvryb.position.x || reyblanco.position.z!=bvryb.position.z)
			   	{patitas16.Plcompleta.rotateZ(pIzqinit);
					patitas16.Prcompleta.rotateZ(pDerinit);
					if (patitas16.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas16.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas16.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas16.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas16.Plcompleta.rotation.z=0;
				patitas16.Prcompleta.rotation.z=0;				
				}				 
		}
			if((reyblanco.position.x==torrenegra1.position.x && reyblanco.position.z==torrenegra1.position.z)&&
			  (reyblanco.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((reyblanco.position.x==torrenegra2.position.x && reyblanco.position.z==torrenegra2.position.z)&&
			  (reyblanco.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((reyblanco.position.x==caballonegro1.position.x && reyblanco.position.z==caballonegro1.position.z)&&
			  (reyblanco.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((reyblanco.position.x==caballonegro2.position.x && reyblanco.position.z==caballonegro2.position.z)&&
			  (reyblanco.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((reyblanco.position.x==alfilnegro1.position.x && reyblanco.position.z==alfilnegro1.position.z)&&
			  (reyblanco.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((reyblanco.position.x==alfilnegro2.position.x && reyblanco.position.z==alfilnegro2.position.z)&&
			  (reyblanco.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((reyblanco.position.x==reinanegra.position.x && reyblanco.position.z==reinanegra.position.z)&&
			  (reyblanco.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((reyblanco.position.x==reynegro.position.x && reyblanco.position.z==reynegro.position.z)&&
			  (reyblanco.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((reyblanco.position.x==peonnegro1.position.x && reyblanco.position.z==peonnegro1.position.z)&&
			  (reyblanco.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((reyblanco.position.x==peonnegro2.position.x && reyblanco.position.z==peonnegro2.position.z)&&
			  (reyblanco.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((reyblanco.position.x==peonnegro3.position.x && reyblanco.position.z==peonnegro3.position.z)&&
			  (reyblanco.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((reyblanco.position.x==peonnegro4.position.x && reyblanco.position.z==peonnegro4.position.z)&&
			  (reyblanco.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((reyblanco.position.x==peonnegro5.position.x && reyblanco.position.z==peonnegro5.position.z)&&
			  (reyblanco.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((reyblanco.position.x==peonnegro6.position.x && reyblanco.position.z==peonnegro6.position.z)&&
			  (reyblanco.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((reyblanco.position.x==peonnegro7.position.x && reyblanco.position.z==peonnegro7.position.z)&&
			  (reyblanco.position.y==peonnegro7.position.y))
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((reyblanco.position.x==peonnegro8.position.x && reyblanco.position.z==peonnegro8.position.z)&&
			  (reyblanco.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reyblanco.position.x==peonblanco1.position.x && reyblanco.position.z==peonblanco1.position.z)||
			   (reyblanco.position.x==peonblanco2.position.x && reyblanco.position.z==peonblanco2.position.z))||
			   (reyblanco.position.x==peonblanco3.position.x && reyblanco.position.z==peonblanco3.position.z))||
			   (reyblanco.position.x==peonblanco4.position.x && reyblanco.position.z==peonblanco4.position.z))||
			   (reyblanco.position.x==peonblanco5.position.x && reyblanco.position.z==peonblanco5.position.z))||
			   (reyblanco.position.x==peonblanco6.position.x && reyblanco.position.z==peonblanco6.position.z))||
			   (reyblanco.position.x==peonblanco7.position.x && reyblanco.position.z==peonblanco7.position.z))||
			   (reyblanco.position.x==peonblanco8.position.x && reyblanco.position.z==peonblanco8.position.z))||
			   (reyblanco.position.x==torreblanca2.position.x && reyblanco.position.z==torreblanca2.position.z))||
			   (reyblanco.position.x==torreblanca1.position.x && reyblanco.position.z==torreblanca1.position.z))||
			   (reyblanco.position.x==alfilblanco2.position.x && reyblanco.position.z==alfilblanco2.position.z))||
			   (reyblanco.position.x==caballoblanco1.position.x && reyblanco.position.z==caballoblanco1.position.z))||
			   (reyblanco.position.x==caballoblanco2.position.x && reyblanco.position.z==caballoblanco2.position.z))||
			   (reyblanco.position.x==alfilblanco1.position.x && reyblanco.position.z==alfilblanco1.position.z))||
			   (reyblanco.position.x==reinablanca.position.x && reyblanco.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				reyblanco.position.x=bloquerojo.position.x;reyblanco.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reyblanco
	          /////////////////////////////////Rey Negro//////////////////////////////////////////////////////////////////
		  if (reynegro.position.x===bloquerojo.position.x && reynegro.position.z===bloquerojo.position.z){
		    var bvryn=bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				ReyNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvryn,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    ReyNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(reynegro.position.x<bvryn.position.x)
			  reynegro.position.x += this.step;
			else
			  reynegro.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(reynegro.position.z<bvryn.position.z)
			  reynegro.position.z += this.step;
			else
			  reynegro.position.z -= this.step;
		      }//fin if posicion z
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(reynegro.position.x!=bvryn.position.x || reynegro.position.z!=bvryn.position.z)
			   	{patitasn16.Plcompleta.rotateZ(pIzqinit);
					patitasn16.Prcompleta.rotateZ(pDerinit);
					if (patitasn16.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn16.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn16.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn16.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn16.Plcompleta.rotation.z=0;
				patitasn16.Prcompleta.rotation.z=0;				
				}				 
		}
			if((reynegro.position.x==torreblanca1.position.x && reynegro.position.z==torreblanca1.position.z)&&
			  (reynegro.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((reynegro.position.x==torreblanca2.position.x && reynegro.position.z==torreblanca2.position.z)&&
			  (reynegro.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((reynegro.position.x==caballoblanco1.position.x && reynegro.position.z==caballoblanco1.position.z)&&
			  (reynegro.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((reynegro.position.x==caballoblanco2.position.x && reynegro.position.z==caballoblanco2.position.z)&&
			  (reynegro.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((reynegro.position.x==alfilblanco1.position.x && reynegro.position.z==alfilblanco1.position.z)&&
			  (reynegro.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((reynegro.position.x==alfilblanco2.position.x && reynegro.position.z==alfilblanco2.position.z)&&
			  (reynegro.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((reynegro.position.x==reinablanca.position.x && reynegro.position.z==reinablanca.position.z)&&
			  (reynegro.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((reynegro.position.x==reyblanco.position.x && reynegro.position.z==reyblanco.position.z)&&
			  (reynegro.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((reynegro.position.x==peonblanco1.position.x && reynegro.position.z==peonblanco1.position.z)&&
			  (reynegro.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((reynegro.position.x==peonblanco2.position.x && reynegro.position.z==peonblanco2.position.z)&&
			  (reynegro.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((reynegro.position.x==peonblanco3.position.x && reynegro.position.z==peonblanco3.position.z)&&
			  (reynegro.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((reynegro.position.x==peonblanco4.position.x && reynegro.position.z==peonblanco4.position.z)&&
			  (reynegro.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((reynegro.position.x==peonblanco5.position.x && reynegro.position.z==peonblanco5.position.z)&&
			  (reynegro.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((reynegro.position.x==peonblanco6.position.x && reynegro.position.z==peonblanco6.position.z)&&
			  (reynegro.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((reynegro.position.x==peonblanco7.position.x && reynegro.position.z==peonblanco7.position.z)&&
			  (reynegro.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((reynegro.position.x==peonblanco8.position.x && reynegro.position.z==peonblanco8.position.z)&&
			  (reynegro.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((reynegro.position.x==peonnegro1.position.x && reynegro.position.z==peonnegro1.position.z)||
			   (reynegro.position.x==peonnegro2.position.x && reynegro.position.z==peonnegro2.position.z))||
			   (reynegro.position.x==peonnegro3.position.x && reynegro.position.z==peonnegro3.position.z))||
			   (reynegro.position.x==peonnegro4.position.x && reynegro.position.z==peonnegro4.position.z))||
			   (reynegro.position.x==peonnegro5.position.x && reynegro.position.z==peonnegro5.position.z))||
			   (reynegro.position.x==peonnegro6.position.x && reynegro.position.z==peonnegro6.position.z))||
			   (reynegro.position.x==peonnegro7.position.x && reynegro.position.z==peonnegro7.position.z))||
			   (reynegro.position.x==peonnegro8.position.x && reynegro.position.z==peonnegro8.position.z))||
			   (reynegro.position.x==torrenegra2.position.x && reynegro.position.z==torrenegra2.position.z))||
			   (reynegro.position.x==alfilnegro1.position.x && reynegro.position.z==alfilnegro1.position.z))||
			   (reynegro.position.x==alfilnegro2.position.x && reynegro.position.z==alfilnegro2.position.z))||
			   (reynegro.position.x==caballonegro1.position.x && reynegro.position.z==caballonegro1.position.z))||
			   (reynegro.position.x==caballonegro2.position.x && reynegro.position.z==caballonegro2.position.z))||
			   (reynegro.position.x==torrenegra1.position.x && reynegro.position.z==torrenegra1.position.z))||
			   (reynegro.position.x==reinanegra.position.x && reynegro.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				reynegro.position.x=bloquerojo.position.x;reynegro.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if reynegro
//////////////////////////////////////////////////////Caballos///////////////////////////////////////////////////////////////////////////
	          ///////////////////////////////////Caballo Blanco 1//////////////////////////////////////////////////////////////////
		  if (caballoblanco1.position.x===bloquerojo.position.x && caballoblanco1.position.z===bloquerojo.position.z){
		    var bvcb1=bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				CaballoBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvcb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    CaballoBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballoblanco1.position.x<bvcb1.position.x)
			  caballoblanco1.position.x += this.step;
			else
			  caballoblanco1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballoblanco1.position.z<bvcb1.position.z)
			  caballoblanco1.position.z += this.step;
			else
			  caballoblanco1.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballoblanco1.position.x!=bvcb1.position.x || caballoblanco1.position.z!=bvcb1.position.z)
			   {caballoblanco1.position.y += this.step/2;}
			else
			   {caballoblanco1.position.y = 12;}
		      }//fin if posicion y
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(caballoblanco1.position.x!=bvcb1.position.x || caballoblanco1.position.z!=bvcb1.position.z)
			   	{patitas13.Plcompleta.rotateZ(pIzqinit);
					patitas13.Prcompleta.rotateZ(pDerinit);
					if (patitas13.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas13.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas13.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas13.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas13.Plcompleta.rotation.z=0;
				patitas13.Prcompleta.rotation.z=0;				
				}				 
		}
			if((caballoblanco1.position.x==torrenegra1.position.x && caballoblanco1.position.z==torrenegra1.position.z)&&
			  (caballoblanco1.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((caballoblanco1.position.x==torrenegra2.position.x && caballoblanco1.position.z==torrenegra2.position.z)&&
			  (caballoblanco1.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((caballoblanco1.position.x==caballonegro1.position.x && caballoblanco1.position.z==caballonegro1.position.z)&&
			  (caballoblanco1.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((caballoblanco1.position.x==caballonegro2.position.x && caballoblanco1.position.z==caballonegro2.position.z)&&
			  (caballoblanco1.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((caballoblanco1.position.x==alfilnegro1.position.x && caballoblanco1.position.z==alfilnegro1.position.z)&&
			  (caballoblanco1.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((caballoblanco1.position.x==alfilnegro2.position.x && caballoblanco1.position.z==alfilnegro2.position.z)&&
			  (caballoblanco1.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((caballoblanco1.position.x==reinanegra.position.x && caballoblanco1.position.z==reinanegra.position.z)&&
			  (caballoblanco1.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((caballoblanco1.position.x==reynegro.position.x && caballoblanco1.position.z==reynegro.position.z)&&
			  (caballoblanco1.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((caballoblanco1.position.x==peonnegro1.position.x && caballoblanco1.position.z==peonnegro1.position.z)&&
			  (caballoblanco1.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((caballoblanco1.position.x==peonnegro2.position.x && caballoblanco1.position.z==peonnegro2.position.z)&&
			  (caballoblanco1.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((caballoblanco1.position.x==peonnegro3.position.x && caballoblanco1.position.z==peonnegro3.position.z)&&
			  (caballoblanco1.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((caballoblanco1.position.x==peonnegro4.position.x && caballoblanco1.position.z==peonnegro4.position.z)&&
			  (caballoblanco1.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((caballoblanco1.position.x==peonnegro5.position.x && caballoblanco1.position.z==peonnegro5.position.z)&&
			  (caballoblanco1.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((caballoblanco1.position.x==peonnegro6.position.x && caballoblanco1.position.z==peonnegro6.position.z)&&
			  (caballoblanco1.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((caballoblanco1.position.x==peonnegro7.position.x && caballoblanco1.position.z==peonnegro7.position.z)&&
			  (caballoblanco1.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((caballoblanco1.position.x==peonnegro8.position.x && caballoblanco1.position.z==peonnegro8.position.z)&&
			  (caballoblanco1.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
                        if ((((((((((((((((caballoblanco1.position.x==peonblanco1.position.x && caballoblanco1.position.z==peonblanco1.position.z)||
			   (caballoblanco1.position.x==peonblanco2.position.x && caballoblanco1.position.z==peonblanco2.position.z))||
			   (caballoblanco1.position.x==peonblanco3.position.x && caballoblanco1.position.z==peonblanco3.position.z))||
			   (caballoblanco1.position.x==peonblanco4.position.x && caballoblanco1.position.z==peonblanco4.position.z))||
			   (caballoblanco1.position.x==peonblanco5.position.x && caballoblanco1.position.z==peonblanco5.position.z))||
			   (caballoblanco1.position.x==peonblanco6.position.x && caballoblanco1.position.z==peonblanco6.position.z))||
			   (caballoblanco1.position.x==peonblanco7.position.x && caballoblanco1.position.z==peonblanco7.position.z))||
			   (caballoblanco1.position.x==peonblanco8.position.x && caballoblanco1.position.z==peonblanco8.position.z))||
			   (caballoblanco1.position.x==torreblanca2.position.x && caballoblanco1.position.z==torreblanca2.position.z))||
			   (caballoblanco1.position.x==torreblanca1.position.x && caballoblanco1.position.z==torreblanca1.position.z))||
			   (caballoblanco1.position.x==alfilblanco2.position.x && caballoblanco1.position.z==alfilblanco2.position.z))||
			   (caballoblanco1.position.x==alfilblanco1.position.x && caballoblanco1.position.z==alfilblanco1.position.z))||
			   (caballoblanco1.position.x==caballoblanco2.position.x && caballoblanco1.position.z==caballoblanco2.position.z))||
			   (caballoblanco1.position.x==reyblanco.position.x && caballoblanco1.position.z==reyblanco.position.z))||
			   (caballoblanco1.position.x==reinablanca.position.x && caballoblanco1.position.z==reinablanca.position.z))&&
			   (caballoblanco1.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco1.position.x=bloquerojo.position.x;caballoblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco1
	          /////////////////////////////////Caballo blanco 2//////////////////////////////////////////////////////////////////
		  if (caballoblanco2.position.x===bloquerojo.position.x && caballoblanco2.position.z===bloquerojo.position.z){
		    var bvcb2=bloqueverde;//Bloqueverdealfilblanco2
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				CaballoBlanco.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvcb2,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    CaballoBlanco.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballoblanco2.position.x<bvcb2.position.x)
			  caballoblanco2.position.x += this.step;
			else
			  caballoblanco2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballoblanco2.position.z<bvcb2.position.z)
			  caballoblanco2.position.z += this.step;
			else
			  caballoblanco2.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballoblanco2.position.x!=bvcb2.position.x || caballoblanco2.position.z!=bvcb2.position.z)
			   {caballoblanco2.position.y += this.step/2;}
			else
			   {caballoblanco2.position.y = 12;}
		      }//fin if posicion y
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(caballoblanco2.position.x!=bvcb2.position.x || caballoblanco2.position.z!=bvcb2.position.z)
			   	{patitas14.Plcompleta.rotateZ(pIzqinit);
					patitas14.Prcompleta.rotateZ(pDerinit);
					if (patitas14.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitas14.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitas14.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitas14.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitas14.Plcompleta.rotation.z=0;
				patitas14.Prcompleta.rotation.z=0;				
				}				 
		}
			if((caballoblanco2.position.x==torrenegra1.position.x && caballoblanco2.position.z==torrenegra1.position.z)&&
			  (caballoblanco2.position.y==torrenegra1.position.y))
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);escena.remove(patitasn1);}
		        if((caballoblanco2.position.x==torrenegra2.position.x && caballoblanco2.position.z==torrenegra2.position.z)&&
			  (caballoblanco2.position.y==torrenegra2.position.y))
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);escena.remove(patitasn2);}
		        if((caballoblanco2.position.x==caballonegro1.position.x && caballoblanco2.position.z==caballonegro1.position.z)&&
			  (caballoblanco2.position.y==caballonegro1.position.y))
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);escena.remove(patitasn13);}
		        if((caballoblanco2.position.x==caballonegro2.position.x && caballoblanco2.position.z==caballonegro2.position.z)&&
			  (caballoblanco2.position.y==caballonegro2.position.y))
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);escena.remove(patitasn14);}
		        if((caballoblanco2.position.x==alfilnegro1.position.x && caballoblanco2.position.z==alfilnegro1.position.z)&&
			  (caballoblanco2.position.y==alfilnegro1.position.y))
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);escena.remove(patitasn11);}
		        if((caballoblanco2.position.x==alfilnegro2.position.x && caballoblanco2.position.z==alfilnegro2.position.z)&&
			  (caballoblanco2.position.y==alfilnegro2.position.y))
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);escena.remove(patitasn12);}
		        if((caballoblanco2.position.x==reinanegra.position.x && caballoblanco2.position.z==reinanegra.position.z)&&
			  (caballoblanco2.position.y==reinanegra.position.y))
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);escena.remove(patitasn15);}
		        if((caballoblanco2.position.x==reynegro.position.x && caballoblanco2.position.z==reynegro.position.z)&&
			  (caballoblanco2.position.y==reynegro.position.y))
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);escena.remove(patitasn16);}
		        if((caballoblanco2.position.x==peonnegro1.position.x && caballoblanco2.position.z==peonnegro1.position.z)&&
			  (caballoblanco2.position.y==peonnegro1.position.y))
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);escena.remove(patitasn3);}
		        if((caballoblanco2.position.x==peonnegro2.position.x && caballoblanco2.position.z==peonnegro2.position.z)&&
			  (caballoblanco2.position.y==peonnegro2.position.y))
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);escena.remove(patitasn4);}
		        if((caballoblanco2.position.x==peonnegro3.position.x && caballoblanco2.position.z==peonnegro3.position.z)&&
			  (caballoblanco2.position.y==peonnegro3.position.y))
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);escena.remove(patitasn5);}
		        if((caballoblanco2.position.x==peonnegro4.position.x && caballoblanco2.position.z==peonnegro4.position.z)&&
			  (caballoblanco2.position.y==peonnegro4.position.y))
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);escena.remove(patitasn6);}
		        if((caballoblanco2.position.x==peonnegro5.position.x && caballoblanco2.position.z==peonnegro5.position.z)&&
			  (caballoblanco2.position.y==peonnegro5.position.y))
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);escena.remove(patitasn7);}
		        if((caballoblanco2.position.x==peonnegro6.position.x && caballoblanco2.position.z==peonnegro6.position.z)&&
			  (caballoblanco2.position.y==peonnegro6.position.y))
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);escena.remove(patitasn8);}
		        if((caballoblanco2.position.x==peonnegro7.position.x && caballoblanco2.position.z==peonnegro7.position.z)&&
			  (caballoblanco2.position.y==peonnegro7.position.y))
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);escena.remove(patitasn9);}
		        if((caballoblanco2.position.x==peonnegro8.position.x && caballoblanco2.position.z==peonnegro8.position.z)&&
			  (caballoblanco2.position.y==peonnegro8.position.y))
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);escena.remove(patitasn10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballoblanco2.position.x==peonblanco1.position.x && caballoblanco2.position.z==peonblanco1.position.z)||
			   (caballoblanco2.position.x==peonblanco2.position.x && caballoblanco2.position.z==peonblanco2.position.z))||
			   (caballoblanco2.position.x==peonblanco3.position.x && caballoblanco2.position.z==peonblanco3.position.z))||
			   (caballoblanco2.position.x==peonblanco4.position.x && caballoblanco2.position.z==peonblanco4.position.z))||
			   (caballoblanco2.position.x==peonblanco5.position.x && caballoblanco2.position.z==peonblanco5.position.z))||
			   (caballoblanco2.position.x==peonblanco6.position.x && caballoblanco2.position.z==peonblanco6.position.z))||
			   (caballoblanco2.position.x==peonblanco7.position.x && caballoblanco2.position.z==peonblanco7.position.z))||
			   (caballoblanco2.position.x==peonblanco8.position.x && caballoblanco2.position.z==peonblanco8.position.z))||
			   (caballoblanco2.position.x==torreblanca2.position.x && caballoblanco2.position.z==torreblanca2.position.z))||
			   (caballoblanco2.position.x==torreblanca1.position.x && caballoblanco2.position.z==torreblanca1.position.z))||
			   (caballoblanco2.position.x==alfilblanco2.position.x && caballoblanco2.position.z==alfilblanco2.position.z))||
			   (caballoblanco2.position.x==caballoblanco1.position.x && caballoblanco2.position.z==caballoblanco1.position.z))||
			   (caballoblanco2.position.x==alfilblanco1.position.x && caballoblanco2.position.z==alfilblanco1.position.z))||
			   (caballoblanco2.position.x==reyblanco.position.x && caballoblanco2.position.z==reyblanco.position.z))||
			   (caballoblanco2.position.x==reinablanca.position.x && caballoblanco2.position.z==reinablanca.position.z))&&
				(caballoblanco2.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco2.position.x=bloquerojo.position.x;caballoblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco2
	          /////////////////////////////////Caballo Negro 1///////////////////////////////////////////////////////////////////
		  if (caballonegro1.position.x===bloquerojo.position.x && caballonegro1.position.z===bloquerojo.position.z){
		    var bvcn1 = bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				CaballoNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvcn1,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    CaballoNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballonegro1.position.x<bvcn1.position.x)
			  caballonegro1.position.x += this.step;
			else
			  caballonegro1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballonegro1.position.z<bvcn1.position.z)
			  caballonegro1.position.z += this.step;
			else
			  caballonegro1.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballonegro1.position.x!=bvcn1.position.x || caballonegro1.position.z!=bvcn1.position.z)
			   {caballonegro1.position.y += this.step/2;}
			else
			   {caballonegro1.position.y = 12;}
		      }//fin if posicion y
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(caballonegro1.position.x!=bvcn1.position.x || caballonegro1.position.z!=bvcn1.position.z)
			   	{patitasn13.Plcompleta.rotateZ(pIzqinit);
					patitasn13.Prcompleta.rotateZ(pDerinit);
					if (patitasn13.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn13.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn13.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn13.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn13.Plcompleta.rotation.z=0;
				patitasn13.Prcompleta.rotation.z=0;				
				}				 
		}
			if((caballonegro1.position.x==torreblanca1.position.x && caballonegro1.position.z==torreblanca1.position.z)&&
			  (caballonegro1.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((caballonegro1.position.x==torreblanca2.position.x && caballonegro1.position.z==torreblanca2.position.z)&&
			  (caballonegro1.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((caballonegro1.position.x==caballoblanco1.position.x && caballonegro1.position.z==caballoblanco1.position.z)&&
			  (caballonegro1.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((caballonegro1.position.x==caballoblanco2.position.x && caballonegro1.position.z==caballoblanco2.position.z)&&
			  (caballonegro1.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((caballonegro1.position.x==alfilblanco1.position.x && caballonegro1.position.z==alfilblanco1.position.z)&&
			  (caballonegro1.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((caballonegro1.position.x==alfilblanco2.position.x && caballonegro1.position.z==alfilblanco2.position.z)&&
			  (caballonegro1.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((caballonegro1.position.x==reinablanca.position.x && caballonegro1.position.z==reinablanca.position.z)&&
			  (caballonegro1.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((caballonegro1.position.x==reyblanco.position.x && caballonegro1.position.z==reyblanco.position.z)&&
			  (caballonegro1.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((caballonegro1.position.x==peonblanco1.position.x && caballonegro1.position.z==peonblanco1.position.z)&&
			  (caballonegro1.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((caballonegro1.position.x==peonblanco2.position.x && caballonegro1.position.z==peonblanco2.position.z)&&
			  (caballonegro1.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((caballonegro1.position.x==peonblanco3.position.x && caballonegro1.position.z==peonblanco3.position.z)&&
			  (caballonegro1.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((caballonegro1.position.x==peonblanco4.position.x && caballonegro1.position.z==peonblanco4.position.z)&&
			  (caballonegro1.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((caballonegro1.position.x==peonblanco5.position.x && caballonegro1.position.z==peonblanco5.position.z)&&
			  (caballonegro1.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((caballonegro1.position.x==peonblanco6.position.x && caballonegro1.position.z==peonblanco6.position.z)&&
			  (caballonegro1.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((caballonegro1.position.x==peonblanco7.position.x && caballonegro1.position.z==peonblanco7.position.z)&&
			  (caballonegro1.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((caballonegro1.position.x==peonblanco8.position.x && caballonegro1.position.z==peonblanco8.position.z)&&
			  (caballonegro1.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballonegro1.position.x==peonnegro1.position.x && caballonegro1.position.z==peonnegro1.position.z)||
			   (caballonegro1.position.x==peonnegro2.position.x && caballonegro1.position.z==peonnegro2.position.z))||
			   (caballonegro1.position.x==peonnegro3.position.x && caballonegro1.position.z==peonnegro3.position.z))||
			   (caballonegro1.position.x==peonnegro4.position.x && caballonegro1.position.z==peonnegro4.position.z))||
			   (caballonegro1.position.x==peonnegro5.position.x && caballonegro1.position.z==peonnegro5.position.z))||
			   (caballonegro1.position.x==peonnegro6.position.x && caballonegro1.position.z==peonnegro6.position.z))||
			   (caballonegro1.position.x==peonnegro7.position.x && caballonegro1.position.z==peonnegro7.position.z))||
			   (caballonegro1.position.x==peonnegro8.position.x && caballonegro1.position.z==peonnegro8.position.z))||
			   (caballonegro1.position.x==torrenegra2.position.x && caballonegro1.position.z==torrenegra2.position.z))||
			   (caballonegro1.position.x==alfilnegro1.position.x && caballonegro1.position.z==alfilnegro1.position.z))||
			   (caballonegro1.position.x==alfilnegro2.position.x && caballonegro1.position.z==alfilnegro2.position.z))||
			   (caballonegro1.position.x==torrenegra1.position.x && caballonegro1.position.z==torrenegra1.position.z))||
			   (caballonegro1.position.x==caballonegro2.position.x && caballonegro1.position.z==caballonegro2.position.z))||
			   (caballonegro1.position.x==reynegro.position.x && caballonegro1.position.z==reynegro.position.z))||
			   (caballonegro1.position.x==reinanegra.position.x && caballonegro1.position.z==reinanegra.position.z))&&
				(caballonegro1.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballonegro1.position.x=bloquerojo.position.x;caballonegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballonegro1
		  ////////////////////////////Caballo Negro 2///////////////////////////////////////////////////////////////////  
		  if (caballonegro2.position.x===bloquerojo.position.x && caballonegro2.position.z===bloquerojo.position.z){
		    var bvcn2 = bloqueverde;
			  var pIzqinit=0.05;
				var pDerinit=-0.05;
				CaballoNegro.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo2 = this.sensor.intersectObjects(bvcn2,true);
		      if(obstaculo2.length > 0)
		        {this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    CaballoNegro.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(caballonegro2.position.x<bvcn2.position.x)
			  caballonegro2.position.x += this.step;
			else
			  caballonegro2.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(caballonegro2.position.z<bvcn2.position.z)
			  caballonegro2.position.z += this.step;
			else
			  caballonegro2.position.z -= this.step;
		      }//fin if posicion z
		      if (this.colision!=1){
			if(caballonegro2.position.x!=bvcn2.position.x || caballonegro2.position.z!=bvcn2.position.z)
			   {caballonegro2.position.y += this.step/2;}
			else
			   {caballonegro2.position.y = 12;}
		      }//fin if posicion y
//Movimiento de las patrullas
		 if (this.colision!=1){
				if(caballonegro2.position.x!=bvcn2.position.x || caballonegro2.position.z!=bvcn2.position.z)
			   	{patitasn14.Plcompleta.rotateZ(pIzqinit);
					patitasn14.Prcompleta.rotateZ(pDerinit);
					if (patitasn14.Plcompleta.rotation.z>0.785398){
					pIzqinit=-pIzqinit;
					}
					else if(patitasn14.Plcompleta.rotation.z<-0.785398){
						pIzqinit=-pIzqinit;}
					if(patitasn14.Prcompleta.rotation.z<-0.785398){
					pDerinit=-pDerinit;				
				  	}
					else if(patitasn14.Prcompleta.rotation.z>0.785398) {
					pDerinit=-pDerinit;
					}
				}
				else{
				patitasn14.Plcompleta.rotation.z=0;
				patitasn14.Prcompleta.rotation.z=0;				
				}				 
		}
			if((caballonegro2.position.x==torreblanca1.position.x && caballonegro2.position.z==torreblanca1.position.z)&&
			  (caballonegro2.position.y==torreblanca1.position.y))
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);escena.remove(patitas1);}
		        if((caballonegro2.position.x==torreblanca2.position.x && caballonegro2.position.z==torreblanca2.position.z)&&
			  (caballonegro2.position.y==torreblanca2.position.y))
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);escena.remove(patitas2);}
		        if((caballonegro2.position.x==caballoblanco1.position.x && caballonegro2.position.z==caballoblanco1.position.z)&&
			  (caballonegro2.position.y==caballoblanco1.position.y))
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);escena.remove(patitas13);}
		        if((caballonegro2.position.x==caballoblanco2.position.x && caballonegro2.position.z==caballoblanco2.position.z)&&
			  (caballonegro2.position.y==caballoblanco2.position.y))
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);escena.remove(patitas14);}
		        if((caballonegro2.position.x==alfilblanco1.position.x && caballonegro2.position.z==alfilblanco1.position.z)&&
			  (caballonegro2.position.y==alfilblanco1.position.y))
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);escena.remove(patitas11);}
		        if((caballonegro2.position.x==alfilblanco2.position.x && caballonegro2.position.z==alfilblanco2.position.z)&&
			  (caballonegro2.position.y==alfilblanco2.position.y))
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);escena.remove(patitas12);}
		        if((caballonegro2.position.x==reinablanca.position.x && caballonegro2.position.z==reinablanca.position.z)&&
			  (caballonegro2.position.y==reinablanca.position.y))
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);escena.remove(patitas15);}
		        if((caballonegro2.position.x==reyblanco.position.x && caballonegro2.position.z==reyblanco.position.z)&&
			  (caballonegro2.position.y==reyblanco.position.y))
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);escena.remove(patitas16);}
		        if((caballonegro2.position.x==peonblanco1.position.x && caballonegro2.position.z==peonblanco1.position.z)&&
			  (caballonegro2.position.y==peonblanco1.position.y))
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);escena.remove(patitas3);}
		        if((caballonegro2.position.x==peonblanco2.position.x && caballonegro2.position.z==peonblanco2.position.z)&&
			  (caballonegro2.position.y==peonblanco2.position.y))
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);escena.remove(patitas4);}
		        if((caballonegro2.position.x==peonblanco3.position.x && caballonegro2.position.z==peonblanco3.position.z)&&
			  (caballonegro2.position.y==peonblanco3.position.y))
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);escena.remove(patitas5);}
		        if((caballonegro2.position.x==peonblanco4.position.x && caballonegro2.position.z==peonblanco4.position.z)&&
			  (caballonegro2.position.y==peonblanco4.position.y))
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);escena.remove(patitas6);}
		        if((caballonegro2.position.x==peonblanco5.position.x && caballonegro2.position.z==peonblanco5.position.z)&&
			  (caballonegro2.position.y==peonblanco5.position.y))
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);escena.remove(patitas7);}
		        if((caballonegro2.position.x==peonblanco6.position.x && caballonegro2.position.z==peonblanco6.position.z)&&
			  (caballonegro2.position.y==peonblanco6.position.y))
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);escena.remove(patitas8);}
		        if((caballonegro2.position.x==peonblanco7.position.x && caballonegro2.position.z==peonblanco7.position.z)&&
			  (caballonegro2.position.y==peonblanco7.position.y))
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);escena.remove(patitas9);}
		        if((caballonegro2.position.x==peonblanco8.position.x && caballonegro2.position.z==peonblanco8.position.z)&&
			  (caballonegro2.position.y==peonblanco8.position.y))
			{peonblanco8.position.y=100;eonblanco8.position.x=100;escena.remove(peonblanco8);escena.remove(patitas10);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if ((((((((((((((((caballonegro2.position.x==peonnegro1.position.x && caballonegro2.position.z==peonnegro1.position.z)||
			   (caballonegro2.position.x==peonnegro2.position.x && caballonegro2.position.z==peonnegro2.position.z))||
			   (caballonegro2.position.x==peonnegro3.position.x && caballonegro2.position.z==peonnegro3.position.z))||
			   (caballonegro2.position.x==peonnegro4.position.x && caballonegro2.position.z==peonnegro4.position.z))||
			   (caballonegro2.position.x==peonnegro5.position.x && caballonegro2.position.z==peonnegro5.position.z))||
			   (caballonegro2.position.x==peonnegro6.position.x && caballonegro2.position.z==peonnegro6.position.z))||
			   (caballonegro2.position.x==peonnegro7.position.x && caballonegro2.position.z==peonnegro7.position.z))||
			   (caballonegro2.position.x==peonnegro8.position.x && caballonegro2.position.z==peonnegro8.position.z))||
			   (caballonegro2.position.x==torrenegra2.position.x && caballonegro2.position.z==torrenegra2.position.z))||
			   (caballonegro2.position.x==alfilnegro1.position.x && caballonegro2.position.z==alfilnegro1.position.z))||
			   (caballonegro2.position.x==alfilnegro2.position.x && caballonegro2.position.z==alfilnegro2.position.z))||
			   (caballonegro2.position.x==caballonegro1.position.x && caballonegro2.position.z==caballonegro1.position.z))||
			   (caballonegro2.position.x==torrenegra1.position.x && caballonegro2.position.z==torrenegra1.position.z))||
			   (caballonegro2.position.x==reynegro.position.x && caballonegro2.position.z==reynegro.position.z))||
			   (caballonegro2.position.x==reinanegra.position.x && caballonegro2.position.z==reinanegra.position.z))&&
				(caballonegro2.position.y==4.5)){
				alert("No puedes comer piezas del mismo color");
				caballonegro2.position.x=bloquerojo.position.x;caballonegro2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballonegro2
                bandera=0;
		}//fin if bandera
////////////////////////////////////////Movimientos de piezas/////////////////////////////////////////////////////////////////////////
		else{
		   escena.remove(bloquerojo);
		   bloquerojo = new BloqueRojo(bloqueazul.position.x,0,bloqueazul.position.z);
		   escena.add(bloquerojo);
		   //////////////////////////////////////Torres////////////////////////////////////////////////////////////////////
		   if ((((torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z)||
		         (torreblanca2.position.x===bloquerojo.position.x && torreblanca2.position.z===bloquerojo.position.z))||
		         (torrenegra1.position.x===bloquerojo.position.x && torrenegra1.position.z===bloquerojo.position.z))||
		         (torrenegra2.position.x===bloquerojo.position.x && torrenegra2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x,0,-i*10);
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(i*10,0,bloquerojo.position.z);
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Torres
                   /////////////////////////////////Peones////////////////////////////////////////////////////////////////////////
		   if ((((((((peonblanco1.position.x===bloquerojo.position.x && peonblanco1.position.z===bloquerojo.position.z)||
			     (peonblanco2.position.x===bloquerojo.position.x && peonblanco2.position.z===bloquerojo.position.z))||
			     (peonblanco3.position.x===bloquerojo.position.x && peonblanco3.position.z===bloquerojo.position.z))||
			     (peonblanco4.position.x===bloquerojo.position.x && peonblanco4.position.z===bloquerojo.position.z))||
			     (peonblanco5.position.x===bloquerojo.position.x && peonblanco5.position.z===bloquerojo.position.z))||
			     (peonblanco6.position.x===bloquerojo.position.x && peonblanco6.position.z===bloquerojo.position.z))||
			     (peonblanco7.position.x===bloquerojo.position.x && peonblanco7.position.z===bloquerojo.position.z))||
		             (peonblanco8.position.x===bloquerojo.position.x && peonblanco8.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z);
		     if (bloquemorado.position.x>80){
			bloquemorado.visible=false;
		     }
		     grupomorado.add(bloquemorado);
		     if ((((((((((((((((peonnegro1.position.x===bloquerojo.position.x+10 && peonnegro1.position.z===bloquerojo.position.z-10)||
			     (peonnegro2.position.x===bloquerojo.position.x+10 && peonnegro2.position.z===bloquerojo.position.z-10))||
			     (peonnegro3.position.x===bloquerojo.position.x+10 && peonnegro3.position.z===bloquerojo.position.z-10))||
			     (peonnegro4.position.x===bloquerojo.position.x+10 && peonnegro4.position.z===bloquerojo.position.z-10))||
			     (peonnegro5.position.x===bloquerojo.position.x+10 && peonnegro5.position.z===bloquerojo.position.z-10))||
			     (peonnegro6.position.x===bloquerojo.position.x+10 && peonnegro6.position.z===bloquerojo.position.z-10))||
			     (peonnegro7.position.x===bloquerojo.position.x+10 && peonnegro7.position.z===bloquerojo.position.z-10))||
		             (peonnegro8.position.x===bloquerojo.position.x+10 && peonnegro8.position.z===bloquerojo.position.z-10))||
			     (torrenegra1.position.x===bloquerojo.position.x+10 && torrenegra1.position.z===bloquerojo.position.z-10))||
		             (torrenegra2.position.x===bloquerojo.position.x+10 && torrenegra2.position.z===bloquerojo.position.z-10))||
		             (caballonegro1.position.x===bloquerojo.position.x+10 && caballonegro1.position.z===bloquerojo.position.z-10))||
		             (caballonegro2.position.x===bloquerojo.position.x+10 && caballonegro2.position.z===bloquerojo.position.z-10))||
		             (alfilnegro1.position.x===bloquerojo.position.x+10 && alfilnegro1.position.z===bloquerojo.position.z-10))||
		             (alfilnegro2.position.x===bloquerojo.position.x+10 && alfilnegro2.position.z===bloquerojo.position.z-10))||
		             (reinanegra.position.x===bloquerojo.position.x+10 && reinanegra.position.z===bloquerojo.position.z-10))||
		             (reynegro.position.x===bloquerojo.position.x+10 && reynegro.position.z===bloquerojo.position.z-10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-10);
		     	     if (bloquemorado.position.x>80){
				bloquemorado.visible=false;
		     	     }
		     	     grupomorado.add(bloquemorado);
		     }
		     if ((((((((((((((((peonnegro1.position.x===bloquerojo.position.x+10 && peonnegro1.position.z===bloquerojo.position.z+10)||
			     (peonnegro2.position.x===bloquerojo.position.x+10 && peonnegro2.position.z===bloquerojo.position.z+10))||
			     (peonnegro3.position.x===bloquerojo.position.x+10 && peonnegro3.position.z===bloquerojo.position.z+10))||
			     (peonnegro4.position.x===bloquerojo.position.x+10 && peonnegro4.position.z===bloquerojo.position.z+10))||
			     (peonnegro5.position.x===bloquerojo.position.x+10 && peonnegro5.position.z===bloquerojo.position.z+10))||
			     (peonnegro6.position.x===bloquerojo.position.x+10 && peonnegro6.position.z===bloquerojo.position.z+10))||
			     (peonnegro7.position.x===bloquerojo.position.x+10 && peonnegro7.position.z===bloquerojo.position.z+10))||
		             (peonnegro8.position.x===bloquerojo.position.x+10 && peonnegro8.position.z===bloquerojo.position.z+10))||
			     (torrenegra1.position.x===bloquerojo.position.x+10 && torrenegra1.position.z===bloquerojo.position.z+10))||
		             (torrenegra2.position.x===bloquerojo.position.x+10 && torrenegra2.position.z===bloquerojo.position.z+10))||
		             (caballonegro1.position.x===bloquerojo.position.x+10 && caballonegro1.position.z===bloquerojo.position.z+10))||
		             (caballonegro2.position.x===bloquerojo.position.x+10 && caballonegro2.position.z===bloquerojo.position.z+10))||
		             (alfilnegro1.position.x===bloquerojo.position.x+10 && alfilnegro1.position.z===bloquerojo.position.z+10))||
		             (alfilnegro2.position.x===bloquerojo.position.x+10 && alfilnegro2.position.z===bloquerojo.position.z+10))||
		             (reinanegra.position.x===bloquerojo.position.x+10 && reinanegra.position.z===bloquerojo.position.z+10))||
		             (reynegro.position.x===bloquerojo.position.x+10 && reynegro.position.z===bloquerojo.position.z+10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+10);
		     	     if (bloquemorado.position.x>80){
				bloquemorado.visible=false;
		     	     }
		     	     grupomorado.add(bloquemorado);
		     }
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Peones blancos
		   if ((((((((peonnegro1.position.x===bloquerojo.position.x && peonnegro1.position.z===bloquerojo.position.z)||
			     (peonnegro2.position.x===bloquerojo.position.x && peonnegro2.position.z===bloquerojo.position.z))||
			     (peonnegro3.position.x===bloquerojo.position.x && peonnegro3.position.z===bloquerojo.position.z))||
			     (peonnegro4.position.x===bloquerojo.position.x && peonnegro4.position.z===bloquerojo.position.z))||
			     (peonnegro5.position.x===bloquerojo.position.x && peonnegro5.position.z===bloquerojo.position.z))||
			     (peonnegro6.position.x===bloquerojo.position.x && peonnegro6.position.z===bloquerojo.position.z))||
			     (peonnegro7.position.x===bloquerojo.position.x && peonnegro7.position.z===bloquerojo.position.z))||
		             (peonnegro8.position.x===bloquerojo.position.x && peonnegro8.position.z===bloquerojo.position.z)){
		         grupomorado = new THREE.Group();
		         bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z);
		     if (bloquemorado.position.x<10){
			bloquemorado.visible=false;
		     }
		     grupomorado.add(bloquemorado);
		     if (((((((((((((((peonblanco1.position.x===bloquerojo.position.x-10 && peonblanco1.position.z===bloquerojo.position.z-10)||
			     (peonblanco2.position.x===bloquerojo.position.x-10 && peonblanco2.position.z===bloquerojo.position.z-10))||
			     (peonblanco3.position.x===bloquerojo.position.x-10 && peonblanco3.position.z===bloquerojo.position.z-10))||
			     (peonblanco4.position.x===bloquerojo.position.x-10 && peonblanco4.position.z===bloquerojo.position.z-10))||
			     (peonblanco5.position.x===bloquerojo.position.x-10 && peonblanco5.position.z===bloquerojo.position.z-10))||
			     (peonblanco6.position.x===bloquerojo.position.x-10 && peonblanco6.position.z===bloquerojo.position.z-10))||
			     (peonblanco7.position.x===bloquerojo.position.x-10 && peonblanco7.position.z===bloquerojo.position.z-10))||
		             (peonblanco8.position.x===bloquerojo.position.x-10 && peonblanco8.position.z===bloquerojo.position.z-10))||
 			     (torreblanca1.position.x===bloquerojo.position.x-10 && torreblanca1.position.z===bloquerojo.position.z-10)||
			     (torreblanca2.position.x===bloquerojo.position.x-10 && torreblanca2.position.z===bloquerojo.position.z-10))||
			     (caballoblanco1.position.x===bloquerojo.position.x-10 && caballoblanco1.position.z===bloquerojo.position.z-10))||
			     (caballoblanco2.position.x===bloquerojo.position.x-10 && caballoblanco2.position.z===bloquerojo.position.z-10))||
			     (alfilblanco1.position.x===bloquerojo.position.x-10 && alfilblanco1.position.z===bloquerojo.position.z-10))||
			     (alfilblanco2.position.x===bloquerojo.position.x-10 && alfilblanco2.position.z===bloquerojo.position.z-10))||
			     (reinablanca.position.x===bloquerojo.position.x-10 && reinablanca.position.z===bloquerojo.position.z-10))||
		             (reyblanco.position.x===bloquerojo.position.x-10 && reyblanco.position.z===bloquerojo.position.z-10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-10);
		     	     if (bloquemorado.position.x<10){
				bloquemorado.visible=false;
		     	     }
		     	     grupomorado.add(bloquemorado);
		     }
		     if (((((((((((((((peonblanco1.position.x===bloquerojo.position.x-10 && peonblanco1.position.z===bloquerojo.position.z+10)||
			     (peonblanco2.position.x===bloquerojo.position.x-10 && peonblanco2.position.z===bloquerojo.position.z+10))||
			     (peonblanco3.position.x===bloquerojo.position.x-10 && peonblanco3.position.z===bloquerojo.position.z+10))||
			     (peonblanco4.position.x===bloquerojo.position.x-10 && peonblanco4.position.z===bloquerojo.position.z+10))||
			     (peonblanco5.position.x===bloquerojo.position.x-10 && peonblanco5.position.z===bloquerojo.position.z+10))||
			     (peonblanco6.position.x===bloquerojo.position.x-10 && peonblanco6.position.z===bloquerojo.position.z+10))||
			     (peonblanco7.position.x===bloquerojo.position.x-10 && peonblanco7.position.z===bloquerojo.position.z+10))||
		             (peonblanco8.position.x===bloquerojo.position.x-10 && peonblanco8.position.z===bloquerojo.position.z+10))||
 			     (torreblanca1.position.x===bloquerojo.position.x-10 && torreblanca1.position.z===bloquerojo.position.z+10)||
			     (torreblanca2.position.x===bloquerojo.position.x-10 && torreblanca2.position.z===bloquerojo.position.z+10))||
			     (caballoblanco1.position.x===bloquerojo.position.x-10 && caballoblanco1.position.z===bloquerojo.position.z+10))||
			     (caballoblanco2.position.x===bloquerojo.position.x-10 && caballoblanco2.position.z===bloquerojo.position.z+10))||
			     (alfilblanco1.position.x===bloquerojo.position.x-10 && alfilblanco1.position.z===bloquerojo.position.z+10))||
			     (alfilblanco2.position.x===bloquerojo.position.x-10 && alfilblanco2.position.z===bloquerojo.position.z+10))||
			     (reinablanca.position.x===bloquerojo.position.x-10 && reinablanca.position.z===bloquerojo.position.z+10))||
		             (reyblanco.position.x===bloquerojo.position.x-10 && reyblanco.position.z===bloquerojo.position.z+10)){
			     bloquemorado = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+10);
		     	     if (bloquemorado.position.x<10){
				bloquemorado.visible=false;
		     	     }
		     	     grupomorado.add(bloquemorado);
		     }  
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Peones negros
		//////////////////////////////////////////////Alfiles////////////////////////////////////////////////////////////
		   if ((((alfilblanco1.position.x===bloquerojo.position.x && alfilblanco1.position.z===bloquerojo.position.z)||
		         (alfilblanco2.position.x===bloquerojo.position.x && alfilblanco2.position.z===bloquerojo.position.z))||
		         (alfilnegro1.position.x===bloquerojo.position.x && alfilnegro1.position.z===bloquerojo.position.z))||
		         (alfilnegro2.position.x===bloquerojo.position.x && alfilnegro2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Alfiles
		//////////////////////////////////////////////Reinas////////////////////////////////////////////////////////////
		   if ((reinablanca.position.x===bloquerojo.position.x && reinablanca.position.z===bloquerojo.position.z)||
		       (reinanegra.position.x===bloquerojo.position.x && reinanegra.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x,0,-i*10);
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(i*10,0,bloquerojo.position.z);
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z-(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z<-80){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x+(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x>80 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }
		     for (i=1;i<=8;i++){ 
		       bloquemorado = new BloqueMorado(bloquerojo.position.x-(i*10),0,bloquerojo.position.z+(i*10));
		       if (bloquemorado.position.x<10 || bloquemorado.position.z>-10){bloquemorado.visible=false;}
		       grupomorado.add(bloquemorado);
		     }	
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Reinas
		//////////////////////////////////////////////Reyes////////////////////////////////////////////////////////////
		   if ((reyblanco.position.x===bloquerojo.position.x && reyblanco.position.z===bloquerojo.position.z)||
		       (reynegro.position.x===bloquerojo.position.x && reynegro.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
		     bloquemorado1 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-10);//Noreste
		     if (bloquemorado1.position.x>80 || bloquemorado1.position.z<-80){bloquemorado1.visible=false;}
		     grupomorado.add(bloquemorado1);
	             bloquemorado2 = new BloqueMorado(bloquerojo.position.x,0,bloquerojo.position.z-10);//Norte
		     if (bloquemorado2.position.z<-80){bloquemorado2.visible=false;}
		     grupomorado.add(bloquemorado2);
		     bloquemorado3 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-10);//Noroeste
		     if (bloquemorado3.position.x<10 || bloquemorado3.position.z<-80){bloquemorado3.visible=false;}
		     grupomorado.add(bloquemorado3);
	             bloquemorado4 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z);//Este
		     if (bloquemorado4.position.x<10){bloquemorado4.visible=false;}
		     grupomorado.add(bloquemorado4);
		     bloquemorado5 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+10);//Sureste
		     if (bloquemorado5.position.x<10 || bloquemorado5.position.z>-10){bloquemorado5.visible=false;}
		     grupomorado.add(bloquemorado5);
	             bloquemorado6 = new BloqueMorado(bloquerojo.position.x,0,bloquerojo.position.z+10);//Sur
		     if (bloquemorado6.position.z>-10){bloquemorado6.visible=false;}
		     grupomorado.add(bloquemorado6);   
		     bloquemorado7 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+10);//Suroeste
		     if (bloquemorado7.position.x>80 || bloquemorado7.position.z>-10){bloquemorado7.visible=false;}
		     grupomorado.add(bloquemorado7);
	             bloquemorado8 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z);//Oeste
		     if (bloquemorado8.position.x>80){bloquemorado8.visible=false;}
		     grupomorado.add(bloquemorado8); 
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Reyes
		//////////////////////////////////////////////Caballos////////////////////////////////////////////////////////////
		   if ((((caballoblanco1.position.x===bloquerojo.position.x && caballoblanco1.position.z===bloquerojo.position.z)||
		         (caballoblanco2.position.x===bloquerojo.position.x && caballoblanco2.position.z===bloquerojo.position.z))||
		         (caballonegro1.position.x===bloquerojo.position.x && caballonegro1.position.z===bloquerojo.position.z))||
		         (caballonegro2.position.x===bloquerojo.position.x && caballonegro2.position.z===bloquerojo.position.z)){
		     grupomorado = new THREE.Group();
                     bloquemorado1 = new BloqueMorado(bloquerojo.position.x+20,0,bloquerojo.position.z-10);//Noreste
		     if (bloquemorado1.position.x>80 || bloquemorado1.position.z<-80){bloquemorado1.visible=false;}
		     grupomorado.add(bloquemorado1);
	             bloquemorado2 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z-20);//Noreste
		     if (bloquemorado2.position.x>80 || bloquemorado2.position.z<-80){bloquemorado2.visible=false;}
		     grupomorado.add(bloquemorado2);
		     bloquemorado3 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z-20);//Noroeste
		     if (bloquemorado3.position.x<10 || bloquemorado3.position.z<-80){bloquemorado3.visible=false;}
		     grupomorado.add(bloquemorado3);
	             bloquemorado4 = new BloqueMorado(bloquerojo.position.x-20,0,bloquerojo.position.z-10);//Noroeste
		     if (bloquemorado4.position.x<10 || bloquemorado4.position.z<-80){bloquemorado4.visible=false;}
		     grupomorado.add(bloquemorado4);
		     bloquemorado5 = new BloqueMorado(bloquerojo.position.x-20,0,bloquerojo.position.z+10);//Sureste
		     if (bloquemorado5.position.x<10 || bloquemorado5.position.z>-10){bloquemorado5.visible=false;}
		     grupomorado.add(bloquemorado5);
	             bloquemorado6 = new BloqueMorado(bloquerojo.position.x-10,0,bloquerojo.position.z+20);//Sureste
		     if (bloquemorado6.position.x<10 || bloquemorado6.position.z>-10){bloquemorado6.visible=false;}
		     grupomorado.add(bloquemorado6);   
		     bloquemorado7 = new BloqueMorado(bloquerojo.position.x+10,0,bloquerojo.position.z+20);//Suroeste
		     if (bloquemorado7.position.x>80 || bloquemorado7.position.z>-10){bloquemorado7.visible=false;}
		     grupomorado.add(bloquemorado7);
	             bloquemorado8 = new BloqueMorado(bloquerojo.position.x+20,0,bloquerojo.position.z+10);//Suroeste
		     if (bloquemorado8.position.x>80 || bloquemorado8.position.z>-10){bloquemorado8.visible=false;}
		     grupomorado.add(bloquemorado8);  
		     escena.add(grupomorado);  
	             bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		     escena.add(bloqueverde);
		     bandera=1;
		   }//fin if Caballos
		}//fin else
        break;
	}//fin switch
    }//fin function desplazar
}

////////////////////////////////////Bloque Rojo///////////////////////////////////////////////////////////////////////////////////////
function BloqueRojo(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzroja.jpg');
  var luzroja = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzroja));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}
	    
BloqueRojo.prototype = new Agent();
///////////////////////////////////Bloque Morado//////////////////////////////////////////////////////////////////////////////////////	    
function BloqueMorado(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzmorada.jpeg');
  var luzmorada = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.1,10.1,10.1),luzmorada));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueMorado.prototype = new Agent();
///////////////////////////////////////Bloque verde//////////////////////////////////////////////////////////////////////////////
function BloqueVerde(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzverde.jpg');
  var luzverde = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzverde));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

BloqueVerde.prototype = new Agent();
//////////////////////////////////////Init y loop/////////////////////////////////////////////////////////////////////////////////////

init();
loop();

function init() {
  ////////////////////////////////////////////Escena//////////////////////////////////////////////////////////////////////////////
  var texturaescena = new THREE.TextureLoader().load('wallpaper.jpg');
  escena = new Environment();
  escena.background=texturaescena;
  //////////////////////////////////////////////////Camara///////////////////////////////////////////////////////////////////////
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.y=25; 
  camara.position.x=45; 
  camara.rotateX=(-Math.PI/4);
  ///////////////////////////////////////////Renderizador//////////////////////////////////////////////////////////////////////////
  renderizador = new THREE.WebGLRenderer({antialias:true});
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  renderizador.shadowMap.enabled=true;
  document.body.appendChild(renderizador.domElement);
  
  /////////////////////////////////////////////////////Luces/////////////////////////////////////////////////////////////////////
  var luzblan= new THREE.PointLight(0xFFFFFF);
  var luzblan2=new THREE.PointLight(0xFFFFFF);
  var luzblan3= new THREE.PointLight(0xFFFFFF);
  luzblan.castShadow=true;
  luzblan2.castShadow=true;
  luzblan3.castShadow=true;
  luzblan.position.y=300; luzblan.position.z=50; luzblan.position.x=-50;
  luzblan2.position.y=300;  luzblan2.position.z=-150; luzblan2.position.x=50;
  luzblan3.position.y=-300;  luzblan3.position.z=-50;  luzblan3.position.x=50;
  ///////////////////////////////////////////////Textura/////////////////////////////////////////////////////////////////////////////

  var textura3 = new THREE.TextureLoader().load('cerablanca.jpg');
  var textura4 = new THREE.TextureLoader().load('ceranegra.jpg');
  var textura5 = new THREE.TextureLoader().load('madera.jpg');
  var cerablanco = new THREE.MeshLambertMaterial({map:textura3});
  var ceranegro = new THREE.MeshLambertMaterial({map:textura4});
  var madera = new THREE.MeshLambertMaterial({map:textura5});
  
  ////////////////////////////////////////////////////Tablero/////////////////////////////////////////////////////////////////////
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
  ///////////////////////////////////////////Torres////////////////////////////////////////////////////////////////
  torreblanca1 = new TorreBlanca(10,12,-10);
  torreblanca2 = new TorreBlanca(10,12,-80);
  torrenegra1 = new TorreNegra(80,12,-10);
  torrenegra2 = new TorreNegra(80,12,-80);
  patitas1=new Patitasblancas(10,-10);
  patitasn1=new Patitasnegras(80,-10);
  patitas2=new Patitasblancas(10,-80);
  patitasn2=new Patitasnegras(80,-80);

	
  escena.add(torreblanca1,torreblanca2,torrenegra1,torrenegra2);
  escena.add(patitas1,patitas2,patitasn1,patitasn2);
  /////////////////////////////////////////Peones/////////////////////////////////////////////////////////////////
  peonblanco1 = new PeonBlanco(20,12,-10);
  peonblanco2 = new PeonBlanco(20,12,-20);
  peonblanco3 = new PeonBlanco(20,12,-30);
  peonblanco4 = new PeonBlanco(20,12,-40);
  peonblanco5 = new PeonBlanco(20,12,-50);
  peonblanco6 = new PeonBlanco(20,12,-60);
  peonblanco7 = new PeonBlanco(20,12,-70);
  peonblanco8 = new PeonBlanco(20,12,-80);
  patitas3=new Patitasblancas(20,-10);
  patitas4=new Patitasblancas(20,-20);
  patitas5=new Patitasblancas(20,-30);
  patitas6=new Patitasblancas(20,-40);
  patitas7=new Patitasblancas(20,-50);
  patitas8=new Patitasblancas(20,-60);
  patitas9=new Patitasblancas(20,-70);
  patitas10=new Patitasblancas(20,-80);
	
  peonnegro1 = new PeonNegro(70,12,-10);
  peonnegro2 = new PeonNegro(70,12,-20);
  peonnegro3 = new PeonNegro(70,12,-30);
  peonnegro4 = new PeonNegro(70,12,-40);
  peonnegro5 = new PeonNegro(70,12,-50);
  peonnegro6 = new PeonNegro(70,12,-60);
  peonnegro7 = new PeonNegro(70,12,-70);
  peonnegro8 = new PeonNegro(70,12,-80);
  patitasn3=new Patitasnegras(70,-10);
  patitasn4=new Patitasnegras(70,-20);
  patitasn5=new Patitasnegras(70,-30);
  patitasn6=new Patitasnegras(70,-40);
  patitasn7=new Patitasnegras(70,-50);
  patitasn8=new Patitasnegras(70,-60);
  patitasn9=new Patitasnegras(70,-70);
  patitasn10=new Patitasnegras(70,-80);
	
  escena.add(peonblanco1,peonblanco2,peonblanco3,peonblanco4,peonblanco5,peonblanco6,peonblanco7,peonblanco8);
  escena.add(peonnegro1,peonnegro2,peonnegro3,peonnegro4,peonnegro5,peonnegro6,peonnegro7,peonnegro8);
  escena.add(patitas3,patitas4,patitas5,patitas6,patitas7,patitas8,patitas9,patitas10);
  escena.add(patitasn3,patitasn4,patitasn5,patitasn6,patitasn7,patitasn8,patitasn9,patitasn10);
  /////////////////////////////////////////Alfiles/////////////////////////////////////////////////////////////////
  alfilblanco1 = new AlfilBlanco(10,12,-30);
  alfilblanco2 = new AlfilBlanco(10,12,-60);
  patitas11=new Patitasblancas(10,-30);
  patitas12=new Patitasblancas(10,-60);
	
  alfilnegro1 = new AlfilNegro(80,12,-30);
  alfilnegro2 = new AlfilNegro(80,12,-60);
  patitasn11=new Patitasnegras(80,-30);
  patitasn12=new Patitasnegras(80,-60);
	
  escena.add(alfilblanco1,alfilblanco2,alfilnegro1,alfilnegro2);
  escena.add(patitas11,patitas12,patitasn11,patitasn12);
  ////////////////////////////////////////////Caballos/////////////////////////////////////////////////////////////
  caballoblanco1 = new CaballoBlanco(10,12,-20);
  caballoblanco2 = new CaballoBlanco(10,12,-70);
  patitas13=new Patitasblancas(10,-20);
  patitas14=new Patitasblancas(10,-70);
	
  caballonegro1 = new CaballoNegro(80,12,-20);
  caballonegro2 = new CaballoNegro(80,12,-70);
  patitasn13=new Patitasnegras(80,-20);
  patitasn14=new Patitasnegras(80,-70);
	
  escena.add(caballoblanco1,caballoblanco2,caballonegro1,caballonegro2);	
  escena.add(patitas13,patitas14,patitasn13,patitasn14);
  ////////////////////////////////////////////Reinas/////////////////////////////////////////////////////////////////
  reinablanca = new ReinaBlanca(10,12,-40);
  patitas15=new Patitasblancas(10,-40);	
	
  reinanegra = new ReinaNegra(80,12,-40);
  patitasn15=new Patitasnegras(80,-40);	
 
  escena.add(reinablanca,reinanegra);
  escena.add(patitas15,patitasn15);
  ///////////////////////////////////////////Reyes////////////////////////////////////////////////////////////////////
  reyblanco = new ReyBlanco(10,12,-50);
  patitas16=new Patitasblancas(10,-50);
	
  reynegro = new ReyNegro(80,12,-50);
  patitasn16=new Patitasnegras(80,-50);	
  
  escena.add(reyblanco,reynegro);	
  escena.add(patitas16,patitasn16);
  /////////////////////////////////////////Bloques////////////////////////////////////////////////////////////////////
  bloqueazul = new BloqueAzul(10,0,-10);
  escena.add(grupo,grupo2,grupo3,bloqueazul);
  //Luces
  escena.add(luzblan,luzblan2,luzblan3);
  escena.rotateX(Math.PI/4);
}

function loop() {
  patitas1.position.x=(torreblanca1.position.x)-10;
  patitas1.position.z=(torreblanca1.position.z)+10;
  patitas2.position.x=(torreblanca2.position.x)-10;
  patitas2.position.z=(torreblanca2.position.z)+80;
  patitas3.position.x=(peonblanco1.position.x)-20;
  patitas3.position.z=(peonblanco1.position.z)+10;
  patitas4.position.x=(peonblanco2.position.x)-20;
  patitas4.position.z=(peonblanco2.position.z)+20;
  patitas5.position.x=(peonblanco3.position.x)-20;
  patitas5.position.z=(peonblanco3.position.z)+30;
  patitas6.position.x=(peonblanco4.position.x)-20;
  patitas6.position.z=(peonblanco4.position.z)+40;
  patitas7.position.x=(peonblanco5.position.x)-20;
  patitas7.position.z=(peonblanco5.position.z)+50;
  patitas8.position.x=(peonblanco6.position.x)-20;
  patitas8.position.z=(peonblanco6.position.z)+60;
  patitas9.position.x=(peonblanco7.position.x)-20;
  patitas9.position.z=(peonblanco7.position.z)+70;
  patitas10.position.x=(peonblanco8.position.x)-20;
  patitas10.position.z=(peonblanco8.position.z)+80;
  patitas11.position.x=(alfilblanco1.position.x)-10;
  patitas11.position.z=(alfilblanco1.position.z)+30;
  patitas12.position.x=(alfilblanco2.position.x)-10;
  patitas12.position.z=(alfilblanco2.position.z)+60;
  patitas13.position.x=(caballoblanco1.position.x)-10;
  patitas13.position.y=(caballoblanco1.position.y)-12;	
  patitas13.position.z=(caballoblanco1.position.z)+20;
  patitas14.position.x=(caballoblanco2.position.x)-10;
  patitas14.position.y=(caballoblanco2.position.y)-12;
  patitas14.position.z=(caballoblanco2.position.z)+70;
  patitas15.position.x=(reinablanca.position.x)-10;
  patitas15.position.z=(reinablanca.position.z)+40;
  patitas16.position.x=(reyblanco.position.x)-10;
  patitas16.position.z=(reyblanco.position.z)+50;
	
	
	
	
  patitasn1.position.x=(torrenegra1.position.x)-80;
  patitasn1.position.z=(torrenegra1.position.z)+10;
  patitasn2.position.x=(torrenegra2.position.x)-80;
  patitasn2.position.z=(torrenegra2.position.z)+80;
  patitasn3.position.x=(peonnegro1.position.x)-70;
  patitasn3.position.z=(peonnegro1.position.z)+10;
  patitasn4.position.x=(peonnegro2.position.x)-70;
  patitasn4.position.z=(peonnegro2.position.z)+20;	
  patitasn5.position.x=(peonnegro3.position.x)-70;
  patitasn5.position.z=(peonnegro3.position.z)+30;
  patitasn6.position.x=(peonnegro4.position.x)-70;
  patitasn6.position.z=(peonnegro4.position.z)+40;
  patitasn7.position.x=(peonnegro5.position.x)-70;
  patitasn7.position.z=(peonnegro5.position.z)+50;
  patitasn8.position.x=(peonnegro6.position.x)-70;
  patitasn8.position.z=(peonnegro6.position.z)+60;
  patitasn9.position.x=(peonnegro7.position.x)-70;
  patitasn9.position.z=(peonnegro7.position.z)+70;
  patitasn10.position.x=(peonnegro8.position.x)-70;
  patitasn10.position.z=(peonnegro8.position.z)+80;	
  patitasn11.position.x=(alfilnegro1.position.x)-80;
  patitasn11.position.z=(alfilnegro1.position.z)+30;
  patitasn12.position.x=(alfilnegro2.position.x)-80;
  patitasn12.position.z=(alfilnegro2.position.z)+60;
  patitasn13.position.x=(caballonegro1.position.x)-80;
  patitasn13.position.y=(caballonegro1.position.y)-12;
  patitasn13.position.z=(caballonegro1.position.z)+20;
  patitasn14.position.x=(caballonegro2.position.x)-80;
  patitasn14.position.y=(caballonegro2.position.y)-12;
  patitasn14.position.z=(caballonegro2.position.z)+70;
  patitasn15.position.x=(reinanegra.position.x)-80;
  patitasn15.position.z=(reinanegra.position.z)+40;
  patitasn16.position.x=(reynegro.position.x)-80;
  patitasn16.position.z=(reynegro.position.z)+50;

  requestAnimationFrame(loop);
  escena.sense();
  escena.plan();
  escena.act();
  renderizador.render(escena,camara);
} 
