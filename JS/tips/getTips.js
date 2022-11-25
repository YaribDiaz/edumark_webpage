    const id='1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
    const rango='Tips!A:E'
    const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
    const url= `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`  


  
    var codigoUnicoCadaEvento=''
    
    const consultarCategoria = async() => {
        fetch(url)
           .then( (respuesta) => {
               return respuesta.json()
           })
           .then( (infoJson) => {
               let entries = infoJson.values;
               let numFilas = entries.length;
              // console.log('Número de filas: ' + numFilas);
   
               //Procesamos los datos
               let campos = [];
               let datos = [];
               var columnaCategoria=[]
               for(var f=0; f<numFilas; f++) {
                   let fila = entries[f];
                   
                   //Recorremos cada fila por columnas
                   //creamos un nuevo objeto
                   let obj = {};
                   for(var c=0; c<fila.length; c++) {
                       let celda = fila[c];
                       
                       if (f == 0){    //Si es la fila 0, son los nombres de los campos
                           //Anotamos el nombre en la lista de campos
                           campos.push(celda);
                           
                       }
                       else {  //En las ddemás filas
                           //Asignamos la propiedad que corresponda según la posición
                           obj[campos[c]] = celda;
                       }
                   }
                   //Añadimos el nuevo objeto a la colección de datos (si no es la primera fila)
                   if (f > 0) datos.push(obj);
               }
             // console.log(datos);
               
               return datos;
           })
           
           .then( (resultado) => {
               let categoria = '';
               var i=0
            
               
               resultado.forEach( res => {


                
                if(!res.Nombre_de_Categoria){
                  //  console.log('holass')
                }else{

                categoria += 
                `
                <li>
              <div class="product-container" style="background-image: url(https://images.pexels.com/photos/13096524/pexels-photo-13096524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);background-size: cover;background-position: center;">
                
                <p class="texto-categoria">${res.Nombre_de_Categoria}</p>

              </div>
            </li>
            
                `
                        
                       




                }  
                
               }  )
   
   
   
               document.getElementById('categoria-container').innerHTML = categoria;
               i=0





               
           })
           
           }

           
      



     const consultarAPI = async() => {
     fetch(url)
        .then( (respuesta) => {
            return respuesta.json()
        })
        .then( (infoJson) => {
            let entries = infoJson.values;
            let numFilas = entries.length;
           // console.log('Número de filas: ' + numFilas);

            //Procesamos los datos
            let campos = [];
            let datos = [];
            for(var f=0; f<numFilas; f++) {
                let fila = entries[f];
                
                //Recorremos cada fila por columnas
                //creamos un nuevo objeto
                let obj = {};
                for(var c=0; c<fila.length; c++) {
                    let celda = fila[c];
                     
                    if (f == 0){    //Si es la fila 0, son los nombres de los campos
                        //Anotamos el nombre en la lista de campos
                        campos.push(celda);
                        
                    }
                    else {  //En las ddemás filas
                        //Asignamos la propiedad que corresponda según la posición
                        obj[campos[c]] = celda;
                    }
                    
                }
                //Añadimos el nuevo objeto a la colección de datos (si no es la primera fila)
                if (f > 0) datos.push(obj);
            }
          // console.log(datos);
            
            return datos;
        })
        
        .then( (resultado) => {
            let eventos = '';
            var i=0

            try {
            resultado.forEach( res => {
                
                    //Colocar carta derecha y una izquierda
                    var direccion=''
                    if(i % 2){
                        // console.log(i+'impar')
                        direccion=''
                    }else{
                        direccion='right'
                    }






                    if(!res.Titulo_Tip){
                        throw 'Break';
                    }
                    eventos += ` 
                        
                    <div class="timeline-item">

                  
                    <div class="timeline-icon">
                    </div>
                    <div class="timeline-content ${direccion}">
                        <h2>${res.Titulo_Tip}</h2>
                        <p>
                            ${res.Contenido}
                        </p>
                        <img src="" alt="" srcset="">
                    </div>
                </div>
                    `
                    i++


                    

                

            })
        }catch (e) {
                if (e !== 'Break') throw e
              }
                        document.getElementById('timeline').innerHTML = eventos;
                     i=0
            })
        }





             
              
          
               

 consultarCategoria()
 consultarAPI()

 




const enlaces = document.querySelectorAll('texto-categoria')
console.log(enlaces)
enlaces.forEach( enlace => {
    enlace.addEventListener('click', () => {
        console.log('diste click a un enlace')
    })
})

