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
var torre1,torre2,torre3,torre4;

//////////////////////////////////////////////Torres////////////////////////////////////////////////////////////////////////////////////
function TorreBlanca(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  //Torre1
  var textura1 = new THREE.TextureLoader().load('marmolblanco.jpg');
  var marmolblanco = new THREE.MeshLambertMaterial({map:textura1});
  this.add(new THREE.Mesh(torrefinal11,marmolblanco));
  this.position.y=y;//5;
  this.position.z=z;//-10;
  this.position.x=x;//10;
  this.step = 0.5;
  //this.colision = 0;
  //this.radius = 1;
  //this.sensor = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
}

function TorreNegra(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
    //Torre1
  var textura2 = new THREE.TextureLoader().load('marmolnegro.jpg');
  var marmolnegro = new THREE.MeshLambertMaterial({map:textura2});
  this.add(new THREE.Mesh(torrefinal11,marmolnegro));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
  this.step = 0.5;
  //this.colision = 0;
  //this.radius = r;
  //this.sensor = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
}

function BloqueAzul(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzazul.jpg');
  var luzazul = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.1,10.1,10.1),luzazul));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

function BloqueRojo(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzroja.jpg');
  var luzroja = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzroja));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}
	
function BloqueMorado(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzmorada.jpeg');
  var luzmorada = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.1,10.1,10.1),luzmorada));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

function BloqueVerde(x=0,y=0,z=0){
  Agent.call(this,x,y,z);
  var texturaluz = new THREE.TextureLoader().load('luzverde.jpg');
  var luzverde = new THREE.MeshLambertMaterial({map:texturaluz});
  this.add(new THREE.Mesh(new THREE.BoxGeometry(10.2,10.2,10.2),luzverde));
  this.position.y=y;
  this.position.z=z;
  this.position.x=x;
}

TorreBlanca.prototype = new Agent();
TorreNegra.prototype = new Agent();
BloqueAzul.prototype = new Agent();
BloqueRojo.prototype = new Agent();
BloqueMorado.prototype = new Agent();
BloqueVerde.prototype = new Agent();

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
  torreblanca1 = new TorreBlanca(50,5,-50);
  torreblanca2 = new TorreBlanca(10,5,-80);
  torrenegra1 = new TorreNegra(80,5,-10);
  torrenegra2 = new TorreNegra(80,5,-80);
  /////////////////////////////////////////Bloques////////////////////////////////////////////////////////////////////
  bloqueazul = new BloqueAzul(10,0,-10);
  
  escena.add(grupo,grupo2,grupo3,bloqueazul);
  escena.add(torreblanca1,torreblanca2,torrenegra1,torrenegra2);
  //Luces
  escena.add(luzblan,luzblan2,luzblan3);
  escena.rotateX(Math.PI/4);
}

function loop() {
    window.onload=function(){document.onkeydown=desplazar};
    function desplazar(pieza)
    {
      var tecla = pieza.which;
          switch (tecla)
          {
              case 37 : //Izquierda
		if (bandera===1)
		{if (bloqueverde.position.x>=20)
		   {bloqueverde.translateX(-10);}}
		else{
		escena.remove(grupomorado);
		escena.remove(bloquerojo);
		if (bloqueazul.position.x>=20)
		{bloqueazul.translateX(-10);}}
                  break;
              case 38 :  //Arriba
		if (bandera===1)
		{if (bloqueverde.position.z>=-70)
		  {bloqueverde.translateZ(-10);}}
		else{
		escena.remove(grupomorado);
		escena.remove(bloquerojo);
		if (bloqueazul.position.z>=-70)
                  {bloqueazul.translateZ(-10);}}
                  break;
              case 39 :  //Derecha 
		if (bandera===1)
		{if (bloqueverde.position.x<=70)
		  {bloqueverde.translateX(10);}}
		else{
		escena.remove(grupomorado);
		escena.remove(bloquerojo);
		if (bloqueazul.position.x<=70)
		  {bloqueazul.translateX(10);}}
                  break;
              case 40 :  //Abajo
		if (bandera===1)
		{if (bloqueverde.position.z<=-20)
		  {bloqueverde.translateZ(10);}}
		else{
		escena.remove(grupomorado);
		escena.remove(bloquerojo);
		if (bloqueazul.position.z<=-20)
		  {bloqueazul.translateZ(10);}}
                  break;
///////////////////////////////////////////Selección de piezas/////////////////////////////////////////////////////////////////////
	      case 13 :  //Enter
	        if (bandera===1)
		{escena.remove(bloquerojo);
		 escena.remove(grupomorado);
		 escena.remove(bloqueverde);
		 if (torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z)
			{TorreBlanca.prototype.act = function(environment){
				if(torreblanca1.position.x===bloqueverde.position.x)
				  {this.step=0;}
				else
				  {if(torreblanca1.position.x<bloqueverde.position.x)
				  	{this.position.x += this.step;}
				   else
				  	{this.position.x -= this.step;}}
				if(torreblanca1.position.z===bloqueverde.position.z)
				  {this.step=0;}
				else
				  {if(torreblanca1.position.z<bloqueverde.position.z)
				  	{this.position.z += this.step;}
				   else
				  	{this.position.z -= this.step;}}
				}} 
		 bandera=0;}
		else{
		bloquerojo = new BloqueRojo(bloqueazul.position.x,0,bloqueazul.position.z);
		escena.add(bloquerojo);
		//////////////////////////Torres/////////////////////////////////////////////////////////////////////////
		if ((((torreblanca1.position.x===bloquerojo.position.x && torreblanca1.position.z===bloquerojo.position.z)||
		   (torreblanca2.position.x===bloquerojo.position.x && torreblanca2.position.z===bloquerojo.position.z))||
		   (torrenegra1.position.x===bloquerojo.position.x && torrenegra1.position.z===bloquerojo.position.z))||
		   (torrenegra2.position.x===bloquerojo.position.x && torrenegra2.position.z===bloquerojo.position.z))
		{
		  grupomorado = new THREE.Group();
		  for (i=1;i<=8;i++)
		  { bloquemorado = new BloqueMorado(bloquerojo.position.x,0,-i*10);
		    grupomorado.add(bloquemorado);}
		  for (i=1;i<=8;i++)
		  { bloquemorado = new BloqueMorado(i*10,0,bloquerojo.position.z);
		    grupomorado.add(bloquemorado);}
		  escena.add(grupomorado);  
		  bloqueverde = new BloqueVerde(bloquerojo.position.x,0,bloquerojo.position.z);
		  escena.add(bloqueverde);
		  bandera=1;	
		}}
		break;
          }
      
    }
  requestAnimationFrame(loop);
  escena.sense();
  escena.plan();
  escena.act();
  renderizador.render(escena,camara);
} 
