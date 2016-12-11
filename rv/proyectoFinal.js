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

///////////////////////////////////////////Variables////////////////////////////////////////////////////////////////////////////////////
var camara,escena,renderizador;
var malla,malla2,malla3,grupo,grupo2,grupo3,grupomorado;
var bloquemorado,bloqueazul,bloquerojo,bloqueverde;
var bandera=0;
var torreblanca1,torreblanca2,torrenegra1,torrenegra2;
var peonblanco1,peonblanco2,peonblanco3,peonblanco4,peonblanco5,peonblanco6,peonblanco7,peonblanco8;
var peonnegro1,peonnegro2,peonnegro3,peonnegro4,peonnegro5,peonnegro6,peonnegro7,peonnegro8;
var alfilblanco1,alfilblanco2,alfilnegro1,alfilnegro2;
var caballoblanco1,caballoblanco2,caballonegro1,caballonegro2;
var reinablanca,reinanegra;
var reyblanco,reynegro;
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
		    TorreBlanca.prototype.sense = function(environment){
		      this.sensor.set(this.position,new THREE.Vector3(0,-1,0));
		      var obstaculo = this.sensor.intersectObjects(bvtb1,true);
		      if(obstaculo.length >0)
			{this.colision = 1;this.step=0;}
 		      else
		        {this.colision = 0;this.step=0.25;}
		    }//fin prototype sense
		
		    TorreBlanca.prototype.act = function(environment){ 	
		      if (this.colision!=1){
			if(torreblanca1.position.x<=bvtb1.position.x)
			  torreblanca1.position.x += this.step;
			else
			  torreblanca1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca1.position.z<=bvtb1.position.z)
			  torreblanca1.position.z += this.step;
			else
			  torreblanca1.position.z -= this.step;
		      }//fin if posicion z
			//////////////////////////////////////////Piezas diferentes////////////////////////////////////////
		        if(torreblanca1.position.x==torrenegra1.position.x && torreblanca1.position.z==torrenegra1.position.z)&&
		 	  (torreblanca1.position.y==torrenegra1.position.y)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(torreblanca1.position.x==torrenegra2.position.x && torreblanca1.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(torreblanca1.position.x==caballonegro1.position.x && torreblanca1.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(torreblanca1.position.x==caballonegro2.position.x && torreblanca1.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(torreblanca1.position.x==alfilnegro1.position.x && torreblanca1.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(torreblanca1.position.x==alfilnegro2.position.x && torreblanca1.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(torreblanca1.position.x==reinanegra.position.x && torreblanca1.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(torreblanca1.position.x==reynegro.position.x && torreblanca1.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(torreblanca1.position.x==peonnegro1.position.x && torreblanca1.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(torreblanca1.position.x==peonnegro2.position.x && torreblanca1.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(torreblanca1.position.x==peonnegro3.position.x && torreblanca1.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(torreblanca1.position.x==peonnegro4.position.x && torreblanca1.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(torreblanca1.position.x==peonnegro5.position.x && torreblanca1.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(torreblanca1.position.x==peonnegro6.position.x && torreblanca1.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(torreblanca1.position.x==peonnegro7.position.x && torreblanca1.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(torreblanca1.position.x==peonnegro8.position.x && torreblanca1.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}  
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
		        if(torreblanca2.position.x==torrenegra1.position.x && torreblanca2.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(torreblanca2.position.x==torrenegra2.position.x && torreblanca2.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(torreblanca2.position.x==caballonegro1.position.x && torreblanca2.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(torreblanca2.position.x==caballonegro2.position.x && torreblanca2.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(torreblanca2.position.x==alfilnegro1.position.x && torreblanca2.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(torreblanca2.position.x==alfilnegro2.position.x && torreblanca2.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(torreblanca2.position.x==reinanegra.position.x && torreblanca2.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(torreblanca2.position.x==reynegro.position.x && torreblanca2.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(torreblanca2.position.x==peonnegro1.position.x && torreblanca2.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(torreblanca2.position.x==peonnegro2.position.x && torreblanca2.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(torreblanca2.position.x==peonnegro3.position.x && torreblanca2.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(torreblanca2.position.x==peonnegro4.position.x && torreblanca2.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(torreblanca2.position.x==peonnegro5.position.x && torreblanca2.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(torreblanca2.position.x==peonnegro6.position.x && torreblanca2.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(torreblanca2.position.x==peonnegro7.position.x && torreblanca2.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(torreblanca2.position.x==peonnegro8.position.x && torreblanca2.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}  
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
		        if(torrenegra1.position.x==torreblanca1.position.x && torrenegra1.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(torrenegra1.position.x==torreblanca2.position.x && torrenegra1.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(torrenegra1.position.x==caballoblanco1.position.x && torrenegra1.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(torrenegra1.position.x==caballoblanco2.position.x && torrenegra1.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(torrenegra1.position.x==alfilblanco1.position.x && torrenegra1.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(torrenegra1.position.x==alfilblanco2.position.x && torrenegra1.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(torrenegra1.position.x==reinablanca.position.x && torrenegra1.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(torrenegra1.position.x==reyblanco.position.x && torrenegra1.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(torrenegra1.position.x==peonblanco1.position.x && torrenegra1.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(torrenegra1.position.x==peonblanco2.position.x && torrenegra1.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(torrenegra1.position.x==peonblanco3.position.x && torrenegra1.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(torrenegra1.position.x==peonblanco4.position.x && torrenegra1.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(torrenegra1.position.x==peonblanco5.position.x && torrenegra1.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(torrenegra1.position.x==peonblanco6.position.x && torrenegra1.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(torrenegra1.position.x==peonblanco7.position.x && torrenegra1.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(torrenegra1.position.x==peonblanco8.position.x && torrenegra1.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
		        if(torrenegra2.position.x==torreblanca1.position.x && torrenegra2.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(torrenegra2.position.x==torreblanca2.position.x && torrenegra2.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(torrenegra2.position.x==caballoblanco1.position.x && torrenegra2.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(torrenegra2.position.x==caballoblanco2.position.x && torrenegra2.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(torrenegra2.position.x==alfilblanco1.position.x && torrenegra2.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(torrenegra2.position.x==alfilblanco2.position.x && torrenegra2.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(torrenegra2.position.x==reinablanca.position.x && torrenegra2.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(torrenegra2.position.x==reyblanco.position.x && torrenegra2.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(torrenegra2.position.x==peonblanco1.position.x && torrenegra2.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(torrenegra2.position.x==peonblanco2.position.x && torrenegra2.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(torrenegra2.position.x==peonblanco3.position.x && torrenegra2.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(torrenegra2.position.x==peonblanco4.position.x && torrenegra2.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(torrenegra2.position.x==peonblanco5.position.x && torrenegra2.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(torrenegra2.position.x==peonblanco6.position.x && torrenegra2.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(torrenegra2.position.x==peonblanco7.position.x && torrenegra2.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(torrenegra2.position.x==peonblanco8.position.x && torrenegra2.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
                        if(peonblanco1.position.x==torrenegra1.position.x && peonblanco1.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco1.position.x==torrenegra2.position.x && peonblanco1.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco1.position.x==caballonegro1.position.x && peonblanco1.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco1.position.x==caballonegro2.position.x && peonblanco1.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco1.position.x==alfilnegro1.position.x && peonblanco1.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco1.position.x==alfilnegro2.position.x && peonblanco1.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco1.position.x==reinanegra.position.x && peonblanco1.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco1.position.x==reynegro.position.x && peonblanco1.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco1.position.x==peonnegro1.position.x && peonblanco1.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco1.position.x==peonnegro2.position.x && peonblanco1.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco1.position.x==peonnegro3.position.x && peonblanco1.position.z==peonnegro3.position.z)
			{peonnegra3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco1.position.x==peonnegro4.position.x && peonblanco1.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco1.position.x==peonnegro5.position.x && peonblanco1.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco1.position.x==peonnegro6.position.x && peonblanco1.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco1.position.x==peonnegro7.position.x && peonblanco1.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco1.position.x==peonnegro8.position.x && peonblanco1.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}   
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
		        if(peonblanco2.position.x==torrenegra1.position.x && peonblanco2.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco2.position.x==torrenegra2.position.x && peonblanco2.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco2.position.x==caballonegro1.position.x && peonblanco2.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco2.position.x==caballonegro2.position.x && peonblanco2.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco2.position.x==alfilnegro1.position.x && peonblanco2.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco2.position.x==alfilnegro2.position.x && peonblanco2.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco2.position.x==reinanegra.position.x && peonblanco2.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco2.position.x==reynegro.position.x && peonblanco2.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco2.position.x==peonnegro1.position.x && peonblanco2.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco2.position.x==peonnegro2.position.x && peonblanco2.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco2.position.x==peonnegro3.position.x && peonblanco2.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco2.position.x==peonnegro4.position.x && peonblanco2.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco2.position.x==peonnegro5.position.x && peonblanco2.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco2.position.x==peonnegro6.position.x && peonblanco2.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco2.position.x==peonnegro7.position.x && peonblanco2.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco2.position.x==peonnegro8.position.x && peonblanco2.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
		        if(peonblanco3.position.x==torrenegra1.position.x && peonblanco3.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco3.position.x==torrenegra2.position.x && peonblanco3.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco3.position.x==caballonegro1.position.x && peonblanco3.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco3.position.x==caballonegro2.position.x && peonblanco3.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco3.position.x==alfilnegro1.position.x && peonblanco3.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco3.position.x==alfilnegro2.position.x && peonblanco3.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco3.position.x==reinanegra.position.x && peonblanco3.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco3.position.x==reynegro.position.x && peonblanco3.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco3.position.x==peonnegro1.position.x && peonblanco3.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco3.position.x==peonnegro2.position.x && peonblanco3.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco3.position.x==peonnegro3.position.x && peonblanco3.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco3.position.x==peonnegro4.position.x && peonblanco3.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco3.position.x==peonnegro5.position.x && peonblanco3.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco3.position.x==peonnegro6.position.x && peonblanco3.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco3.position.x==peonnegro7.position.x && peonblanco3.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco3.position.x==peonnegro8.position.x && peonblanco3.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonblanco4.position.x==torrenegra1.position.x && peonblanco4.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco4.position.x==torrenegra2.position.x && peonblanco4.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco4.position.x==caballonegro1.position.x && peonblanco4.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco4.position.x==caballonegro2.position.x && peonblanco4.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco4.position.x==alfilnegro1.position.x && peonblanco4.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco4.position.x==alfilnegro2.position.x && peonblanco4.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco4.position.x==reinanegra.position.x && peonblanco4.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco4.position.x==reynegro.position.x && peonblanco4.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco4.position.x==peonnegro1.position.x && peonblanco4.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco4.position.x==peonnegro2.position.x && peonblanco4.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco4.position.x==peonnegro3.position.x && peonblanco4.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco4.position.x==peonnegro4.position.x && peonblanco4.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco4.position.x==peonnegro5.position.x && peonblanco4.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco4.position.x==peonnegro6.position.x && peonblanco4.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco4.position.x==peonnegro7.position.x && peonblanco4.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco4.position.x==peonnegro8.position.x && peonblanco4.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonblanco5.position.x==torrenegra1.position.x && peonblanco5.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco5.position.x==torrenegra2.position.x && peonblanco5.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco5.position.x==caballonegro1.position.x && peonblanco5.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco5.position.x==caballonegro2.position.x && peonblanco5.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco5.position.x==alfilnegro1.position.x && peonblanco5.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco5.position.x==alfilnegro2.position.x && peonblanco5.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco5.position.x==reinanegra.position.x && peonblanco5.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco5.position.x==reynegro.position.x && peonblanco5.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco5.position.x==peonnegro1.position.x && peonblanco5.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco5.position.x==peonnegro2.position.x && peonblanco5.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco5.position.x==peonnegro3.position.x && peonblanco5.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco5.position.x==peonnegro4.position.x && peonblanco5.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco5.position.x==peonnegro5.position.x && peonblanco5.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco5.position.x==peonnegro6.position.x && peonblanco5.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco5.position.x==peonnegro7.position.x && peonblanco5.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco5.position.x==peonnegro8.position.x && peonblanco5.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonblanco6.position.x==torrenegra1.position.x && peonblanco6.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco6.position.x==torrenegra2.position.x && peonblanco6.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco6.position.x==caballonegro1.position.x && peonblanco6.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco6.position.x==caballonegro2.position.x && peonblanco6.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco6.position.x==alfilnegro1.position.x && peonblanco6.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco6.position.x==alfilnegro2.position.x && peonblanco6.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco6.position.x==reinanegra.position.x && peonblanco6.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco6.position.x==reynegro.position.x && peonblanco6.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco6.position.x==peonnegro1.position.x && peonblanco6.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco6.position.x==peonnegro2.position.x && peonblanco6.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco6.position.x==peonnegro3.position.x && peonblanco6.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco6.position.x==peonnegro4.position.x && peonblanco6.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco6.position.x==peonnegro5.position.x && peonblanco6.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco6.position.x==peonnegro6.position.x && peonblanco6.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco6.position.x==peonnegro7.position.x && peonblanco6.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco6.position.x==peonnegro8.position.x && peonblanco6.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonblanco7.position.x==torrenegra1.position.x && peonblanco7.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco7.position.x==torrenegra2.position.x && peonblanco7.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco7.position.x==caballonegro1.position.x && peonblanco7.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco7.position.x==caballonegro2.position.x && peonblanco7.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco7.position.x==alfilnegro1.position.x && peonblanco7.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco7.position.x==alfilnegro2.position.x && peonblanco7.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco7.position.x==reinanegra.position.x && peonblanco7.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco7.position.x==reynegro.position.x && peonblanco7.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco7.position.x==peonnegro1.position.x && peonblanco7.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco7.position.x==peonnegro2.position.x && peonblanco7.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco7.position.x==peonnegro3.position.x && peonblanco7.position.z==peonnegro3.position.z)
			{peonengro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco7.position.x==peonnegro4.position.x && peonblanco7.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco7.position.x==peonnegro5.position.x && peonblanco7.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco7.position.x==peonnegro6.position.x && peonblanco7.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco7.position.x==peonnegro7.position.x && peonblanco7.position.z==peonnegro7.position.z)
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco7.position.x==peonnegro8.position.x && peonblanco7.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonblanco8.position.x==torrenegra1.position.x && peonblanco8.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(peonblanco8.position.x==torrenegra2.position.x && peonblanco8.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(peonblanco8.position.x==caballonegro1.position.x && peonblanco8.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(peonblanco8.position.x==caballonegro2.position.x && peonblanco8.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(peonblanco8.position.x==alfilnegro1.position.x && peonblanco8.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(peonblanco8.position.x==alfilnegro2.position.x && peonblanco8.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(peonblanco8.position.x==reinanegra.position.x && peonblanco8.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(peonblanco8.position.x==reynegro.position.x && peonblanco8.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(peonblanco8.position.x==peonnegro1.position.x && peonblanco8.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(peonblanco8.position.x==peonnegro2.position.x && peonblanco8.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(peonblanco8.position.x==peonnegro3.position.x && peonblanco8.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(peonblanco8.position.x==peonnegro4.position.x && peonblanco8.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(peonblanco8.position.x==peonnegro5.position.x && peonblanco8.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(peonblanco8.position.x==peonnegro6.position.x && peonblanco8.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(peonblanco8.position.x==peonnegro7.position.x && peonblanco8.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(peonblanco8.position.x==peonnegro8.position.x && peonblanco8.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(peonnegro1.position.x==torreblanca1.position.x && peonnegro1.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro1.position.x==torreblanca2.position.x && peonnegro1.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro1.position.x==caballoblanco1.position.x && peonnegro1.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro1.position.x==caballoblanco2.position.x && peonnegro1.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro1.position.x==alfilblanco1.position.x && peonnegro1.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro1.position.x==alfilblanco2.position.x && peonnegro1.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro1.position.x==reinablanca.position.x && peonnegro1.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro1.position.x==reyblanco.position.x && peonnegro1.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro1.position.x==peonblanco1.position.x && peonnegro1.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro1.position.x==peonblanco2.position.x && peonnegro1.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro1.position.x==peonblanco3.position.x && peonnegro1.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro1.position.x==peonblanco4.position.x && peonnegro1.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro1.position.x==peonblanco5.position.x && peonnegro1.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro1.position.x==peonblanco6.position.x && peonnegro1.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro1.position.x==peonblanco7.position.x && peonnegro1.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro1.position.x==peonblanco8.position.x && peonnegro1.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro2.position.x==torreblanca1.position.x && peonnegro2.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro2.position.x==torreblanca2.position.x && peonnegro2.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro2.position.x==caballoblanco1.position.x && peonnegro2.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro2.position.x==caballoblanco2.position.x && peonnegro2.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro2.position.x==alfilblanco1.position.x && peonnegro2.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro2.position.x==alfilblanco2.position.x && peonnegro2.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro2.position.x==reinablanca.position.x && peonnegro2.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro2.position.x==reyblanco.position.x && peonnegro2.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro2.position.x==peonblanco1.position.x && peonnegro2.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro2.position.x==peonblanco2.position.x && peonnegro2.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro2.position.x==peonblanco3.position.x && peonnegro2.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro2.position.x==peonblanco4.position.x && peonnegro2.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro2.position.x==peonblanco5.position.x && peonnegro2.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro2.position.x==peonblanco6.position.x && peonnegro2.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro2.position.x==peonblanco7.position.x && peonnegro2.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro2.position.x==peonblanco8.position.x && peonnegro2.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro3.position.x==torreblanca1.position.x && peonnegro3.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro3.position.x==torreblanca2.position.x && peonnegro3.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro3.position.x==caballoblanco1.position.x && peonnegro3.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro3.position.x==caballoblanco2.position.x && peonnegro3.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro3.position.x==alfilblanco1.position.x && peonnegro3.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro3.position.x==alfilblanco2.position.x && peonnegro3.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro3.position.x==reinablanca.position.x && peonnegro3.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro3.position.x==reyblanco.position.x && peonnegro3.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro3.position.x==peonblanco1.position.x && peonnegro3.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro3.position.x==peonblanco2.position.x && peonnegro3.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro3.position.x==peonblanco3.position.x && peonnegro3.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro3.position.x==peonblanco4.position.x && peonnegro3.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro3.position.x==peonblanco5.position.x && peonnegro3.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro3.position.x==peonblanco6.position.x && peonnegro3.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro3.position.x==peonblanco7.position.x && peonnegro3.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro3.position.x==peonblanco8.position.x && peonnegro3.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro4.position.x==torreblanca1.position.x && peonnegro4.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro4.position.x==torreblanca2.position.x && peonnegro4.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro4.position.x==caballoblanco1.position.x && peonnegro4.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro4.position.x==caballoblanco2.position.x && peonnegro4.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro4.position.x==alfilblanco1.position.x && peonnegro4.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro4.position.x==alfilblanco2.position.x && peonnegro4.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro4.position.x==reinablanca.position.x && peonnegro4.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro4.position.x==reyblanco.position.x && peonnegro4.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro4.position.x==peonblanco1.position.x && peonnegro4.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro4.position.x==peonblanco2.position.x && peonnegro4.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro4.position.x==peonblanco3.position.x && peonnegro4.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro4.position.x==peonblanco4.position.x && peonnegro4.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro4.position.x==peonblanco5.position.x && peonnegro4.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro4.position.x==peonblanco6.position.x && peonnegro4.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro4.position.x==peonblanco7.position.x && peonnegro4.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro4.position.x==peonblanco8.position.x && peonnegro4.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro5.position.x==torreblanca1.position.x && peonnegro5.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro5.position.x==torreblanca2.position.x && peonnegro5.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro5.position.x==caballoblanco1.position.x && peonnegro5.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro5.position.x==caballoblanco2.position.x && peonnegro5.position.z==caballoblanco2.position.z)
			{caballonegro2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro5.position.x==alfilblanco1.position.x && peonnegro5.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro5.position.x==alfilblanco2.position.x && peonnegro5.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro5.position.x==reinablanca.position.x && peonnegro5.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro5.position.x==reyblanco.position.x && peonnegro5.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro5.position.x==peonblanco1.position.x && peonnegro5.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro5.position.x==peonblanco2.position.x && peonnegro5.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro5.position.x==peonblanco3.position.x && peonnegro5.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro5.position.x==peonblanco4.position.x && peonnegro5.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro5.position.x==peonblanco5.position.x && peonnegro5.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro5.position.x==peonblanco6.position.x && peonnegro5.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro5.position.x==peonblanco7.position.x && peonnegro5.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro5.position.x==peonblanco8.position.x && peonnegro5.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro6.position.x==torreblanca1.position.x && peonnegro6.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro6.position.x==torreblanca2.position.x && peonnegro6.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro6.position.x==caballoblanco1.position.x && peonnegro6.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro6.position.x==caballoblanco2.position.x && peonnegro6.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro6.position.x==alfilblanco1.position.x && peonnegro6.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro6.position.x==alfilblanco2.position.x && peonnegro6.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro6.position.x==reinablanca.position.x && peonnegro6.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro6.position.x==reyblanco.position.x && peonnegro6.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro6.position.x==peonblanco1.position.x && peonnegro6.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro6.position.x==peonblanco2.position.x && peonnegro6.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro6.position.x==peonblanco3.position.x && peonnegro6.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro6.position.x==peonblanco4.position.x && peonnegro6.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro6.position.x==peonblanco5.position.x && peonnegro6.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro6.position.x==peonblanco6.position.x && peonnegro6.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro6.position.x==peonblanco7.position.x && peonnegro6.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro6.position.x==peonblanco8.position.x && peonnegro6.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro7.position.x==torreblanca1.position.x && peonnegro7.position.z==torreblanca1.position.z)
			{torreblanca.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro7.position.x==torreblanca2.position.x && peonnegro7.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro7.position.x==caballoblanco1.position.x && peonnegro7.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro7.position.x==caballoblanco2.position.x && peonnegro7.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro7.position.x==alfilblanco1.position.x && peonnegro7.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro7.position.x==alfilblanco2.position.x && peonnegro7.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro7.position.x==reinablanca.position.x && peonnegro7.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro7.position.x==reyblanco.position.x && peonnegro7.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro7.position.x==peonblanco1.position.x && peonnegro7.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro7.position.x==peonblanco2.position.x && peonnegro7.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro7.position.x==peonblanco3.position.x && peonnegro7.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro7.position.x==peonblanco4.position.x && peonnegro7.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro7.position.x==peonblanco5.position.x && peonnegro7.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro7.position.x==peonblanco6.position.x && peonnegro7.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro7.position.x==peonblanco7.position.x && peonnegro7.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro7.position.x==peonblanco8.position.x && peonnegro7.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(peonnegro8.position.x==torreblanca1.position.x && peonnegro8.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(peonnegro8.position.x==torreblanca2.position.x && peonnegro8.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(peonnegro8.position.x==caballoblanco1.position.x && peonnegro8.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(peonnegro8.position.x==caballoblanco2.position.x && peonnegro8.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(peonnegro8.position.x==alfilblanco1.position.x && peonnegro8.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(peonnegro8.position.x==alfilblanco2.position.x && peonnegro8.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(peonnegro8.position.x==reinablanca.position.x && peonnegro8.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(peonnegro8.position.x==reyblanco.position.x && peonnegro8.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(peonnegro8.position.x==peonblanco1.position.x && peonnegro8.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(peonnegro8.position.x==peonblanco2.position.x && peonnegro8.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(peonnegro8.position.x==peonblanco3.position.x && peonnegro8.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(peonnegro8.position.x==peonblanco4.position.x && peonnegro8.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(peonnegro8.position.x==peonblanco5.position.x && peonnegro8.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(peonnegro8.position.x==peonblanco6.position.x && peonnegro8.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(peonnegro8.position.x==peonblanco7.position.x && peonnegro8.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(peonnegro8.position.x==peonblanco8.position.x && peonnegro8.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(alfilblanco1.position.x==torrenegra1.position.x && alfilblanco1.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(alfilblanco1.position.x==torrenegra2.position.x && alfilblanco1.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(alfilblanco1.position.x==caballonegro1.position.x && alfilblanco1.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(alfilblanco1.position.x==caballonegro2.position.x && alfilblanco1.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(alfilblanco1.position.x==alfilnegro1.position.x && alfilblanco1.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(alfilblanco1.position.x==alfilnegro2.position.x && alfilblanco1.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(alfilblanco1.position.x==reinanegra.position.x && alfilblanco1.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(alfilblanco1.position.x==reynegro.position.x && alfilblanco1.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(alfilblanco1.position.x==peonnegro1.position.x && alfilblanco1.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(alfilblanco1.position.x==peonnegro2.position.x && alfilblanco1.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(alfilblanco1.position.x==peonnegro3.position.x && alfilblanco1.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(alfilblanco1.position.x==peonnegro4.position.x && alfilblanco1.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(alfilblanco1.position.x==peonnegro5.position.x && alfilblanco1.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(alfilblanco1.position.x==peonnegro6.position.x && alfilblanco1.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(alfilblanco1.position.x==peonnegro7.position.x && alfilblanco1.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(alfilblanco1.position.x==peonnegro8.position.x && alfilblanco1.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(alfilblanco2.position.x==torrenegra1.position.x && alfilblanco2.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(alfilblanco2.position.x==torrenegra2.position.x && alfilblanco2.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(alfilblanco2.position.x==caballonegro1.position.x && alfilblanco2.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(alfilblanco2.position.x==caballonegro2.position.x && alfilblanco2.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(alfilblanco2.position.x==alfilnegro1.position.x && alfilblanco2.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(alfilblanco2.position.x==alfilnegro2.position.x && alfilblanco2.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(alfilblanco2.position.x==reinanegra.position.x && alfilblanco2.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(alfilblanco2.position.x==reynegro.position.x && alfilblanco2.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(alfilblanco2.position.x==peonnegro1.position.x && alfilblanco2.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(alfilblanco2.position.x==peonnegro2.position.x && alfilblanco2.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(alfilblanco2.position.x==peonnegro3.position.x && alfilblanco2.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(alfilblanco2.position.x==peonnegro4.position.x && alfilblanco2.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(alfilblanco2.position.x==peonnegro5.position.x && alfilblanco2.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(alfilblanco2.position.x==peonnegro6.position.x && alfilblanco2.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(alfilblanco2.position.x==peonnegro7.position.x && alfilblanco2.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(alfilblanco2.position.x==peonnegro8.position.x && alfilblanco2.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(alfilnegro1.position.x==torreblanca1.position.x && alfilnegro1.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(alfilnegro1.position.x==torreblanca2.position.x && alfilnegro1.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(alfilnegro1.position.x==caballoblanco1.position.x && alfilnegro1.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(alfilnegro1.position.x==caballoblanco2.position.x && alfilnegro1.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(alfilnegro1.position.x==alfilblanco1.position.x && alfilnegro1.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(alfilnegro1.position.x==alfilblanco2.position.x && alfilnegro1.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(alfilnegro1.position.x==reinablanca.position.x && alfilnegro1.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(alfilnegro1.position.x==reyblanco.position.x && alfilnegro1.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(alfilnegro1.position.x==peonblanco1.position.x && alfilnegro1.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(alfilnegro1.position.x==peonblanco2.position.x && alfilnegro1.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(alfilnegro1.position.x==peonblanco3.position.x && alfilnegro1.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(alfilnegro1.position.x==peonblanco4.position.x && alfilnegro1.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(alfilnegro1.position.x==peonblanco5.position.x && alfilnegro1.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(alfilnegro1.position.x==peonblanco6.position.x && alfilnegro1.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(alfilnegro1.position.x==peonblanco7.position.x && alfilnegro1.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(alfilnegro1.position.x==peonblanco8.position.x && alfilnegro1.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(alfilnegro2.position.x==torreblanca1.position.x && alfilnegro2.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(alfilnegro2.position.x==torreblanca2.position.x && alfilnegro2.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(alfilnegro2.position.x==caballoblanco1.position.x && alfilnegro2.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(alfilnegro2.position.x==caballoblanco2.position.x && alfilnegro2.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(alfilnegro2.position.x==alfilblanco1.position.x && alfilnegro2.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(alfilnegro2.position.x==alfilblanco2.position.x && alfilnegro2.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(alfilnegro2.position.x==reinablanca.position.x && alfilnegro2.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(alfilnegro2.position.x==reyblanco.position.x && alfilnegro2.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(alfilnegro2.position.x==peonblanco1.position.x && alfilnegro2.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(alfilnegro2.position.x==peonblanco2.position.x && alfilnegro2.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(alfilnegro2.position.x==peonblanco3.position.x && alfilnegro2.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(alfilnegro2.position.x==peonblanco4.position.x && alfilnegro2.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(alfilnegro2.position.x==peonblanco5.position.x && alfilnegro2.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(alfilnegro2.position.x==peonblanco6.position.x && alfilnegro2.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(alfilnegro2.position.x==peonblanco7.position.x && alfilnegro2.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(alfilnegro2.position.x==peonblanco8.position.x && alfilnegro2.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(reinablanca.position.x==torrenegra1.position.x && reinablanca.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(reinablanca.position.x==torrenegra2.position.x && reinablanca.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(reinablanca.position.x==caballonegro1.position.x && reinablanca.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(reinablanca.position.x==caballonegro2.position.x && reinablanca.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(reinablanca.position.x==alfilnegro1.position.x && reinablanca.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(reinablanca.position.x==alfilnegro2.position.x && reinablanca.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(reinablanca.position.x==reinanegra.position.x && reinablanca.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(reinablanca.position.x==reynegro.position.x && reinablanca.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(reinablanca.position.x==peonnegro1.position.x && reinablanca.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(reinablanca.position.x==peonnegro2.position.x && reinablanca.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(reinablanca.position.x==peonnegro3.position.x && reinablanca.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(reinablanca.position.x==peonnegro4.position.x && reinablanca.position.z==peonnegro4.position.z)
			{peonengro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(reinablanca.position.x==peonnegro5.position.x && reinablanca.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(reinablanca.position.x==peonnegro6.position.x && reinablanca.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(reinablanca.position.x==peonnegro7.position.x && reinablanca.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(reinablanca.position.x==peonnegro8.position.x && reinablanca.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(reinanegra.position.x==torreblanca1.position.x && reinanegra.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(reinanegra.position.x==torreblanca2.position.x && reinanegra.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(reinanegra.position.x==caballoblanco1.position.x && reinanegra.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(reinanegra.position.x==caballoblanco2.position.x && reinanegra.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(reinanegra.position.x==alfilblanco1.position.x && reinanegra.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(reinanegra.position.x==alfilblanco2.position.x && reinanegra.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(reinanegra.position.x==reinablanca.position.x && reinanegra.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(reinanegra.position.x==reyblanco.position.x && reinanegra.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(reinanegra.position.x==peonblanco1.position.x && reinanegra.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(reinanegra.position.x==peonblanco2.position.x && reinanegra.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(reinanegra.position.x==peonblanco3.position.x && reinanegra.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(reinanegra.position.x==peonblanco4.position.x && reinanegra.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(reinanegra.position.x==peonblanco5.position.x && reinanegra.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(reinanegra.position.x==peonblanco6.position.x && reinanegra.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(reinanegra.position.x==peonblanco7.position.x && reinanegra.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(reinanegra.position.x==peonblanco8.position.x && reinanegra.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(reyblanco.position.x==torrenegra1.position.x && reyblanco.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(reyblanco.position.x==torrenegra2.position.x && reyblanco.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(reyblanco.position.x==caballonegro1.position.x && reyblanco.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(reyblanco.position.x==caballonegro2.position.x && reyblanco.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(reyblanco.position.x==alfilnegro1.position.x && reyblanco.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(reyblanco.position.x==alfilnegro2.position.x && reyblanco.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(reyblanco.position.x==reinanegra.position.x && reyblanco.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(reyblanco.position.x==reynegro.position.x && reyblanco.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(reyblanco.position.x==peonnegro1.position.x && reyblanco.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(reyblanco.position.x==peonnegro2.position.x && reyblanco.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(reyblanco.position.x==peonnegro3.position.x && reyblanco.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(reyblanco.position.x==peonnegro4.position.x && reyblanco.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(reyblanco.position.x==peonnegro5.position.x && reyblanco.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(reyblanco.position.x==peonnegro6.position.x && reyblanco.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(reyblanco.position.x==peonnegro7.position.x && reyblanco.position.z==peonnegro7.position.z)
			{peonengro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(reyblanco.position.x==peonnegro8.position.x && reyblanco.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
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
			if(reynegro.position.x==torreblanca1.position.x && reynegro.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(reynegro.position.x==torreblanca2.position.x && reynegro.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(reynegro.position.x==caballoblanco1.position.x && reynegro.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(reynegro.position.x==caballoblanco2.position.x && reynegro.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(reynegro.position.x==alfilblanco1.position.x && reynegro.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(reynegro.position.x==alfilblanco2.position.x && reynegro.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(reynegro.position.x==reinablanca.position.x && reynegro.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(reynegro.position.x==reyblanco.position.x && reynegro.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(reynegro.position.x==peonblanco1.position.x && reynegro.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(reynegro.position.x==peonblanco2.position.x && reynegro.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(reynegro.position.x==peonblanco3.position.x && reynegro.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(reynegro.position.x==peonblanco4.position.x && reynegro.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(reynegro.position.x==peonblanco5.position.x && reynegro.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(reynegro.position.x==peonblanco6.position.x && reynegro.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(reynegro.position.x==peonblanco7.position.x && reynegro.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(reynegro.position.x==peonblanco8.position.x && reynegro.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
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
			if(caballoblanco1.position.x==torrenegra1.position.x && caballoblanco1.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(caballoblanco1.position.x==torrenegra2.position.x && caballoblanco1.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(caballoblanco1.position.x==caballonegro1.position.x && caballoblanco1.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(caballoblanco1.position.x==caballonegro2.position.x && caballoblanco1.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(caballoblanco1.position.x==alfilnegro1.position.x && caballoblanco1.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(caballoblanco1.position.x==alfilnegro2.position.x && caballoblanco1.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(caballoblanco1.position.x==reinanegra.position.x && caballoblanco1.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(caballoblanco1.position.x==reynegro.position.x && caballoblanco1.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(caballoblanco1.position.x==peonnegro1.position.x && caballoblanco1.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(caballoblanco1.position.x==peonnegro2.position.x && caballoblanco1.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(caballoblanco1.position.x==peonnegro3.position.x && caballoblanco1.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(caballoblanco1.position.x==peonnegro4.position.x && caballoblanco1.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(caballoblanco1.position.x==peonnegro5.position.x && caballoblanco1.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(caballoblanco1.position.x==peonnegro6.position.x && caballoblanco1.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(caballoblanco1.position.x==peonnegro7.position.x && caballoblanco1.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(caballoblanco1.position.x==peonnegro8.position.x && caballoblanco1.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((caballoblanco1.position.x==peonblanco1.position.x && caballoblanco1.position.z==peonblanco1.position.z)||
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
			   (caballoblanco1.position.x==reinablanca.position.x && caballoblanco1.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco1.position.x=bloquerojo.position.x;caballoblanco1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco1
	          /////////////////////////////////Caballo blanco 2//////////////////////////////////////////////////////////////////
		  if (caballoblanco2.position.x===bloquerojo.position.x && caballoblanco2.position.z===bloquerojo.position.z){
		    var bvcb2=bloqueverde;//Bloqueverdealfilblanco2
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
			if(caballoblanco2.position.x==torrenegra1.position.x && caballoblanco2.position.z==torrenegra1.position.z)
			{torrenegra1.position.y=100;torrenegra1.position.x=100;escena.remove(torrenegra1);}
		        if(caballoblanco2.position.x==torrenegra2.position.x && caballoblanco2.position.z==torrenegra2.position.z)
			{torrenegra2.position.y=100;torrenegra2.position.x=100;escena.remove(torrenegra2);}
		        if(caballoblanco2.position.x==caballonegro1.position.x && caballoblanco2.position.z==caballonegro1.position.z)
			{caballonegro1.position.y=100;caballonegro1.position.x=100;escena.remove(caballonegro1);}
		        if(caballoblanco2.position.x==caballonegro2.position.x && caballoblanco2.position.z==caballonegro2.position.z)
			{caballonegro2.position.y=100;caballonegro2.position.x=100;escena.remove(caballonegro2);}
		        if(caballoblanco2.position.x==alfilnegro1.position.x && caballoblanco2.position.z==alfilnegro1.position.z)
			{alfilnegro1.position.y=100;alfilnegro1.position.x=100;escena.remove(alfilnegro1);}
		        if(caballoblanco2.position.x==alfilnegro2.position.x && caballoblanco2.position.z==alfilnegro2.position.z)
			{alfilnegro2.position.y=100;alfilnegro2.position.x=100;escena.remove(alfilnegro2);}
		        if(caballoblanco2.position.x==reinanegra.position.x && caballoblanco2.position.z==reinanegra.position.z)
			{reinanegra.position.y=100;reinanegra.position.x=100;escena.remove(reinanegra);}
		        if(caballoblanco2.position.x==reynegro.position.x && caballoblanco2.position.z==reynegro.position.z)
			{reynegro.position.y=100;reynegro.position.x=100;escena.remove(reynegro);}
		        if(caballoblanco2.position.x==peonnegro1.position.x && caballoblanco2.position.z==peonnegro1.position.z)
			{peonnegro1.position.y=100;peonnegro1.position.x=100;escena.remove(peonnegro1);}
		        if(caballoblanco2.position.x==peonnegro2.position.x && caballoblanco2.position.z==peonnegro2.position.z)
			{peonnegro2.position.y=100;peonnegro2.position.x=100;escena.remove(peonnegro2);}
		        if(caballoblanco2.position.x==peonnegro3.position.x && caballoblanco2.position.z==peonnegro3.position.z)
			{peonnegro3.position.y=100;peonnegro3.position.x=100;escena.remove(peonnegro3);}
		        if(caballoblanco2.position.x==peonnegro4.position.x && caballoblanco2.position.z==peonnegro4.position.z)
			{peonnegro4.position.y=100;peonnegro4.position.x=100;escena.remove(peonnegro4);}
		        if(caballoblanco2.position.x==peonnegro5.position.x && caballoblanco2.position.z==peonnegro5.position.z)
			{peonnegro5.position.y=100;peonnegro5.position.y=100;peonnegro5.position.x=100;escena.remove(peonnegro5);}
		        if(caballoblanco2.position.x==peonnegro6.position.x && caballoblanco2.position.z==peonnegro6.position.z)
			{peonnegro6.position.y=100;peonnegro6.position.x=100;escena.remove(peonnegro6);}
		        if(caballoblanco2.position.x==peonnegro7.position.x && caballoblanco2.position.z==peonnegro7.position.z)
			{peonnegro7.position.y=100;peonnegro7.position.x=100;escena.remove(peonnegro7);}
		        if(caballoblanco2.position.x==peonnegro8.position.x && caballoblanco2.position.z==peonnegro8.position.z)
			{peonnegro8.position.y=100;peonnegro8.position.x=100;escena.remove(peonnegro8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((caballoblanco2.position.x==peonblanco1.position.x && caballoblanco2.position.z==peonblanco1.position.z)||
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
			   (caballoblanco2.position.x==reinablanca.position.x && caballoblanco2.position.z==reinablanca.position.z)){
				alert("No puedes comer piezas del mismo color");
				caballoblanco2.position.x=bloquerojo.position.x;caballoblanco2.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballoblanco2
	          /////////////////////////////////Caballo Negro 1///////////////////////////////////////////////////////////////////
		  if (caballonegro1.position.x===bloquerojo.position.x && caballonegro1.position.z===bloquerojo.position.z){
		    var bvcn1 = bloqueverde;
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
			if(caballonegro1.position.x==torreblanca1.position.x && caballonegro1.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(caballonegro1.position.x==torreblanca2.position.x && caballonegro1.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(caballonegro1.position.x==caballoblanco1.position.x && caballonegro1.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(caballonegro1.position.x==caballoblanco2.position.x && caballonegro1.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(caballonegro1.position.x==alfilblanco1.position.x && caballonegro1.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(caballonegro1.position.x==alfilblanco2.position.x && caballonegro1.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(caballonegro1.position.x==reinablanca.position.x && caballonegro1.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(caballonegro1.position.x==reyblanco.position.x && caballonegro1.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(caballonegro1.position.x==peonblanco1.position.x && caballonegro1.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(caballonegro1.position.x==peonblanco2.position.x && caballonegro1.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(caballonegro1.position.x==peonblanco3.position.x && caballonegro1.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(caballonegro1.position.x==peonblanco4.position.x && caballonegro1.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(caballonegro1.position.x==peonblanco5.position.x && caballonegro1.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(caballonegro1.position.x==peonblanco6.position.x && caballonegro1.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(caballonegro1.position.x==peonblanco7.position.x && caballonegro1.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(caballonegro1.position.x==peonblanco8.position.x && caballonegro1.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;peonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((caballonegro1.position.x==peonnegro1.position.x && caballonegro1.position.z==peonnegro1.position.z)||
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
			   (caballonegro1.position.x==reinanegra.position.x && caballonegro1.position.z==reinanegra.position.z)){
				alert("No puedes comer piezas del mismo color");
				caballonegro1.position.x=bloquerojo.position.x;caballonegro1.position.z=bloquerojo.position.z;
				bloqueverde.position.x=bloquerojo.position.x;bloqueverde.position.z=bloquerojo.position.z;
			}
		    }//fin prototype act
		  }//fin if caballonegro1
		  ////////////////////////////Caballo Negro 2///////////////////////////////////////////////////////////////////  
		  if (caballonegro2.position.x===bloquerojo.position.x && caballonegro2.position.z===bloquerojo.position.z){
		    var bvcn2 = bloqueverde;
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
			if(caballonegro2.position.x==torreblanca1.position.x && caballonegro2.position.z==torreblanca1.position.z)
			{torreblanca1.position.y=100;torreblanca1.position.x=100;escena.remove(torreblanca1);}
		        if(caballonegro2.position.x==torreblanca2.position.x && caballonegro2.position.z==torreblanca2.position.z)
			{torreblanca2.position.y=100;torreblanca2.position.x=100;escena.remove(torreblanca2);}
		        if(caballonegro2.position.x==caballoblanco1.position.x && caballonegro2.position.z==caballoblanco1.position.z)
			{caballoblanco1.position.y=100;caballoblanco1.position.x=100;escena.remove(caballoblanco1);}
		        if(caballonegro2.position.x==caballoblanco2.position.x && caballonegro2.position.z==caballoblanco2.position.z)
			{caballoblanco2.position.y=100;caballoblanco2.position.x=100;escena.remove(caballoblanco2);}
		        if(caballonegro2.position.x==alfilblanco1.position.x && caballonegro2.position.z==alfilblanco1.position.z)
			{alfilblanco1.position.y=100;alfilblanco1.position.x=100;escena.remove(alfilblanco1);}
		        if(caballonegro2.position.x==alfilblanco2.position.x && caballonegro2.position.z==alfilblanco2.position.z)
			{alfilblanco2.position.y=100;alfilblanco2.position.x=100;escena.remove(alfilblanco2);}
		        if(caballonegro2.position.x==reinablanca.position.x && caballonegro2.position.z==reinablanca.position.z)
			{reinablanca.position.y=100;reinablanca.position.x=100;escena.remove(reinablanca);}
		        if(caballonegro2.position.x==reyblanco.position.x && caballonegro2.position.z==reyblanco.position.z)
			{reyblanco.position.y=100;reyblanco.position.x=100;escena.remove(reyblanco);}
		        if(caballonegro2.position.x==peonblanco1.position.x && caballonegro2.position.z==peonblanco1.position.z)
			{peonblanco1.position.y=100;peonblanco1.position.x=100;escena.remove(peonblanco1);}
		        if(caballonegro2.position.x==peonblanco2.position.x && caballonegro2.position.z==peonblanco2.position.z)
			{peonblanco2.position.y=100;peonblanco2.position.x=100;escena.remove(peonblanco2);}
		        if(caballonegro2.position.x==peonblanco3.position.x && caballonegro2.position.z==peonblanco3.position.z)
			{peonblanco3.position.y=100;peonblanco3.position.x=100;escena.remove(peonblanco3);}
		        if(caballonegro2.position.x==peonblanco4.position.x && caballonegro2.position.z==peonblanco4.position.z)
			{peonblanco4.position.y=100;peonblanco4.position.x=100;escena.remove(peonblanco4);}
		        if(caballonegro2.position.x==peonblanco5.position.x && caballonegro2.position.z==peonblanco5.position.z)
			{peonblanco5.position.y=100;peonblanco5.position.x=100;escena.remove(peonblanco5);}
		        if(caballonegro2.position.x==peonblanco6.position.x && caballonegro2.position.z==peonblanco6.position.z)
			{peonblanco6.position.y=100;peonblanco6.position.x=100;escena.remove(peonblanco6);}
		        if(caballonegro2.position.x==peonblanco7.position.x && caballonegro2.position.z==peonblanco7.position.z)
			{peonblanco7.position.y=100;peonblanco7.position.x=100;escena.remove(peonblanco7);}
		        if(caballonegro2.position.x==peonblanco8.position.x && caballonegro2.position.z==peonblanco8.position.z)
			{peonblanco8.position.y=100;eonblanco8.position.x=100;escena.remove(peonblanco8);}
			///////////////////////////////////Piezas iguales///////////////////////////////////////////////
			if (((((((((((((((caballonegro2.position.x==peonnegro1.position.x && caballonegro2.position.z==peonnegro1.position.z)||
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
			   (caballonegro2.position.x==reinanegra.position.x && caballonegro2.position.z==reinanegra.position.z)){
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
  escena = new Environment();
  
  //////////////////////////////////////////////////Camara///////////////////////////////////////////////////////////////////////
  camara = new THREE.PerspectiveCamera();
  camara.position.z=130;
  camara.position.x=50; 
  ///////////////////////////////////////////Renderizador//////////////////////////////////////////////////////////////////////////
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
  document.body.appendChild(renderizador.domElement);
  
  /////////////////////////////////////////////////////Luces/////////////////////////////////////////////////////////////////////
  var luzblan= new THREE.PointLight(0xFFFFFF);
  var luzblan2=new THREE.PointLight(0xFFFFFF);
  var luzblan3= new THREE.PointLight(0xFFFFFF);
  
  luzblan.position.y=300; luzblan.position.z=50; luzblan.position.x=-50;
  luzblan2.position.y=300;  luzblan2.position.z=-150; luzblan2.position.x=50;
  luzblan3.position.y=300;  luzblan3.position.z=50;  luzblan3.position.x=150;
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
  torreblanca1 = new TorreBlanca(10,4.5,-10);
  torreblanca2 = new TorreBlanca(10,4.5,-80);
  torrenegra1 = new TorreNegra(80,4.5,-10);
  torrenegra2 = new TorreNegra(80,4.5,-80);
	
  escena.add(torreblanca1,torreblanca2,torrenegra1,torrenegra2);
  /////////////////////////////////////////Peones/////////////////////////////////////////////////////////////////
  peonblanco1 = new PeonBlanco(20,4.5,-10);
  peonblanco2 = new PeonBlanco(20,4.5,-20);
  peonblanco3 = new PeonBlanco(20,4.5,-30);
  peonblanco4 = new PeonBlanco(20,4.5,-40);
  peonblanco5 = new PeonBlanco(20,4.5,-50);
  peonblanco6 = new PeonBlanco(20,4.5,-60);
  peonblanco7 = new PeonBlanco(20,4.5,-70);
  peonblanco8 = new PeonBlanco(20,4.5,-80);
	
  peonnegro1 = new PeonNegro(70,4.5,-10);
  peonnegro2 = new PeonNegro(70,4.5,-20);
  peonnegro3 = new PeonNegro(70,4.5,-30);
  peonnegro4 = new PeonNegro(70,4.5,-40);
  peonnegro5 = new PeonNegro(70,4.5,-50);
  peonnegro6 = new PeonNegro(70,4.5,-60);
  peonnegro7 = new PeonNegro(70,4.5,-70);
  peonnegro8 = new PeonNegro(70,4.5,-80);
	
  escena.add(peonblanco1,peonblanco2,peonblanco3,peonblanco4,peonblanco5,peonblanco6,peonblanco7,peonblanco8);
  escena.add(peonnegro1,peonnegro2,peonnegro3,peonnegro4,peonnegro5,peonnegro6,peonnegro7,peonnegro8);
  /////////////////////////////////////////Alfiles/////////////////////////////////////////////////////////////////
  alfilblanco1 = new AlfilBlanco(10,4.5,-30);
  alfilblanco2 = new AlfilBlanco(10,4.5,-60);
  alfilnegro1 = new AlfilNegro(80,4.5,-30);
  alfilnegro2 = new AlfilNegro(80,4.5,-60);
	
  escena.add(alfilblanco1,alfilblanco2,alfilnegro1,alfilnegro2);
  ////////////////////////////////////////////Caballos/////////////////////////////////////////////////////////////
  caballoblanco1 = new CaballoBlanco(10,4.5,-20);
  caballoblanco2 = new CaballoBlanco(10,4.5,-70);
  caballonegro1 = new CaballoNegro(80,4.5,-20);
  caballonegro2 = new CaballoNegro(80,4.5,-70);
	
  escena.add(caballoblanco1,caballoblanco2,caballonegro1,caballonegro2);	
  ////////////////////////////////////////////Reinas/////////////////////////////////////////////////////////////////
  reinablanca = new ReinaBlanca(10,4.5,-40);
  reinanegra = new ReinaNegra(80,4.5,-40);
	
  escena.add(reinablanca,reinanegra);
  ///////////////////////////////////////////Reyes////////////////////////////////////////////////////////////////////
  reyblanco = new ReyBlanco(10,4.5,-50);
  reynegro = new ReyNegro(80,4.5,-50);
	
  escena.add(reyblanco,reynegro);	
  /////////////////////////////////////////Bloques////////////////////////////////////////////////////////////////////
  bloqueazul = new BloqueAzul(10,0,-10);
  escena.add(grupo,grupo2,grupo3,bloqueazul);
  //Luces
  escena.add(luzblan,luzblan2,luzblan3);
  escena.rotateX(Math.PI/4);
}

function loop() {
  requestAnimationFrame(loop);
  escena.sense();
  escena.plan();
  escena.act();
  renderizador.render(escena,camara);
} 
