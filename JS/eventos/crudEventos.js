
    const id='1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
    const rango='Programas!A:F'
    const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
    const url= `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`  



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
            resultado.forEach( res => {
                // console.log(res)
                // return res      
                eventos += `
                <div class="card-events">
                <div class="background" style="background-image: url('${res.imagen}');"></div>
                <div class="text">
                    <span class="featured">${res.pais}</span>
                    <span class="date">${res.fecha}</span>
                    <span class="date">${res.hora}</span>
                    <span class="estado-evento estado-evento-pasado">Evento pasado📆</span>
                    <h2 class="title">${res.titulo}</h2>
                    <h3 class="subtitle">${res.descripcion}</h3>
                    <div class="card-button button-space wrap"><a class="read-now button-blanco js-open-modal" id="open">Ver más</a>
                        <div id="mask" class="hidden"></div>
                    </div>
                    <div id="modal" class="hidden">
                        <h3 class="nombreBold tituloModal">Detalles de Evento</h3>
                        <div class="centrar-detalles-ventana">
                            <div class="contenedor-texto"><a class="nombreBold">Evento</a>
                                <p class="modal__title">${res.titulo}</p>
                                <a class="nombreBold">Lugar</a>
                                <p class="modal__content">${res.lugar}</p>
                                <a class="nombreBold">Hora</a>
                                <p class="modal__content">${res.fecha}</p>
                            </div>
                            <div class="background-detalles" style="background-image: url( "${res.imagen}" );">
                            </div>
                        </div><a class="nombreBold">Descripción</a>
                        <p class="modal__content">${res.descripcion}</p>
                        <a class="js-close" id="close">Cerrar</a>
                    </div>
                </div>
            </div>  `
            
            } )

            document.getElementById('contenedor').innerHTML = eventos;
            
        })
        }
        
consultarAPI()

        




     //https://jsonplaceholder.typicode.com/users/1





