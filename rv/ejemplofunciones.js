function init(p){
  var malla(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  
  escena= new THREE.Scene();
  escena.add(malla);
  
  camara= new THREE.PerspectiveCamera();
  renderizador= new THREE.WebGLRenderer();
  document.body.appendChild(renderizador.domElement);
  
  renderizador.setSize(700,700);
}

var main= function(p){  // Una función es un valor, por lo tanto,puede asignarse a una variable
  renderizador.render(escena,camara);
}
  
