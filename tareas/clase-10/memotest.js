
const arrayColores = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-light',
    'btn-dark',
];
const arrayColoresCompleto = arrayColores.concat(arrayColores);

let $inputsToCompare = [];
let errorCounter = 0;
let successCounter = 0;

const $botonStart = document.querySelector('#boton-start');
const $botonesJuego = document.querySelectorAll('.boton-juego');


$botonStart.onclick = function startGame(event){
    console.log(shuffleArray(arrayColoresCompleto));
    setUpBoard();
    
    event.preventDefault();
}

//En el caso que no se usen botones, el event .onclick se puede asignar a cualquier elenento del DOM
//ya que por efecto de Event Bubbling, hacer click en el boton es igual que hacer click en su contenedor.
//de esta forma se obtiene un elemento con una sola funcion en lugar de 16 elementos distintos.
$botonesJuego.forEach(function($boton){
    $boton.onclick = inputUsuario;
})

function inputUsuario(event){
    turnOnBoton(event);
    let comparisonResult = compareInputs(event);
    errorHandler(comparisonResult);

    if(successCounter === 8){
        winningScreen(successCounter, errorCounter);
    } 
    
    event.preventDefault;
}

//Resuelve la coloracion de los botones segun el resultado de la comparacion.

function errorHandler(result){
    
    if (result === 0) {
    }

    if (result === 1) {
        $inputsToCompare.forEach(input => {
            setTimeout(function(){input.className = 'boton-juego btn btn-sm btn-light';}, 1200);
        })
        $inputsToCompare = [];
        errorCounter++;
    }

    if (result === 2) {
        $inputsToCompare.forEach(input => {
            setTimeout(function(){input.disabled = true;}, 1200);
        })
        $inputsToCompare = [];
        successCounter++;
    }
}

//Compara los resultados de 2 inputs distintos.
function compareInputs(event){
    let $boton = event.target;
    //console.log($boton);
    $inputsToCompare.push($boton)
    //console.log($inputsToCompare);
    let result = 0;

    if ($inputsToCompare.length === 2){
        //disableInput();s
        if ($inputsToCompare[0].id === $inputsToCompare[1].id){
            result = 1;
            console.log('clickeaste el mismo boton!');
        } else if($inputsToCompare[0].className !== $inputsToCompare[1].className){
            result = 1;
            console.log('son distintos!');
        } else {
            result = 2;
            console.log('son iguales!');
        }
    }
    return result;
}

//Cambia el background color al hacer click.
function turnOnBoton(event){
    const $boton = event.target;
    console.log($boton);
    $boton.classList.remove('btn-light');
    $boton.classList.add(`${arrayColoresCompleto[$boton.id]}`);
}

//Para bloquear el input del usuario en un boton se le asigna una funcion vacia.
//ESTA FUNCION TODAVIA NO TIENE UTILIDAD. 
function disableUserInput() {
    $botonesJuego.forEach($boton => {
        $boton.onclick = function(){
        }
    })
}

function setUpBoard(){
    $botonesJuegoOg = document.querySelectorAll('.boton-juego');

    $botonesJuegoOg.forEach(boton => {
        boton.classList = 'boton-juego btn btn-sm btn-light';
        boton.disabled = false;
    });

    document.getElementById('gaming-board').className = '';
    document.getElementById('winning-screen').className = 'd-none';
    $botonStart.textContent = 'RESET GAME';
}

function winningScreen(success, error){
    setTimeout(function(){
    document.getElementById('gaming-board').className = 'd-none';
    document.getElementById('winning-screen').className = '';}, 1000)

    let totalRounds = success + error;
    document.getElementById('score').textContent = `Lo lograste en ${totalRounds} rondas.`
}

//Algorithmo Fisher-Yates para hacer un shuffle de un Array.
function shuffleArray (array){
    let indiceActual = array.length, indiceRandom, valorTemporal;

    for (i = indiceActual - 1; i > 0; i--){
        indiceRandom = Math.floor(Math.random() * (i + 1));
        valorTemporal = array[i];
        array[i] = array[indiceRandom];
        array[indiceRandom] = valorTemporal;
    }
    return array;
}


//Mecanica del juego.
//Comenzar juego mezcla el array original -> Click en dos botones -> les cambia el background color al asignado aleatoriamente con anterioridad ->
//si coinciden ambos botones quedan "encendidos" -> si no coinciden ambos botones vuelven a su color
//original -> Cuando todos los botones fueron "encendidos" se reinicia el juego.

