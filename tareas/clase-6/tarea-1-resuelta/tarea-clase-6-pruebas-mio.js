function pruebaValidarFormIntegrantes(){
    console.assert(
        validarIntegrantes('asdasda') === 'Este campo sola aceptan números enteros.',
        'La funcion validarIntegrantes no validó que el input conste de números enteros.',
    );

    console.assert(
        validarIntegrantes(-2) === 'Este campo sola aceptan números enteros.',
        'La funcion validarIntegrantes no validó que el input conste de números enteros.',
    )

    console.assert(
        validarIntegrantes(27) === 'Solamente se aceptan hasta 25 (veinticinco) integrantes.',
        'La funcion validarIntegrantes no validó que el input conste de números por debajo de 25.',
    )

    console.assert(
        validarIntegrantes(8) === '',
        'La funcion validarIntegrantes no validó un input válido.',
    )
}

function pruebaValidarFormEdades() {
    console.assert(
        validarEdades('a') === 'Este campo sola aceptan números enteros.',
        'La función validarEdades no validó que el input conste de números enteros.'
    )

    console.assert(
        validarEdades((-2)) === 'Este campo sola aceptan números enteros.',
        'La función validarEdades no validó que el input conste de números enteros.'
    )

    console.assert(
        validarEdades(3.5) === 'Este campo sola aceptan números enteros.',
        'La función validarEdades no validó que el input conste de números enteros.'
    )

    console.assert(
        validarEdades(5232) === 'Este campo solo acepta números por debajo de 130.',
        'La función validarEdades no validó que el input conste de números por debajo de 130.'
    )

    console.assert(
        validarEdades(46) === '',
        'la función validarEdades no validó un input válido.',
    )
}


pruebaValidarFormIntegrantes();
pruebaValidarFormEdades();
