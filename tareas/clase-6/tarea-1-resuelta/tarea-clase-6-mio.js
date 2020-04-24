/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector('#siguiente-paso').onclick = validarFormIntegrante;

function validarFormIntegrante(event) {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = $cantidadIntegrantes.value;
  const errores = validarIntegrantes(cantidadIntegrantes);

  const esExito = manejarErrores(errores) === 0;
  
  if (esExito){
    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
  }
 
  event.preventDefault();
};

function validarIntegrantes(cantidad){
  if (cantidad === ''){
    return '';
  }

  if (/^[0-9]+$/.test(cantidad) === false){
    return 'Este campo sola aceptan números enteros.';
  }

  if (cantidad >= 25){
    return 'Solamente se aceptan hasta 25 (veinticinco) integrantes.';
  }

  return '';
}

function manejarErrores(errores){
  let cantidadErrores = 0;

  if (errores){
    cantidadErrores++;
    const $inputIntegrante = document.getElementById('input-integrantes');
    //document.getElementById('cantidad-integrantes').classList.add('input-error');
    document.getElementById('cantidad-integrantes').classList.add('is-invalid');
    document.getElementById('ingreso-integrantes').classList.remove('was-validated');

    if (document.querySelector('.mensaje-error')){
      document.querySelector('.mensaje-error').remove();
    }

    const $mensajeError = document.createElement('label');      
      $mensajeError.classList = 'mensaje-error col-form-label pl-3 font-weight-light';
      $mensajeError.innerText = `* ${errores}`;
    $inputIntegrante.appendChild($mensajeError);
  } else {
    document.getElementById('cantidad-integrantes').classList.remove('input-error');
    document.getElementById('ingreso-integrantes').classList.add('was-validated');// cambia la class para validar

    if (document.querySelector('.mensaje-error')){
      document.querySelector('.mensaje-error').remove();
    }
  }

  return cantidadErrores;
}

document.querySelector('#calcular').onclick = validarFormEdades;

function validarFormEdades(event) {
  
  const edades = Object.values(obtenerEdadesIntegrantes());
  const erroresEdades = {}

  edades.forEach(function(edad, index){
    erroresEdades[index + 1] = validarEdades(edad);
  });

  const esExitoEdades = manejarErroresEdades(erroresEdades) === 0;

  if (esExitoEdades) {
    const edadesNum = [];
    edades.forEach(function(edad){
      edadesNum.push(Number(edad));
    });

    mostrarEdad('mayor', obtenerMayorNumero(edadesNum));
    mostrarEdad('menor', obtenerMenorNumero(edadesNum));
    mostrarEdad('promedio', obtenerPromedio(edadesNum));
    mostrarResultados();
  }

  event.preventDefault();
};


function validarEdades(edad){
  if (edad === ''){
    return 'Campo sin completar.';
  }

  if (/^[0-9]+$/.test(edad) === false){
    return 'Este campo sola aceptan números enteros.';
  }

  if (edad > 130){
    return 'Este campo solo acepta números por debajo de 130.';
  } 

  return '';
}


function manejarErroresEdades(errores) {
  const keys = Object.keys(errores);
  let cantidadErroresEdades = 0;

  keys.forEach(function(key){
    const errorEdad = errores[key];

    if (errorEdad) {
      cantidadErroresEdades++;
      document.getElementById(`input-${key}`).classList.add('is-invalid');
      document.getElementById('ingreso-edades').classList.remove('was-validated')

      if (document.getElementById(`mensaje-error-${key}`)){
        document.getElementById(`mensaje-error-${key}`).remove();
      }

      const $integranteDiv = document.getElementById(`integrante-${key}`);
      const $mensajeErrorEdad = document.createElement('label');
        $mensajeErrorEdad.id = `mensaje-error-${key}`;
        $mensajeErrorEdad.classList = 'mensaje-error col-form-label pl-3 font-weight-light';
        $mensajeErrorEdad.innerText = `* ${errorEdad}`;
      $integranteDiv.appendChild($mensajeErrorEdad);

    } else {
      document.getElementById(`input-${key}`).classList.remove('is-invalid');
      document.getElementById(`input-${key}`).classList.add('is-valid');
      //document.getElementById('ingreso-edades').classList.add('was-validated');

      if (document.getElementById(`mensaje-error-${key}`)){
        document.getElementById(`mensaje-error-${key}`).remove();
      }
    }
  });

  return cantidadErroresEdades;
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadIntegrantes) {

  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
    mostrarBotonReset();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
    $div.id = `integrante-${indice + 1}`;
    $div.classList = 'integrante mb-1 form-group row';

  const $label = document.createElement('label');
    $label.htmlFor = `input-${indice + 1}`;
    $label.classList = 'col-sm-3 col-form-label';
    $label.textContent = 'Edad del familiar #' + (indice + 1) + ':';
  const $input = document.createElement('input');
    $input.id = `input-${indice + 1}`;
    $input.classList = 'input-edad form-control col-sm-3';
    $input.placeholder = 'Ingrese edad en años.';
    //$input.defaultValue = null; //colocando null permite completar el objeto errores
    //$input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

function resetear() {
  resetearValidaciónIntegrantes();
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarBotonReset();
  ocultarResultados();
}

function resetearValidaciónIntegrantes(){
  document.getElementById('ingreso-integrantes').classList.remove('was-validated');
  document.getElementById('ingreso-integrantes').classList.remove('form-control:valid');
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').classList.add('d-none');
}

function mostrarBotonCalculo() {
  document.querySelector('#calcular').classList.remove('d-none');
}

function ocultarBotonReset() {
  document.querySelector('#resetear').classList.add('d-none');
}

function mostrarBotonReset() {
  document.querySelector('#resetear').classList.remove('d-none');
}

function ocultarResultados() {
  document.querySelector('#analisis').classList.add('d-none');
}

function mostrarResultados() {
  document.querySelector('#analisis').classList.remove('d-none');
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

/* FUNCION ORIGINAL
function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    if ($integrantes[i].value != ''){
      edades.push(Number($integrantes[i].value));  
    }
  }
  return edades;
}
*/

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = {};
  $integrantes.forEach(function(integrante, index){
    edades[index + 1] = integrante.value;
  });

  return edades;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
