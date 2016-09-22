function init(p){
  malla= new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara= new THREE.PerspectiveCamera();
  camara.position.z=5;
  camara.position.y=1;
  renderizador= new THREE.WebGLRenderer();
  document.body.appendChild(renderizador.domElement);
  
  renderizador.setSize(700,700);
}

//var main= function(p){  **// Una función es un valor, por lo tanto,puede asignarse a una variable
var loop= function(){ 
  //p(1);**
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  malla.rotateY(0.01);
}
  
var escena,camara,renderizador,malla;

//init(1);*
//main();*

//main(init);**
init(1);
loop();
