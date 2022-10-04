import eventosListado from "./eventosListado.js";




function informacion(tech){





    const container = document.querySelector('.cards-events')
    const contenedor = document.createElement('div')
    contenedor.classList.add('card-events')
    container.appendChild(contenedor)
  
    //FONDO DE PROGRAMA/EVENTO
    const fondo = document.createElement('div')
    fondo.classList.add('background')
    fondo.style.backgroundImage = tech.imagen;
    contenedor.appendChild(fondo)

    //CREACION DIV PARA CONTENIDO DE TEXTO
    const texto = document.createElement('div')
    texto.classList.add('text')
    contenedor.appendChild(texto)

    //LUGAR DE EVENTO
    const featured =document.createElement('span')
    featured.classList.add('featured')
    featured.textContent=(tech.lugar)
    texto.appendChild(featured)
   
    
    //FECHA DE EVENTO

       
        
     

    const fecha = document.createElement('span')
    fecha.classList.add('date')
    fecha.textContent=(tech.fecha)
    texto.appendChild(fecha)
    
    //FECHA DE EVENTO
    const estadoDeEvento = document.createElement('span')
    estadoDeEvento.classList.add('estado-evento')
    texto.appendChild(estadoDeEvento)


        //  MES-DÍA-AÑO    MES-DÍA-AÑO    MES-DÍA-AÑO    
        //  MES-DÍA-AÑO    MES-DÍA-AÑO    MES-DÍA-AÑO    
        let date = new Date()
        let day = `${(date.getDate())}`.padStart(2,'0');
        let month = `${(date.getMonth()+1)}`.padStart(2,'0');
        let year = date.getFullYear();
        
        var fechaActual =`${month}/${day}/${year}`
        
        
        if (fechaActual>tech.fecha) {
            //console.log(tech.lugar+' ya pasó')
            estadoDeEvento.textContent=('Evento pasado')
            estadoDeEvento.classList.add('estado-evento-pasado')

        }
        if (fechaActual<tech.fecha) {
           // console.log(tech.lugar+' está próximo');
            estadoDeEvento.textContent=('Próximo')
            estadoDeEvento.classList.add('estado-evento-proximo')
        }
        if(fechaActual==tech.fecha) {
         // console.log(tech.lugar+' es hoy!');
          estadoDeEvento.textContent=('¡Es hoy!')
          estadoDeEvento.classList.add('estado-evento-hoy')
        }







    //NOMBRE DE EVENTO
    const titulo = document.createElement('h2')
    titulo.classList.add('title')
    titulo.textContent=(tech.titulo)
    texto.appendChild(titulo)

    //DESCRIPCION EVENTO
    const descripcion = document.createElement('h3')
    descripcion.classList.add('subtitle')
    descripcion.textContent=(tech.descripcion)
    texto.appendChild(descripcion)

    //INSERCION DIV PARA BOTONES
    const buttonCards = document.createElement('div')
    buttonCards.classList.add('card-button', 'button-space', 'wrap')
    texto.appendChild(buttonCards)

    //BOTON VER MAS
    const buttonVer = document.createElement('a')
    buttonVer.classList.add('read-now', 'button-blanco', 'js-open-modal')
    buttonVer.setAttribute('id','open')
    buttonVer.textContent=('Ver más')
    buttonCards.appendChild(buttonVer)
   

    const contenedorMayorModal=document.createElement('div')
    contenedorMayorModal.setAttribute('id','mask')
    contenedorMayorModal.classList.add('hidden')
    buttonCards.appendChild(contenedorMayorModal)

    //CONTENEDOR  MODAL
    const cntr= document.createElement('div')
    cntr.setAttribute('id','modal')
    cntr.classList.add('hidden')
    texto.appendChild(cntr)


    const nombreBold=document.createElement('a')
    nombreBold.classList.add('nombreBold')
    nombreBold.textContent=('Programa ')
    cntr.appendChild(nombreBold)

    const textoM= document.createElement('p')
    textoM.classList.add('modal__title')
    textoM.textContent=(tech.titulo)
    cntr.appendChild(textoM)


    const nombreBold2=document.createElement('a')
    nombreBold2.classList.add('nombreBold')
    nombreBold2.textContent=('País ')
    cntr.appendChild(nombreBold2)
    
    const textoM2 = document.createElement('p')
    textoM2.classList.add('modal__content')
    textoM2.textContent=(tech.lugar)
    cntr.appendChild(textoM2)


    const nombreBold3=document.createElement('a')
    nombreBold3.classList.add('nombreBold')
    nombreBold3.textContent=('Descripción')
    cntr.appendChild(nombreBold3)

    const textoM3 = document.createElement('p')
    textoM3.classList.add('modal__content')
    textoM3.textContent=(tech.descripcion)
    cntr.appendChild(textoM3)


    // const nombreBold4=document.createElement('a')
    // nombreBold4.classList.add('nombreBold')
    // nombreBold4.textContent=('Perfil ')
    // cntr.appendChild(nombreBold4)

    // const textoM4 = document.createElement('p')
    // textoM4.classList.add('modal__content')
    // textoM4.textContent=(tech.perfil)
    // cntr.appendChild(textoM4)
    

    // const nombreBold9=document.createElement('a')
    // nombreBold9.classList.add('nombreBold')
    // nombreBold9.textContent=('Descripción ')
    // cntr.appendChild(nombreBold9)

    // const textoM9 = document.createElement('p')
    // textoM9.classList.add('modal__content')
    // textoM9.textContent=(tech.descripcion)
    // cntr.appendChild(textoM9)
    
   
    //CERRAR MODAL
    const cerrarModal =document.createElement('a')
    cerrarModal.classList.add('js-close')
    cerrarModal.setAttribute('id','close')
    cerrarModal.textContent=('Cerrar')
    cntr.appendChild(cerrarModal)


    buttonVer.addEventListener('click', function () {
        cntr.classList.remove('hidden');
        contenedorMayorModal.classList.remove('hidden');
      });
      cerrarModal.addEventListener('click', function () {
        cntr.classList.add('hidden');
        contenedorMayorModal.classList.add('hidden');
      });
      contenedorMayorModal.addEventListener('click', function () {
        cntr.classList.add('hidden');
        contenedorMayorModal.classList.add('hidden');
      });
    
    
}




  




    




    function limpiador(){
        const elements = document.getElementsByClassName("card-events");
      
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
     
    }

 
   






    

    

