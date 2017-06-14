

/**
 * Descripción crea un mensaje predefinidio deacuerdo a lo seleccionado
 * @method tPredefinido()
 * @return void
 */
function tPredefinido() {
    var fecha;
    var carrera = document.getElementById("s-carrera").value;
    var materia = document.getElementById("s-materia").value;
    var profesor = document.getElementById("s-profesor").value;
    var dia, mes, anio;

    dia = document.getElementById("s-dia").value;
    mes = document.getElementById("s-mes").value;
    anio = 20 + document.getElementById("s-anio").value;
        fecha = dia + "/" + mes + "/" + anio;
        var tex = "Estimadods alumnos de " + carrera + "  el día " + fecha + ", No tendran clases de " + materia
            + ",  con el  profesor/a" + profesor;
    document.getElementById("lb1").textContent = tex;


}
/**
 * Descripción:  toma lo que hay en el textarea  y lo muestra
 * @method customMessage()
 * @return Alert
 */
function customMessage()
{
    text = document.getElementById("m2Txta").value;
    alert(text);
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
 * @return vaoid
 */
function clacular() {
    var horas, resul;
    horas = document.getElementById("inputPxH").value;
    if(horas!="")
    {
        document.getElementById("inputPxH").disabled = true;
        resul=horas*76;
        document.getElementById("pesos").innerHTML=resul;
        document.getElementById("dolares").innerHTML=resul*17;
        document.getElementById("euros").innerHTML=resul*19;
        document.getElementById("resultados").style.visibility = "visible";
    }



}/**
 * Descripción  oculata la tabla resultados   y ademas borra el contenido de cada fila
 * @method oculatar()
 * @return Valor que retorna
 */
function ocultar() {
    document.getElementById("resultados").style.visibility ="hidden";
    document.getElementById("pesos").innerHTML="";
    document.getElementById("dolares").innerHTML="";
    document.getElementById("euros").innerHTML="";
    document.getElementById("inputPxH").value="";
    document.getElementById("inputPxH").disabled = false;

}


