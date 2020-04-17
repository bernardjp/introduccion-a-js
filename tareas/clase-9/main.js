
const btnStart = document.getElementById('btn-start');

const btnRed = document.getElementById('btn-red');
const btnYellow = document.getElementById('btn-yellow');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');

const btnReset = document.getElementById('btn-reset');

let colorSequence = [];
let clickCounter = (-1);
let roundCounter = 1;

btnStart.onclick = function () {

    colorSequence.push(randomColor());
    //colorSequence.push('btn-red');

    //oculta el menu de inicio
    document.getElementById('game-menu-block').style.visibility = 'hidden';

    //Resalta brevemente el boton correspondiente al color asignado.
    window.setTimeout(lightUpAndDownColor, 500, colorSequence); 
}

function colorVerification(gameBtn) {
    clickCounter++;

    if (colorSequence[clickCounter] === gameBtn.id && clickCounter === colorSequence.length - 1){
        clickCounter = (-1);
        roundCounter++;

        //iniciamos la secuencia otra vez
        colorSequence.push(randomColor());

        //ERROR: ejecuta los colores de la secuencia al mismo tiempo
        lightUpAndDownColor(colorSequence)
        console.log(`COMENZAMOS RONDA: ${roundCounter}`);
    } else if (colorSequence[clickCounter] === gameBtn.id){
        //clickCounter++;
        console.log(`EXITO ${clickCounter}`);
    } else {
        finishGame();
    }
}


btnReset.onclick = function() {
    colorSequence = [];
    document.querySelector('#game-menu-block').style.visibility = '';
    document.querySelector('.game-btn-block').classList.remove('hidden');
    document.querySelector('.game-result').classList.add('hidden');
}



//Los botones de colores tienen que comparar un dato propio con el acumulado del array colorSequence.
//Si la comparacion falla, termina el juego. Caso contrario se reinicia la secuencia con un color más.
//La excepcion es si el array colorSequence esta vacio, presionar un boton no debería incurrir en error.

/*

    
let contadorDeClicks = 0;


    if (colorSequence.length === 0) {
        mensajePresionaStart();
    } else if (botonPresionado !== colorSequence[contadorDeClicks]) {
        mensajeDeError();
    } 

    
    colorSequence.push(randomColor());
    lightColorUp(colorSequence);



*/


function randomColor() {
    let rng = Math.ceil((Math.random()) * 4);
    let randomColor;

    switch (rng) {
        case 1:
            randomColor = 'btn-red';
            break;
        case 2:
            randomColor = 'btn-yellow';
            break;
        case 3:
            randomColor = 'btn-green';
            break;
        case 4:
            randomColor = 'btn-blue';
            break;
    }

    return randomColor;
}

function lightUpAndDownColor(colorSequence) {
    //console.log(colorSequence);
    colorSequence.forEach(function(color, index) {
        //console.log(document.getElementById(color));
        //document.getElementById(color).classList.add('active');
        let colorIndex = index + 1;
        let colorTimerMS = 800 * colorIndex;
        let colorPhaseMS = colorTimerMS + 550;

        window.setTimeout(lightUpColor, colorTimerMS, color);
        window.setTimeout(lightDownColor, colorPhaseMS, color);
    });
}

function lightUpColor(color) {
    document.getElementById(color).classList.remove('inactive');
    document.getElementById(color).classList.add('active');
}

function lightDownColor(color) {
    document.getElementById(color).classList.remove('active');
    document.getElementById(color).classList.add('inactive');
}

function finishGame() {
    console.log('ERROR');
    document.querySelector('.game-btn-block').classList.add('hidden');
    document.querySelector('.game-result').classList.remove('hidden');
    document.getElementById('game-result-score').innerText = `${finalScore(roundCounter, clickCounter)} pts`;

    roundCounter = 1;
}

function finalScore(rounds, clicks) {
    return (rounds * 10 + clicks);
}