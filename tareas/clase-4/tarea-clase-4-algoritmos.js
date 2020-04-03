//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

function ejercicio_1(){
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}

//ejercicio_1();

/*
Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
*/

function ejercicio_2(){
    for (let i = 1; i <= 100; i++){
        if(i% 2 !==0){
            console.log(i)
        }
    }
}

//ejercicio_2();

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/

function ejercicio_3(){
    for (let i = 1; i <= 10; i++){
        console.log(i * 7)
    }
}

//ejercicio_3();

/*
 Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

function ejercicio_4(){

let multiplicando = 0; //acumulador

function tablas1A9(){  
for (let i = 0; i <= 10; i++){
        if (multiplicando < 10 && i === 10){
            tablas1A9(); //recursion
        }else if (i === 0){
            multiplicando = multiplicando +1;
        }else if(multiplicando < 10){
            console.log(`${multiplicando} x ${i} = ${multiplicando * i}`);
        }
    }
}
tablas1A9();

}

//ejercicio_4();

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10] 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/

function ejercicio_5(){
    const array = [1,2,3,4,5,6,7,8,9,10];

    function sumatoria(arrayASumar){
        let sumatoria = 0;
        for(i = 0; i < arrayASumar.length; i++){
            sumatoria += arrayASumar[i];
        }
        return sumatoria;
    }

    console.log(`La sumatoria es ${sumatoria(array)}`)
}

//ejercicio_5();

/* 
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
*/

function ejercicio_6(){
    const array = [1,2,3,4,5,6,7,8,9,10];

    function factorial(valoresArray){
        let factorialAcumulado = 1;
        for(let i = 9; i > 0; i--){    //let i = 9 donde 9 es la ultima ubicación dentro del array 
            factorialAcumulado = factorialAcumulado * valoresArray[i];
        }
        return factorialAcumulado;
    }

    console.log(factorial(array))
}

//ejercicio_6();

/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

function ejercicio_7(){
    for(let i = 10; i <= 30; i++){
        if(i% 2 !== 0){
            console.log(i)
        }
    }
}

//ejercicio_7(); 

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/

function ejercicio_8(){
    const tempACalcular = prompt('Indique una temperatura en Celsius')
    function celsius2Fahrenheit(tempEnCelsius){
        return (tempEnCelsius * 9 / 5) + 32; 
    }
    alert(`La temperatura en Fahrenheit es F°${celsius2Fahrenheit(tempACalcular)}`)
}


//ejercicio_8();

/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/

function ejercicio_9(){
    const tempACalcular = prompt('Indique una temperatura en Fahrenheit')
    function celsius2Fahrenheit(tempEnFahrenheit){
        return ((tempEnFahrenheit - 32)) * 5 / 9; 
    }
    alert(`La temperatura en Celsius es C°${celsius2Fahrenheit(tempACalcular)}`)
}

//ejercicio_9();

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/

function ejercicio_10(){
    const array = [121, 41, 49, 82, 135, 62.3];
    let sumatoria = 0;
    for(let i = 0; i < array.length; i++){
            sumatoria = sumatoria + array[i];
    }
    console.log(sumatoria);
}

//ejercicio_10();

/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

function ejercicio_11(){
    const array = [121, 41, 49, 82, 135, 62.3];

    function promedio(){
        let sumatoria = 0;
        for(let i = 0; i < array.length; i++){
            sumatoria = sumatoria + array[i]
        }
        return console.log(`El promedio del array es ${sumatoria / array.length}`);
    }
    promedio();
}

//ejercicio_11();

/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array
conteniendo solo los números positivos
*/

function ejercicio_12(){

const array1 = [121, -41, -49, 82, -135, 62.3];
const array2 = [-121, 41, 49, -82, 135, -62.3];

function mostrarNrosPositivos(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            console.log(array[i])
        }

    }
}

mostrarNrosPositivos(array1);
mostrarNrosPositivos(array2);

}

//ejercicio_12();

/*
Desafío de programación #13: Find the maximum number in an array of numbers
*/

function ejercicio_13(){

const array1 = [121, -41, -49, 82, -135, 62.3];
const array2 = [-121, 41, 49, -82, 135, -62.3];

function encontrarNroMayor(array){
    let nroMayorParcial = array[0]; //acumulador
    for(let i = 0; i < array.length; i++){
        if(array[i] >= nroMayorParcial){
            nroMayorParcial = array[i];
        }
    }
    return console.log(`El número mayor dentro del array es ${nroMayorParcial}`);
}

encontrarNroMayor();
}

