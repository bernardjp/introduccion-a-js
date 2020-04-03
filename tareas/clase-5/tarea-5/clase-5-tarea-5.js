//TAREA 5: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function(){
  //  const listadoCompleto = [Number(document.querySelectorAll('li').value)];  no funciona el .value en un Nodelist

    let listadoArray = [];
    const listadoCompleto = document.querySelectorAll('li'); // Me da como resultado un Nodelist

    for (let i = 0; i < listadoCompleto.length; i++){
        listadoArray.push(Number(listadoCompleto[i].innerText));
    }

    function promedio (array){
        let sumatoria = 0;
        for (let i = 0; i < array.length; i++){
            sumatoria = sumatoria + array[i];
        }

        let promedio = sumatoria / array.length;

        return document.querySelector('#numero-promedio').innerText = `El promedio es ${promedio}`; 
    }

    function numeroMenor (array){
        let numeroMenorParcial = array[0];
        for (let i = 0; i < array.length; i++){
            if(array[i] <= numeroMenorParcial){
                numeroMenorParcial = array[i]
            }
        }

        return document.querySelector('#numero-menor').innerText = `El número más pequeño es ${numeroMenorParcial}`; 
    }

    function numeroMayor (array){
        let numeroMayorParcial = array[0];
        for (let i = 0; i < array.length; i++){
            if(array[i] >= numeroMayorParcial){
                numeroMayorParcial = array[i]
            }
        }

        return document.querySelector('#numero-mayor').innerText = `El número más grande es ${numeroMayorParcial}`; 
    }

    function numeroFrecuente (array){
        let maximaFrecuencia = 0;
        let contadorParcial = 0;
        let numeroFrecuente;

        for(let i = 0; i < array.length; i++){
            for (let j = i; j < array.length; j++){
                if(array[i] === array[j]){
                    contadorParcial++;
                }
                if(contadorParcial > maximaFrecuencia){
                    maximaFrecuencia = contadorParcial;
                    numeroFrecuente = array[i];
                }
            }
            contadorParcial = 0;
        }

        return document.querySelector('#numero-frecuente').innerText = `El número más frecuente es ${numeroFrecuente}`;
    }

    promedio(listadoArray);
    numeroMenor(listadoArray);
    numeroMayor(listadoArray);
    numeroFrecuente(listadoArray);

    return console.log(listadoArray);
}

