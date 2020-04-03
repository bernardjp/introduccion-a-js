/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el 
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//evento click = crear label, input number, boton quitar

let idIntegrante = 0;
const $integrantes = document.querySelector('#integrantes');

document.querySelector('#agregar-integrante').onclick = function(event){
    contador(idIntegrante);
    crearIntegrante();

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event){
    calcularSalario();
    mostrarResultados();    
    
    event.preventDefault();
}

document.querySelector('#resetear').onclick = function(event){
    resetear();

    event.preventDefault();
}


function contador(numero){
    return idIntegrante = numero + 1;
}

function crearIntegrante() {
    const $div = document.createElement('div');
        $div.className = 'integrante';
        $div.id = `${idIntegrante}`;

    const $label = document.createElement('label');
        $label.textContent = `Integrante familiar #${idIntegrante}: `;
    const $input = document.createElement('input');
        $input.className = 'salario-anual';
        $input.type = 'number';
        $input.placeholder = 'Ingrese salario anual';
    const $button = document.createElement('button');
        $button.id = `boton-remover-${idIntegrante}`;
        $button.textContent = 'Remover';

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($button);

    $integrantes.appendChild($div);

    document.querySelector(`#boton-remover-${idIntegrante}`).onclick = function(event){
        let idIntegranteRemover = $div.id;
        removerIntegrante(idIntegranteRemover);
    
        event.preventDefault();
    }
}

function removerIntegrante(numero){
    let $idRemover = document.getElementById(`${numero}`);

    $idRemover.parentElement.removeChild($idRemover);
    idIntegrante--;
}

function borrarIntegrantesTodos(){
    const $integrantesTodos = document.querySelectorAll('.integrante');
    for(let i=0; i < $integrantesTodos.length; i++){
        $integrantesTodos[i].remove();
    }

    return idIntegrante = 0;
}


function calcularSalario(){
    const listado = obtenerListadoSalarios();
    document.querySelector('#salario-mayor').textContent = numeroMayor(listado);
    document.querySelector('#salario-menor').textContent = numeroMenor(listado);
    document.querySelector('#salario-promedio').textContent = promedio(listado);
    document.querySelector('#salario-promedio-mes').textContent = promedioEn12(listado);
}

function obtenerListadoSalarios(){
    let $listadoSalarios = document.querySelectorAll('.salario-anual');
    let listadoSalarios = [];

    for(let i = 0; i < $listadoSalarios.length; i++){
        if(Number($listadoSalarios[i].value) > 0){
            listadoSalarios.push(Number($listadoSalarios[i].value));
        } 
    }    
    return listadoSalarios;
}

function resetear(){
    borrarIntegrantesTodos();
    ocultarResultados();
}

function mostrarResultados(){
    document.querySelector('#resultados').className = '';
}

function ocultarResultados(){
    document.querySelector('#resultados').className = 'oculto';
}
