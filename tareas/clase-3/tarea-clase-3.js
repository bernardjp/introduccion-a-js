// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function tarea_1(){

const MI_NOMBRE = 'juan' //las variables definidas por nosotros van en mayuscula
const NOMBRE_PAPA = 'jorge'

const nombreUsuario = prompt('Cuál es tu nombre?'); //variable escrita por mi
const nombreUsuario = (prompt('Cuál es tu nombre?') || '').toLowerCase(); //variable escrita por Fabricio,
//utiliza el operador || que significa 'OR' para indicar que si el usuario no contesta con un caracter al prompt
//devuelve un string vacio. El string vacio sirve para igualarlo a 0 y que la consola imprima el mensaje de error.

if (nombreUsuario.toLowerCase() === MI_NOMBRE){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}.`)
}else if (nombreUsuario.toLowerCase() === NOMBRE_PAPA){
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi viejo.`)
}else if (nombreUsuario.trim().lenght === 0){    //.trim quita los espacios vacios antes y despues de un string.
    console.log('No ingresaste ningún nombre') 
}else{
    console.log(`Hola ${nombreUsuario}!`)
}

}

//tarea_1();

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function tarea_2(){

const edadUsuario = Number(prompt('Cúal es tu edad?')); //no considera que el usuario conteste con letras (ej: dieciocho)
const MI_EDAD = 32;

if (MI_EDAD < edadUsuario){
    console.log(`${nombreUsuario} tenés ${edadUsuario} años, sos más grande que yo.`);
}else if (MI_EDAD === edadUsuario){
    console.log(`${nombreUsuario} tenés ${edadUsuario} años, tenemos la misma edad.`);
}else if (MI_EDAD > edadUsuario){
    console.log(`${nombreUsuario} tenés ${edadUsuario} años, sos más joven que yo.`);
}else{
    console.log('No entiendo la pregunta.');
}

}

//tarea_2();

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


/*
const documentoUsuario = prompt('Buenas noches, posee documentos?').toLowerCase();
const conDocumento = 'si';
const sinDocumento = 'no'; 

const edadUsuario = prompt('Qué edad tenes?');
const edadAcceso = 18;

const conAccesoBar = console.log ('Adelante por favor.')
const sinAccesoBar = console.log ('Disculpe pero no puede entrar.')

const respuestaIncorrecta = console.log('Disculpe, pero no entedí la respuesta.')


if (documentoUsuario === conDocumento){
    edadUsuario
}else if (documentoUsuario === sinDocumento){
    sinAccesoBar
}else {respuestaIncorrecta};
*/

function tarea_3(){

const documentoUsuario = prompt('Buenas noches, posee documentos?').toLowerCase();
const CON_DOCUMENTO = 'si';
const SIN_DOCUMENTO = 'no'; 
const EDAD_ACCESO = 18; 

if (CON_DOCUMENTO === documentoUsuario){
    console.log ('Muy bien, acérquemelo por favor.');
    const edadUsuario = prompt('Qué edad tenés?'); //variable local, no aparece si se la busca globalmente..
    if (EDAD_ACCESO > edadUsuario){
        console.log('Disculpe pero no puede entrar. El que sigue!'); //la respuesta puede ser una constante
    } else if (EDAD_ACCESO <= edadUsuario){
        console.log('Adelante por favor.');
    }
} else if (SIN_DOCUMENTO === documentoUsuario){
    console.log ('Disculpe pero no puede entrar. El que sigue!');
} else {
    console.log ('Disculpe pero no entendí la respuesta.');
}

}

//tarea_3();

/*
const documentoUsuario = (prompt('Buenas noches, posee documentos?' || '')).toLowerCase();
const CON_DOCUMENTO = 'si';
const SIN_DOCUMENTO = 'no'; 
const EDAD_ACCESO = 18; 

if (CON_DOCUMENTO === documentoUsuario){
    console.log ('Muy bien, acérquemelo por favor.');
    const edadUsuario = prompt('Qué edad tenés?'); //variable local, no aparece si se la busca globalmente..
    
    if (EDAD_ACCESO > edadUsuario){
        console.log('Disculpe pero no puede entrar. El que sigue!'); //la respuesta puede ser una constante
    } else if (EDAD_ACCESO <= edadUsuario){
        console.log('Adelante por favor.');
    }
} else if (SIN_DOCUMENTO === documentoUsuario){
    console.log ('Disculpe pero no puede entrar. El que sigue!');
} else {
    console.log ('Disculpe pero no entendí la respuesta.');
}
*/

/*
const edadUsuario = prompt('Qué edad tenés?')

if (edadUsuario >= edadAcceso){
    console.log('Adelante por favor.')
} else if (edadUsuario < edadAcceso){
    console.log('Disculpe pero no puede entrar. El que sigue!')
} else {
    console.log ('Disculpe pero no entendí la respuesta.')
}
*/

/*
const edadUsuario = prompt('Qué edad tenes?');
const edadAcceso = 18;

const conAccesoBar = console.log ('Adelante por favor.')
const sinAccesoBar = console.log ('Disculpe pero no puede entrar.')

const respuestaIncorrecta = console.log('Disculpe, pero no entedí la respuesta.')
*/


