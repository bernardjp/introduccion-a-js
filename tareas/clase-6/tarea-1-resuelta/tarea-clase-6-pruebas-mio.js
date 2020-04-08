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

pruebaValidarFormIntegrantes();