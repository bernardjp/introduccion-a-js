/// <reference types="cypress"/>

//Se guarda la direccion del servidor local que queremos testear.
const URL = 'http://127.0.0.1:5500/tareas/clase-10/index-memo.html';
const NUMERO_BOTONES = 16;


//Context es la funcion principal donde indicamos que es lo que se testea. Toma 2 parametros.
//Context, before, describe, it son funciones de la libreria Mocha.
context('Memotest', () => {
    //con 'before' indicamos que acción se debe realizar 'antes' de comenzar con las pruebas.
    //'before' toma una funcion de callback como parametro.
    //'cy' es un objeto de Cypress que tiene el metodo .visit() que abre en el navegador la pagina indicada
    before(() => {
        cy.visit(URL);
    })

    //La funcion 'describe' sirve para agupar testeos individuales. Toma 2 parametros.
    describe('Play Memotest', () => {

        //La funcion 'it' realiza el testeo individual. Toma 2 parametros.

        //1- Verificar que el tablero de juego se construya completo.
        it('verifies that the gaming board is complete', () => {
            cy.get('#gaming-board').find('.boton-juego').should('have.length', NUMERO_BOTONES);
        });

        //2- Verificar que al presionar START se randomizen los cuadros.
        it('verifies that the gaming board is randomized', () => {
            cy.get('.boton-juego').then(cuadros => {
                let botonesOriginales = [];
                cuadros.each(function(i, cuadro){
                    botonesOriginales.push(cuadro.className);
                });
            
                cy.get('#boton-start').click();

                let botonesAleatorios = [];
                cy.get('.boton-juego').then(cuadros => {
                    cuadros.each(function(i, cuadro){
                        botonesAleatorios.push(cuadro.className);
                    });
                });
                
                cy.wrap(botonesOriginales).should('not.deep.equal', botonesAleatorios);
            });
        });

        //3- Verificar que el juego se resuelva correctamente. Como son un conjunto de pruebas se encapsulan
        //dentro de un 'describe' para mejor legibilidad.
        describe('resolves the game', () => {
            let pairsMap, pairsList;

            it('choses a wrong pair', () => {
                cy.get('.boton-juego').then(cuadros => {
                    pairsMap = obtainColorPairs(cuadros);
                    pairsList = Object.values(pairsMap);

                    cy.get(pairsList[0][0]).click();
                    cy.get(pairsList[1][0]).click();

                    cy.get(pairsList[0][0]).should('not.have.attr', 'disabled');
                })
            });

            it('resolves the game', () => {
                pairsList.forEach((pair) => {
                    cy.get(pair[0]).click();
                    cy.get(pair[1]).click();
                })

                cy.get('#gaming-board').should('have.class', 'd-none');

                const turnsScore = NUMERO_BOTONES / 2 + 1;
                cy.get('#score')
                    .should('be.visible')
                    .contains(`Lo lograste en ${turnsScore} rondas.`);
            });

        });
    });
})

function obtainColorPairs (cuadros) {
    const pairs = {};

    cuadros.each((i, cuadro) => {
        const classColor = cuadro.className.replace('boton-juego btn btn-sm ', '');

        if (pairs[classColor]){
            pairs[classColor].push(cuadro);
        } else {
            //pairs[classColor] = [];
            //pairs[classColor].push(cuadro);
            pairs[classColor] = [cuadro];
        }
    })
    //console.log(pairs);
    return pairs;
}
