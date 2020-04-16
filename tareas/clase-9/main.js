
const btnStart = document.getElementById('btn-start');

const btnRed = document.getElementById('btn-red');
const btnYellow = document.getElementById('btn-yellow');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');

let colorSequence = [];

btnStart.onclick = function () {

    colorSequence.push(randomColor());

    //oculta el menu de inicio
    document.getElementById('game-menu-block').style.visibility = 'hidden';

    //Resalta brevemente el boton correspondiente al color asignado.
    window.setTimeout(lightUpColor, 1150, colorSequence); 
}


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

function lightUpColor(colorSequence) {
    //console.log(colorSequence);
    colorSequence.forEach(color => {
        //console.log(document.getElementById(color));
        document.getElementById(color).classList.add('active');
        window.setTimeout(lightDownColor, 800, color);
    });
}

function lightDownColor(color) {
    document.getElementById(color).classList.remove('active');
    document.getElementById(color).classList.add('inactive');
}