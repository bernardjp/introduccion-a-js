
function numeroMayor(numeros){
    let numeroMayorParcial = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > numeroMayorParcial){
            numeroMayorParcial = numeros[i];
        }
    }
    return numeroMayorParcial;
}

function numeroMenor(numeros){
    let numeroMenorParcial = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < numeroMenorParcial){
            numeroMenorParcial = numeros[i];
        }
    }
    return numeroMenorParcial;
}

function promedio(numeros){
    let acumulado = 0;
    for(let i = 0; i < numeros.length; i++){   
        acumulado = acumulado + numeros[i];
    }
    return (acumulado / numeros.length).toFixed(2);
}

function promedioEn12(numeros){
    let acumulado = 0;
    for(let i = 0; i < numeros.length; i++){   
        acumulado = acumulado + numeros[i];
    }
    return (acumulado / numeros.length / 12).toFixed(2);  
}
