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
  this.actuator = new THREE.Mesh(torrefinal11,maderablanca);
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
  this.actuator = new THREE.Mesh(torrefinal11,maderanegra);
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
  this.actuator = new THREE.Mesh(peonfinal4,maderablanca);
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
  this.actuator = new THREE.Mesh(peonfinal4,maderanegra);
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
			if(torreblanca1.position.x<bvtb1.position.x)
			  torreblanca1.position.x += this.step;
			else
			  torreblanca1.position.x -= this.step;
		      }//fin if posicion x
		      if (this.colision!=1){
			if(torreblanca1.position.z<bvtb1.position.z)
			  torreblanca1.position.z += this.step;
			else
			  torreblanca1.position.z -= this.step;
		      }//fin if posicion z
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
		    }//fin prototype act
		  }//fin if peonnegro8
                bandera=0;
		}//fin if bandera
////////////////////////////////////////Movimientos de piezas/////////////////////////////////////////////////////////////////////////
		else{
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
		     grupomorado.add(bloquemorado);
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
		     grupomorado.add(bloquemorado);
		   }//fin if Peones negros
		//////////////////////////////////////////////Alfiles////////////////////////////////////////////////////////////

		escena.add(grupomorado);  
	        bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		escena.add(bloqueverde);
		bandera=1;	
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
  torreblanca1 = new TorreBlanca(10,5,-10);
  torreblanca2 = new TorreBlanca(10,5,-80);
  torrenegra1 = new TorreNegra(80,5,-10);
  torrenegra2 = new TorreNegra(80,5,-80);
	
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
