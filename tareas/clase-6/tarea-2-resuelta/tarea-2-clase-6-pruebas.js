
function probraValidarSalario() {
    console.assert(
        validarSalario('asdasdaa') === 'Este campo solamente acepta números.',
        'La función validarSalario no validó que el input conste unicamente de números.',
    );

    console.assert(
        validarSalario(0) === 'Este campo solamente acepta valores positivos.',
        'La función validarSalarios no validó que el input conste de números mayores a 0.',
    );

    console.assert(
        validarSalario(46541321384) === 'Este campo solamente acepta valores de hasta 7 caracteres.',
        'La función validarSalario no validó que el input conste de hasta 7 números.',
    );

    console.assert(
        validarSalario(24566) === '',
        'La función validarSalario no validó un input válido.'
    );
}

probraValidarSalario();
