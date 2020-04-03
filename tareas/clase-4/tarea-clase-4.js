// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function tarea1(){
    for(i = 3; i <=22; i+=3){
        console.log(i);
    }
}

//tarea1();


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function parte2(){
    let i = 11;
    while(i > 1){
        i--;   // i -= 1, i = i - 1;
        console.log(i)
    }
}

//parte2();


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function fizzBuzz(){
    for(i = 1; i <= 50; i++){
        let texto = ''; //texto 'vacio' = mas o menos false

        if(i% 3 === 0){
            texto = 'Fizz';
        }

        if(i% 5 === 0){
            texto += 'Buzz'; // texto + 'Buzz'; 
        }

        console.log(texto || i); //si el texto esta 'vacio' entonces es false por ende imprime 'i'
    }
}

//fizzBuzz();

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function prueba8(){


let ARRAY =  [12, 27, 43, 88, 113, 257];

function calcularPromedio(arrayACalcular){
        let arraySumatoria = 0;
        for (let i = 0; i < arrayACalcular.length; i++) {
            arraySumatoria += arrayACalcular[i]; // => arraySumatoria = arraySumatoria + arrayACalcular[i]
        }
    return arraySumatoria / arrayACalcular.length;
}

console.log('El promedio de este array es ' + calcularPromedio(ARRAY));

}
//prueba8();


/*OPERADOR TERNARIO. 
Funciona como un 'if'. 

function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00"); // estructura = (condicion) ? 'if true' : 'if false';
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee('1'));
  // expected output: "$2.00"

  console.log(getFee(''));
  // expected output: "$10.00"
*/


function prueba9(){
    let x = 0;
    let y = ++x; // primero se suma y luego se asigna el valor
    let z = x++; // primero se asigna el valor y luego se suma

    console.log(z)
}

//prueba9();


//FUNCTION EXPRESSION.

let x = 1; // la variable es de tipo numero. type of x = number 
let y = '1'; // la variable es de tipo string. type of y = string

let z = function(){  // la variable es de tipo funcion. Type of z = function;
                     //Esto se llama 'Function expression' o 'funcion expresada'.
    console.log('Esta es la funcion z');
}

//z();


function sumar(n1,n2){
    return n1+n2;
}

function restar(n1,n2){
    return n1-n2;
}

function tareaOperador(funcionOperador,n1,n2){
    console.log(funcionOperador(n1,n2)) // funcionOperador es un parametro de la funcion tareaOperador
}

tareaOperador(sumar,n1,n2); // se llama a la funcion por su nombre nada más. Si se colocara 'sumar()' en vez de 'sumar'
                            // entonces el programa intentaría resolver la funcion 'sumar' con los valores vacíos dando error.