//ejercicio_13();

/*
Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

function ejercicio_14(){

function serieFibonacci(){
    let nroAnteultimo = 0;
    let nroUltimo = 1;
    for(let i = 0; i < 10; i++){
        if(i === 0){
            console.log(nroAnteultimo);
        }else if(i === 1){
            console.log(nroUltimo);
        }else{
            nroCorriente = nroUltimo + nroAnteultimo;
            console.log(nroCorriente);

            nroAnteultimo = nroUltimo;
            nroUltimo = nroCorriente;
        }
    }
}

serieFibonacci();
}

//ejercicio_14();

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

function ejercicio_15(){

function nroFibonacci(ubicacionEnLaSerie){
    

    return console.log(nroEnLaSerie)
}
}

//ejercicio_15();

/*
    Desafío de programación #16: Create a function that will return a Boolean specifying if a number is prime. Crea una
funcion que retorne un Boolean si un numero es primo.
*/

function ejercicio_16(){

let boolNumeroIngresado = true;

function numeroPrimo(numeroIngresado){
    for(let i = 2; i < 9; i++){
        if(numeroIngresado !== 1 && numeroIngresado / i != numeroIngresado / numeroIngresado && numeroIngresado% i === 0){
            boolNumeroIngresado = false;
        }
    }
    
    return console.log(boolNumeroIngresado)
}

numeroPrimo(113)
}

//ejercicio_16();


/*
Desafío de programación #17: Calculate the sum of digits of a positive integer number. Calcula la suma de los
//digitos de un numero entero.
*/







/*
Desafío de programación #18: Print the first 100 prime numbers
*/

function ejercicio_18(){

let boolNumeroIngresado = true;

for(let a = 1; a < 100; a++){
    for(let i = 1; i < 9; i++){
        if(i === 1){
            boolNumeroIngresado = true;
        }else if(a !== 1 && a / i != a / a && a% i === 0){
            boolNumeroIngresado = false;
        }
    }

    if(boolNumeroIngresado === true){
        console.log(a)
    }
}

}

//ejercicio_18();

/*
Desafío de programación #19: Create a function that will return in an array the first "nPrimes" prime numbers greater
than a particular number "startAt". Crea una funcion que retorne enn un array los primeros "nPrimos" numeros primos mas
grandes que un numero particular "startAt".
*/

function ejercicio_19(){

let nPrimes = prompt('Ingresa la cantidad de números primos que necesitas. (Máximo 10)')
let startAt = prompt('Ingresa el número de dónde quieres comenzar. (Del 1 al 99)')  

function primesArray(nPrimes, startAt){
 
    let boolNumeroIngresado = true;
    let primesArrayPartial = [];

    for(let a = startAt; a < 100; a++){
        for(let i = 1; i < 9; i++){
            if(i === 1){
                boolNumeroIngresado = true;
            }else if(a !== 1 && a / i != a / a && a% i === 0){
                boolNumeroIngresado = false;
            }
        }

        if(boolNumeroIngresado === true && primesArrayPartial.length <= nPrimes){
            primesArrayPartial.push(a);
        }
    }

    return console.log(`Los ${nPrimes} números primos después de ${startAt} son ${primesArrayPartial}`)
}

primesArray(nPrimes, startAt);

}

//ejercicio_19();


/*
Desafío de programación #20: Rotate an array to the left 1 position. Rota un array para la izquierda una posición.
*/

function ejercicio_20(){

const ARRAY_ORIGINAL = [n1, n2, n3, n4, n5, n6];

    function rotarIzq(ARRAY){

        let copiarAlFinal = ARRAY.push(ARRAY_ORIGINAL[0]);
        let borrarElPrimero = ARRAY.shift();

        return console.log(ARRAY);
    }

rotarIzq(ARRAY_ORIGINAL);
}

//ejercicio_20();

/*
Desafío de programación #21: Rotate an array to the right 1 position.
*/

function ejercicio_21(){

    const ARRAY_ORIGINAL = [1, 2, 3, 4, 5, 6];
    
        function rotarDer(ARRAY){
    
            let copiarAlInicio = ARRAY.unshift(ARRAY_ORIGINAL[ARRAY_ORIGINAL.length - 1]);
            let borrarElUltimo = ARRAY.pop();
    
            return console.log(ARRAY);
        }
    
    rotarDer(ARRAY_ORIGINAL);
    }
    
