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
    resul=horas*76;
    alert('Usted va a  ganar $'+resul+" que los disfrute !!");

}