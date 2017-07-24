/**
 * Created by frans on 21/06/2017.
 */
/**
 * Descripción: Agrega un nuevo elemento al select que corresponde
 * @method addVal()
 * @param sel
 * @param inp
 * @param div
 * @return Void
 */

function addVal(sel,inp,div) {

    var select = document.getElementById(sel);
    var input = document.getElementById(inp);
    var c = document.createElement("option");
    c.text = input.value;
    select.options.add(c,(select.length+1));
    ocultarIngreso(div,inp);

}
/**
 * Descripción: Muestra el div correspondiente
 * @method mostrarIngreso()
 * @param elemento
 * @return Void
 */

function mostrarIngreso(elemento) {
    var div = document.getElementById(elemento);
    div.style.display='block'

}
/**
 * Descripción: oculta el div para ingreso de nuevos eleentos de selct
 * @method ocultarIngreso()
 * @param divId
 * @param inputID
 * @return Void
 */
function ocultarIngreso(divId, inputID) {
    var div = document.getElementById(divId);
    var input = document.getElementById(inputID);
    input.value="";
    div.style.display='none';
}




/////////////////////////////////////////////////////////////////////////////

/**
 * Descripción: llama las cunciones para cargar los select
 * @method cargar()
 * @return Void
 */
 function cargar() {
     cargarProfesores();
     cargarMaterias();
     cargarCarreras();
 }

/**
 * Descripción: llena el select con los valores del array
 * @method cargarCarreras()
 * @return Void
 */
function cargarCarreras() {
    var carrera = document.getElementById("s-carrera");
    var array=["Sistemas","Civil","Electronica","Computacion","Industrial"];
    for( var i =0;i<array.length;i++)
    {
        var c = document.createElement("option");
        c.text = array[i];
        carrera.options.add(c,(carrera.length+1));
    }
}

/**
 * Descripción: llena el select con los valores del array
 * @method cargarMaterias()
 * @return Void
 */
 function cargarMaterias() {
     var materia = document.getElementById("s-materia");
     var array=["Fisica","Fisica2","Analisis Matematico","Algebra","Computacion",
         "Computacion2","Laboratorio Computacion","Dibujo Tecnico","Base de Datos"];
     for( var i =0;i<array.length;i++)
     {
         var c = document.createElement("option");
         c.text = array[i];
         materia.options.add(c,(materia.length+1));
     }
 }
/**
 * Descripción: llena el select con los valores del array
 * @method cargarProfesores()
 * @return Void
 */
 function cargarProfesores() {
     var profesor = document.getElementById("s-profesor");
     var array=["Francisco","Julieta","Martin","Juan","Agustina","Mariano","Alejandro","Alejandra","Pedro"];
     for( var i =0;i<array.length;i++)
     {
         var c = document.createElement("option");
         c.text = array[i];
         profesor.options.add(c,(profesor.length+1));
     }
 }
/**
 * Descripción:  toma lo que hay en los select y forma un mensaje
 * @method sendMessage()
 * @return SweetAlert
 */
 function sendMessage() {
     var prof = document.getElementById("s-profesor").value;
     var mat = document.getElementById("s-materia").value;
     var carr = document.getElementById("s-carrera").value;
     var fecha =  document.getElementById("s-fecha").value;

     if(fecha!="")
     {
         swal({
                 title: "¿Esta seguro?",
                 text:"Su mensaje es:  El dia  "+fecha+"  los alumnos de  "+mat+" de "+carr+" no tendran clases con "+prof,
                 type: "warning",
                 showCancelButton: true,
                 confirmButtonColor: "#25dd60",
                 confirmButtonText: "Enviar",
                 cancelButtonText: "Cancelar",
                 closeOnConfirm: false,
                 closeOnCancel: false
             },
             function(isConfirm){
                 if (isConfirm) {
                     swal("Mensaje enviado", "Su mensaje ah sido enviado con exito", "success");
                 } else {
                     swal("Mensaje Canselado", "Su mensaje ah sido cancelado", "error");
                 }
             });
     }
     else
     {
         swal("Error", "Fecha Vacia", "error");
     }
 }
/**
 * Descripción:  toma lo que hay en el textarea  y lo muestra
 * @method customMessage()
 * @return SweetAlert
 */
function customMessage()
{
    text = document.getElementById("m2Txta").value;


    if(text!="")
    {
        swal({
                title: "¿Esta seguro?",
                text:"Su mensaje:  "+text,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#25dd60",
                confirmButtonText: "Enviar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm){
                if (isConfirm) {
                    swal("Mensaje enviado", "Su mensaje ah sido enviado con exito", "success");
                } else {
                    swal("Mensaje Canselado", "Su mensaje fue cancelado", "error");
                }
            });
    }
    else
    {
        swal("Error", "Sin texto", "error");
    }
    limpiar();

}
/**
 * Descripción : borra lo que hay en m2Txta
 * @method limpiar()
 * @return Void
 */
function limpiar()
{
    document.getElementById("m2Txta").value="";
}
/**
 * Descripción calcula las otras trabajadadas  y ademas escribe en la tabla ls resultados
 * @method calcular()
 * @return void
 */
function clacular() {
    var horas = document.getElementById("inputHoras");
    var pxh = document.getElementById("pxh");
    var resul=horas.value*pxh.value;

    if (horas != "" || pxh!= "") {
    document.getElementById("pesos").innerHTML = Math.round(resul);
    document.getElementById("dolares").innerHTML = Math.round(resul / 17);
    document.getElementById("euros").innerHTML = Math.round(resul / 20);
    document.getElementById("resultados").style.display = "block";
}
else
    swal("Error", "hora o precio por hora vacio", "error");


}
/**
 * Descripción  oculata la tabla resultados   y ademas borra el contenido de cada fila
 * @method oculatar()
 * @return void
 */
function ocultar() {

    document.getElementById("pesos").innerHTML="";
    document.getElementById("dolares").innerHTML="";
    document.getElementById("euros").innerHTML="";
    document.getElementById("resultados").style.display ="none";

}
/**
 * Descripción  abre popup para firmar
 * @method popup()
 * @return void
 */
function popup() {
    window.open("firma.html");
}

