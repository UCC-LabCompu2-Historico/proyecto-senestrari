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

function customMesage()
{
    text = document.getElementById("m2Txta").value;
    alert(text);
    limpiar();

}
function limpiar()
{
    document.getElementById("m2Txta").value="";
}
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



}
function ocultar() {
    document.getElementById("resultados").style.visibility ="hidden";
    document.getElementById("pesos").innerHTML="";
    document.getElementById("dolares").innerHTML="";
    document.getElementById("euros").innerHTML="";
    document.getElementById("inputPxH").value="";
    document.getElementById("inputPxH").disabled = false;

}
function firmar() {
    var chbox = document.getElementById("chboxFirma");
    var footer = document.getElementById("footerMJ");

}