var foco=false


var checkbox = document.querySelector("#checkbox");
checkbox.addEventListener('change', function() {
  
  
  if (this.checked) {
    console.log('prendido')
    foco=true
    limpiador()
    corre()
    
  } else{
    console.log('apagado')
    foco=false
    limpiador()
    corre()
    
  } 
}) 


function corre (){
  //  MES-DÍA-AÑO    MES-DÍA-AÑO    MES-DÍA-AÑO    
        //  MES-DÍA-AÑO    MES-DÍA-AÑO    MES-DÍA-AÑO    
        let date = new Date()
        let day = `${(date.getDate())}`.padStart(2,'0');
        let month = `${(date.getMonth()+1)}`.padStart(2,'0');
        let year = date.getFullYear();
        
        var fechaActual =`${month}/${day}/${year}`
//  console.log(fechaActual)
    
 // console.log('fecha actual= '+ fechaActual)

 const arrayForeach =eventosListado.forEach (function (tech){
  


  if(foco==false){
    informacion(tech)
    }

if(foco==true && fechaActual<=tech.fecha){
  informacion(tech)

}


  })

console.log(foco)

}



corre()
   



function fechasOrden(){

        var date = new Date()
        var day = `${(date.getDate())}`.padStart(2,'0');
        var month = `${(date.getMonth()+1)}`.padStart(2,'0');
        var year = date.getFullYear();
        
        //var fechaActual =`${year}/${month}/${day}`
        var fechaActual =new Date(year/month/day)
        
        var fechaEventos=new Date(2021/1/1);

        if (fechaActual.valueOf()<fechaEventos.valueOf()) {
          //console.log(tech.lugar+' ya pasó')
       
          console.log('estado-evento-pasado')

      }
      if (fechaActual.valueOf()>fechaEventos.valueOf()) {
         // console.log(tech.lugar+' está próximo');
        
          console.log('estado-evento-proximo')
      }
      if(fechaActual.valueOf()==fechaEventos.valueOf()) {
       // console.log(tech.lugar+' es hoy!');
       
        console.log('estado-evento-hoy')
      }
        


}

fechasOrden()