//ejercicio_21();

/*
Desafío de programación #22: Reverse an array.
*/

function ejercicio_22(){

const ARRAY_OG = [1, 2, 3, 4, 5, 6];

let arrayInvertido = ARRAY_OG.reverse();

console.log(arrayInvertido);
}

//ejercicio_22();

/*
Desafío de programación #23: Reverse a string.
*/

function ejercicio_23(){

const STRING_OG = 'Desafío de programación #23: Reverse a string';

let stringToArray = STRING_OG.split(' ');
let stringInv = stringToArray.reverse();
let stringInvUnido = stringInv.join(' ');

console.log(stringInvUnido);
}

//ejercicio_23();

/*
Desafío de programación #24: Create a function that will merge two arrays and return the result as a new array
*/

function ejercicio_24(){

const ARRAY_1 = [1, 2, 3, 4, 5, 6];
const ARRAY_2 = ['A', 'B', 'C', 'D', 'E', 'F'];

let arrayUnido = ARRAY_1.concat(ARRAY_2);

console.log(arrayUnido);
}

//ejercicio_24();

function ejercicio_24(){

const ARRAY_1 = [1, 2, 3, 4, 5, 6];
const ARRAY_2 = ['A', 'B', 'C', 'D', 'E', 'F'];

function mergeArray(array1, array2){
    let mergedArray = array1.concat(array2);
    return console.log(mergedArray);
}
mergeArray(ARRAY_1, ARRAY_2);

}

//ejercicio_24();

/*
Desafío de programación #25: Create a function that will receive two arrays of numbers as arguments and return
an array composed of all the numbers that are either in the first array or second array but not in both.
*/

function ejercicio_25(){

const ARRAY_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const ARRAY_2 = [2, 4, 6, 8, 10, 12, 14];
let ARRAY_MERGED = arrayUnicos(ARRAY_1.concat(ARRAY_2));

function arrayUnicos(array){
    let a = array.concat();
        for(let i = 0; i <= array.length; i++){        //toma un elemento del array...
            for(let j = i+1; j <= array.length; j++){  //...y lo compara con todos los siguientes.
                if(a[i] === a[j])                      //si existe una igualdad...
                a.splice(i, 1);                        //...la elimina del array.
            }
        }
    return console.log(a)
}

}
//ejercicio_25();

// ALTERNATIVA SUPERADORA.

function ejercicio_25(){

const ARRAY_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const ARRAY_2 = [2, 4, 6, 8, 10, 12, 14];
    
function arrayUnicos(array1, array2){
    const arrayMerged = array1.concat(array2);               //guardamos el array mergeado en una constante a parte
    let arrayUnicos = arrayMerged;

        for(let i = 0; i <= arrayMerged.length; i++){        //toma un elemento del array...
            for(let j = i+1; j <= arrayMerged.length; j++){  //...y lo compara con todos los siguientes.
                if(arrayUnicos[i] === arrayUnicos[j])        //si existe una igualdad...
                arrayUnicos.splice(i, 1);                    //...la elimina del array.
            }
        }
    return console.log(arrayUnicos)
}
    
arrayUnicos(ARRAY_1, ARRAY_2);
}
//ejercicio_25();

/*
Desafío de programación #26: Create a function that will receive two arrays and will return an array with elements
that are in the first array but not in the second.
*/

function ejercicio_26(){

const ARRAY_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const ARRAY_2 = [2, 4, 6, 8, 10, 12, 14];

function arrayUnicos(array1, array2){
    let arrayFinal = array1;

    for(let i = 0; i <= array1.length; i++){
        for(let j = 0; j <= array2.length; j++){
            if(array1[i] === array2[j])
            arrayFinal.splice(i, 1);
        }
    }
    return console.log(arrayFinal);
}

arrayUnicos(ARRAY_1, ARRAY_2);
}
//ejercicio_26();

/*
Desafío de programación #27: Create a function that will receive an array of numbers as argument and will return
a new array with distinct elements
 */



/*
Desafío de programación #27: Create a function that will receive an array of numbers as argument and will return
a new array with distinct elements
*/



/*
Desafío de programación #28: Calculate the sum of first 100 prime numbers
*/



/*
Desafío de programación #29: Print the distance between the first 100 prime numbers
*/



/*
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size.
The numbers are received as strings and the result should be also provided as string.*/



/*
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size.
The numbers are received as strings and the result should be also provided as string.
*/



/*
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)*/
