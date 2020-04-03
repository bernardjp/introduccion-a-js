/*
TAREA 1: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad
y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).
*/
/*
const $ingresarCantidad = document.querySelector('#ingresar-tamaño-familia');

$ingresarCantidad.onclick = function(){
    let cantidadFamiliares = Number(document.querySelector('#tamaño-familia').value);

    const listadoIntegrantes = document.querySelector('#listado-familiares');

    const inputCompletoFamiliar = document.createElement('div');
    const edadFamiliar = document.createElement('input');
    const integranteFamilia = document.createElement('label');
    let integranteFamiliaTexto = document.createTextNode('Edad familiar');
    //integranteFamilia.appendChild(integranteFamiliaTexto); esto sucede una vez que comienza el For?
    let integranteFamiliaLabel = integranteFamilia.appendChild(integranteFamiliaTexto);

    inputCompletoFamiliar.appendChild(integranteFamiliaLabel);
    inputCompletoFamiliar.appendChild(edadFamiliar);

    for(let i = 0; i < cantidadFamiliares; i++){
        //let integranteFamiliaTexto = document.createTextNode(`Edad familiar ${cantidadFamiliares[i]}`);
        listadoIntegrantes.appendChild(inputCompletoFamiliar);
    }
    return false
}
*/

//-----------------------------------------

//DEFINIMOS LOS .ONCLICK EVENTS. AHORA NECESITAMOS 2: UNO PARA ACEPTAR LA CANTIDAD DE FAMILIARES Y OTRO PARA
//PARA CALCULAR LAS EDADES.

document.querySelector('#ingresar-tamaño-familia').onclick = function(){
    const $cantidadFamiliares = document.querySelector('tamaño-familia'); //guardo el ELEMENTO de HTML en la var '$'
    const cantidadFamiliares = Number($cantidadFamiliares.value);         //guardo el VALOR del elemento en otra var

//En lugar de definir las funciones dentro del evento .onclick se las llama desde afuera. Las funciones se desarrollan
//por fuera de la funcion/evento. Desanidando las funciones se gana claridad y flexibilidad en el uso de las funciones.


}
