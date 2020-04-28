
//Algorithmo Fisher-Yates para hacer un shuffle de un Array.

const arrayColores = [
    'background-color: red',
    'background-color: red',
    'background-color: orangered',
    'background-color: orangered',
    'background-color: yellow',
    'background-color: yellow',
    'background-color: green',
    'background-color: green',
    'background-color: darkcyan',
    'background-color: darkcyan',
    'background-color: darkblue',
    'background-color: darkblue',
    'background-color: blueviolet',
    'background-color: blueviolet',
];

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
