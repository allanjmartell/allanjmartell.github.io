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
  step=0.01;
}

var loop= function(){ 
  //p(1);**
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  
  if(Math.abs(malla.position.x)>5)
    step=-step;
  malla.position.x+=step;
}
  
var escena,camara,renderizador,malla,step;

init(1);
loop();
