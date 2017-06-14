/**
 * Created by frans on 14/06/2017.
 */
/**
 * Descripción:  preparamos los listener
 * @method dibujar()
 * @return Void
 */
var draw;
function  comenzar() {
    canvas = document.getElementById("canvasFirma");
    ctx = canvas.getContext('2d');
    document.addEventListener('mousedown',presionar, false);
    document.addEventListener('mousemove',mover, false);
    document.addEventListener('mouseup',soltar, false);
    document.addEventListener('')

}

/**
 * Descripción:  mostramos que vamos a empezar a dibujar  y buscamos las coordenadas x e y
 * @method presionar()
 * @param usuario
 * @return Void
 */
function presionar(usuario) {
    draw = true;
    ctx.beginPath();
    ctx.moveTo(usuario.clientX, usuario.clientY);
}
/**
 * Descripción: preparamos el trazo, seleccionamos hacia donde vamos
 * @method mover()
 * @param usuario
 * @return Void
 */
function mover(usuario) {

    if (draw) {
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#00b4db';
        ctx.strokeStyle = '#3498DB';
        ctx.lineTo(usuario.clientX, usuario.clientY);
        ctx.stroke();
    }
}
/**
 * Descripción:  decimos que dejamos de  dibujar
 * @method soltar()
 * @return Void
 */
function soltar() {
    ctx.closePath();
    draw = false;
}