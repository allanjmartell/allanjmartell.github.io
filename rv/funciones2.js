function init(p){
  malla= new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara= new THREE.PerspectiveCamera();
  camara.position.z=20;
  camara.position.y=1;
  renderizador= new THREE.WebGLRenderer();
  document.body.appendChild(renderizador.domElement);
  
  renderizador.setSize(700,700);
}

var a=0;

var loop= function(){ 
  //p(1);**
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  
  if(a<=10){
  a=(1+p);
  malla.position.x=a;}
}
  
var escena,camara,renderizador,malla;

init(1);
loop();
