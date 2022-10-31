const id='1g3mr-QsB2FbP7HVNIho6aAkRrFF0b2HcwI_90y9eD8s'
const rango='RegistroForm!A:F'
const claveAPI = 'AIzaSyAj8EroyGMKAfgLOvYrgw8jd2q2RXnDomY';
const url= `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${rango}?key=${claveAPI}`  

  var PracticasForm= `
      <label for="genero">Qué carrera cursa?</label>
      <select id="carrera" name="genero">
          <option value="" disabled="disabled" selected="selected">Elige una opcion</option>
          <option value="Programacion/sistemas">Programación-Software-Sistemas</option>
          <option value="Marketing-Publicidad">Marketing-Publicidad</option>
          <option value="Comunicación Comercial">Comunicación Comercial</option>
          <option value="Turismo">Turismo</option>
          <option value="Venta">Ventas</option>
          <option value="Administración">Administración</option>
          <option value="Negocios">Negocios</option>
          <option value="Traducción/Interprete">Traducción/Interprete</option>
          <option value="Diseño Grafico" >Diseño Gráfico</option>
      </select>
  `

  var form =`
        <label for="genero">¿Qué tipo de alianza?</label>

        <select id="intencionTipo" name="genero">
            <option value="" disabled="disabled" selected="selected">Elige una opcion</option>
            <option value="Proveedor">Proveedor</option>
            <option value="Universidad/Colegio">Universidad/Colegio</option>
            <option value="Representación de Programa">Representación de Programa</option>
            <option value="Proyecto">Proyecto</option>
        </select>

        <label for="genero">Describa más su objetivo</label>
        <input type="textarea" name="" id="" placeholder="Descripción">
        <div id="contenedor" class="container"></div>
      `;

  
    var programaElegir=`
    <label for="genero">¿Qué programa le interesa estudiar?</label>

    <select id="selectPrograma" name="genero">
            <option value="" disabled="disabled" selected="selected">Elige una opcion</option>
            <option value="CursoVerano">Curso de verano</option>
            <option value="CursoIngles">Curso de Inglés</option>
            <option value="Grado">Grado/Licenciatura/Ingeniería</option>
            <option value="Master">Master</option>
            <option value="Diplomado">Diplomado</option>
        </select>

        <div id="contenedors" class="container"></div>
    `
    


    var formCursoVerano = `
    <label for="genero">¿Qué programa?</label>

        <select id="selectCursoVerano" name="genero">
            <option value="" disabled="disabled" selected="selected">Elige una opcion</option>
            <option value="Emprendimiento">Emprendimiento</option>
            <option value="Tenis">Tenis</option>
            <option value="Futbol">Grado/Licenciatura/Ingeniería</option>
            <option value="Baile">Master</option>
            <option value="Fitness">Diplomado</option>
            <option value="Box">Box</option>
            <option value="Inglés">Inglés</option>
        </select>
    `




      //<input type="submit" value="Registrarse"/>
      var select = document.getElementById('intencion');
      select.addEventListener('change',
        function(){
          var selectedOption = this.options[select.selectedIndex];
          console.log(selectedOption.value);
        //console.log(selectedOption.value + ': ' + selectedOption.text);
    
            if(selectedOption.value=='Alianzas'){
              document.getElementById('contenedor').innerHTML = form;

            }
      
            if(selectedOption.value=='PracticasProfesionales'){
              document.getElementById('contenedor').innerHTML = PracticasForm;
            }

            if(selectedOption.value=='ProgramaEducativo'){
              document.getElementById('contenedor').innerHTML = programaElegir;



              var select2 = document.getElementById('selectPrograma');
              select2.addEventListener('change',
              function(){
                var selectedOption = this.options[select2.selectedIndex];
                console.log(selectedOption.value);
              //console.log(selectedOption.value + ': ' + selectedOption.text);
                  if(selectedOption.value=='CursoVerano'){
                    document.getElementById('contenedors').innerHTML =formCursoVerano;
                  }else{
                    document.getElementById('contenedors').innerHTML =""
                  }
                  if(selectedOption.value==''){
                    document.getElementById('contenedor').innerHTML = ""
                  }
            });              


            }



      });

    
     


  





