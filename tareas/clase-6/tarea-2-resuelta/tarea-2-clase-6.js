/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el 
salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual,
salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).

evento click = crear label, input number, boton quitar

ELEMENTOS A VALIDAR: 
1- Cantidad de intergrantes añadidos? El usuario no ingresa ningun input.
2- Salarios ingresados:
    a- Solo numeros.
    b- Numeros enteros. (no negativos, no floats)
    c- Hasta 7 caracteres.
*/

//const $calcular = document.getElementById('calcular');
//$calcular.onsubmit = validarFormulario;

function validarFormulario(event) {
    const $form = document.querySelectorAll('.salario-anual');
    const salarios = [];
    const errores = {};

    if ($form.length === 0){
        return;
    }

    $form.forEach(function(input){
        salarios.push(input.value);
    });
    
    salarios.forEach(function(salario, index){
        errores[index + 1] = validarSalario(salario);
    })
    
    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        document.getElementById('ingreso-salarios').classList.add('was-validated');
        
        calcularSalario();
        mostrarResultados(); 
    }

    event.preventDefault;
}

function manejarErrores(errores) {
    //pasar por cada entry del object y verificar si tiene un error. Si tiene un error, cambiar el className
    //del input con error para que cambie el borde a rojo. Agregar un mensaje de error al div correspondiente.

    const keys = Object.keys(errores);
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            //agregar estilos al los inputs
            document.getElementById('ingreso-salarios').classList.remove('was-validated');
            document.getElementById(`salario-anual-${key}`).classList.add('is-invalid');

            if (document.querySelector(`#error-${key}`)) {
                document.querySelector(`#error-${key}`).remove();
            }

            const $mensajeError = document.createElement('label');
                $mensajeError.id = `error-${key}`;
                $mensajeError.classList = 'mensaje-error col-form-label font-weight-light';
                $mensajeError.innerText = `* ${error}`;
            document.getElementById(`${key}`).appendChild($mensajeError);
        } else {
            //document.getElementById('ingreso-salarios').classList.add('was-validated');
            document.getElementById(`salario-anual-${key}`).classList.remove('is-invalid');
            document.getElementById(`salario-anual-${key}`).classList.add('is-valid');

            if (document.querySelector(`#error-${key}`)) {
                document.querySelector(`#error-${key}`).remove();
            }
        }
    })

    return cantidadErrores;
}


function validarSalario(salario) {
    if (salario === ''){
        return 'Campo sin completar.';
    }

    if (/^[0-9]+$/.test(salario) === false) {
        return 'Este campo solamente acepta números.';
    }

    if (salario <= 0) {
        return 'Este campo solamente acepta valores positivos.';
    }

    if (salario.toString().length > 7) {
        return 'Este campo solamente acepta valores de hasta 7 caracteres.'
    }

    return '';
}



let idIntegrante = 0;
const $integrantes = document.querySelector('#integrantes');

document.querySelector('#agregar-integrante').onclick = function(event){
    contador(idIntegrante);
    crearIntegrante();

    event.preventDefault();
}

document.querySelector('#calcular').onclick = validarFormulario;

document.querySelector('#resetear').onclick = function(event){
    resetear();

    event.preventDefault();
}


function contador(numero){
    return idIntegrante = numero + 1;
}

function crearIntegrante() {
    const $div = document.createElement('div');
        $div.classList = 'integrante form-group row';
        $div.id = `${idIntegrante}`;

    const $label = document.createElement('label');
        $label.htmlFor = `salario-anual-${idIntegrante}`;
        $label.classList = 'col-sm-3 col-form-label';
        $label.textContent = `Integrante familiar #${idIntegrante}: `;
    const $input = document.createElement('input');
        $input.classList = 'salario-anual form-control col-sm-3';
        $input.id = `salario-anual-${idIntegrante}`;
        $input.placeholder = 'Ingrese salario anual';
    const $button = document.createElement('button');
        $button.classList = 'boton-remover bnt btn-danger btn-sm mt-2';
        $button.style = 'width: 25px; height: 25px; padding: initial';
        $button.id = `boton-remover-${idIntegrante}`;
        $button.textContent = 'X';

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


function calcularSalario(){
    const listado = obtenerListadoSalarios();
    document.querySelector('#salario-mayor').textContent = `$${numeroMayor(listado)}`;
    document.querySelector('#salario-menor').textContent = `$${numeroMenor(listado)}`;
    document.querySelector('#salario-promedio').textContent = `$${promedio(listado)}`;
    document.querySelector('#salario-promedio-mes').textContent = `$${promedioEn12(listado)}`;
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

function mostrarResultados(){
    document.querySelector('#resultados').classList.remove('d-none');
}


function resetear(){
    borrarIntegrantesTodos();
    ocultarResultados();
    resetearValidacionSalarios();
}

function ocultarResultados(){
    document.querySelector('#resultados').classList.add('d-none');
}

function resetearValidacionSalarios(){
    document.getElementById('ingreso-salarios').classList.remove('was-validated');
    document.getElementById('ingreso-salarios').classList.remove('form-control:valid');
}

function borrarIntegrantesTodos(){
    const $integrantesTodos = document.querySelectorAll('.integrante');
    for(let i=0; i < $integrantesTodos.length; i++){
        $integrantesTodos[i].remove();
    }
    return idIntegrante = 0;
}
