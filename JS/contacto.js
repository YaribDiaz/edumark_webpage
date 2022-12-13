const
  screen = {
    small: 0,
    medium: 200,
    large: 560
  };

// observe window resize
window.addEventListener('resize', resizeHandler);

// initial call
resizeHandler();

// calculate size
function resizeHandler() {

  // get window width
  const iw = window.innerWidth;
 
  // determine named size
  let size = null;
  for (let s in screen) {
    if (iw >= screen[s]) size = s;
  }

  //console.log(size);
  const container = document.querySelector('.img')

    // const fondo = document.createElement('img')
    // container.appendChild(fondo)

if(size=='large'){
    //console.log('large')
    container.setAttribute('src','../Imagenes/contacto.jpg')
}
if(size=='medium'){
    //console.log('medium')
    container.setAttribute('src','../Imagenes/contacto_movil.jpg')
}

  //FONDO DE PROGRAMA/EVENTO

}