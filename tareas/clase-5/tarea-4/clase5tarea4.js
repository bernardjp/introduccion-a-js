// TAREA 4: Calcular tiempo de los videos del canal ArgentinaPrograma.

const $ingresarDatosClase = document.querySelector('#ingresar-datos-video');
const $calcularDatosClase = document.querySelector('#calcular-total');
const $contadorClases = document.querySelector('contador-clases');

let cantidadDeClases = [];
let horasDeClase = [];
let minutosDeClase = [];
let segundosDeClase = [];

$ingresarDatosClase.onclick = function(){
    const numeroClase = Number(document.querySelector('#numero-clase').value);
    const duracionHoras = Number(document.querySelector('#duracion-horas').value);
    const duracionMinutos = Number(document.querySelector('#duracion-minutos').value);
    const duracionSegundos = Number(document.querySelector('#duracion-segundos').value);

    const contadorClase = document.querySelector('#contador-clase');
    const contadorClaseClon = contadorClase.cloneNode(true);

//buscar la forma de que no se sumen las mismas clases.
    cantidadDeClases.push(numeroClase);
    horasDeClase.push(duracionHoras);
    minutosDeClase.push(duracionMinutos);
    segundosDeClase.push(duracionSegundos);

//agregar una linea con el ultimo input que permita ser eliminada.

    /*
    for(let i = 0; i <= cantidadDeClases.length, i++;){
        if(cantidadDeClases[i] != numeroClase); //MAL: pushea en todas las iteraciones donde [i] sea distinto al nro de clase
            cantidadDeClases.push(numeroClase);
            horasDeClase.push(duracionHoras);
            minutosDeClase.push(duracionMinutos);
            segundosDeClase.push(duracionSegundos);  
    } 
    */

    document.querySelector('#listado-clases').appendChild(contadorClaseClon);

    document.querySelector('#clase-id').value = `Clase ${numeroClase}`;
    document.querySelector('#duracion-total-clase').value = `${duracionHoras}h ${duracionMinutos}min ${duracionSegundos}seg`

return false;
}

$calcularDatosClase.onclick = function(){
    function sumatoria(array){
        let sumatoriaAcumulada= 0;
        for(let i = 0; i < array.length; i++){
            sumatoriaAcumulada += array[i];
        }
    
    var sumatoriaDeHorasFinal = sumatoria(horasDeClase);
    var sumatoriaDeMinutosFinal = sumatoria(minutosDeClase);
    var sumatoriaDeSegundosFinal = sumatoria(segundosDeClase);

        for(let i = sumatoriaDeSegundosFinal; i >= 60; i - 60){
            sumatoriaDeMinutos.push(1);
            sumatoriaDeSegundos.push(-60);
        }

        for(let i = sumatoriaDeMinutosFinal; i >= 60; i - 60){
            sumatoriaDeHoras.push(1);
            sumatoriaDeMinutos.push(-60);
        }
        
        if(array === segundosDeClase){
            return sumatoriaDeSegundosFinal;
        } else if (array === minutosDeClase){
            return sumatoriaDeMinutosFinal;
        } else {
            return sumatoriaDeHorasFinal;
        }
    }
//buscar la forma de sumar en hexadecimal.

    let sumatoriaDeHoras = sumatoria(horasDeClase);
    let sumatoriaDeMinutos = sumatoria(minutosDeClase);
    let sumatoriaDeSegundos = sumatoria(segundosDeClase);

    document.querySelector('#clases-totales').value = `Clases totales: ${cantidadDeClases.length}`;
    document.querySelector('#duracion-total-curso').value = `${sumatoriaDeHoras}h ${sumatoriaDeMinutos}min ${sumatoriaDeSegundos}seg`; 
    
    return false;
}
