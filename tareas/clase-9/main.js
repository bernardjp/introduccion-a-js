
const btnStart = document.getElementById('btn-start');

const btnRed = document.getElementById('btn-red');
const btnYellow = document.getElementById('btn-yellow');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');

let colorSequence = [];

btnStart.onclick = function () {

    colorSequence.push(randomColor());

    document.getElementById('game-menu-block').style.visibility = 'hidden';
}




function randomColor() {
    let rng = Math.ceil((Math.random()) * 4);
    let randomColor;

    switch (rng) {
        case 1:
            randomColor = 'red';
            break;
        case 2:
            randomColor = 'yellow';
            break;
        case 3:
            randomColor = 'green';
            break;
        case 4:
            randomColor = 'blue';
            break;
    }

    return randomColor;
}