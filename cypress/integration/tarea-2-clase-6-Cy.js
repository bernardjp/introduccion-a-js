/// <reference types="cypress"/>

const URL = 'http://127.0.0.1:5500/tareas/clase-6/tarea-2-resuelta/tarea-2-index.html';

context('Formulario salario familiar', () => {
    before(() => {
        cy.visit(URL);
    })

    describe('Calcular el salario familiar', () => {

        it('Verifies the existence of the main 3 buttons', ()=>{
            cy.get('#agregar-integrante').should('exist');
            cy.get('#calcular').should('exist');
            cy.get('#resetear').should('exist');
        });

        describe('Verifies the functionality of the "AGREGAR" button', () => {
            it('Verifies basic functionality', () => {
                cy.get('#agregar-integrante').click();
                cy.get('#boton-remover-1').click();
            });

            it('Verifies the validation of incorrect values', () => {
                cy.get('#agregar-integrante').click();
                cy.get('#agregar-integrante').click();
                cy.get('#agregar-integrante').click();

                cy.get('#ingreso-salarios input').eq(1).type('asdf');
                cy.get('#ingreso-salarios input').eq(2).type('1000.40');

                cy.get('#calcular').click();
                cy.get('#resultados').should('not.be.visible');
                cy.get('#resetear').click();
            });

            it('Verifies the validation of correct values', () => {
                cy.get('#agregar-integrante').click();
                cy.get('#agregar-integrante').click();
                cy.get('#agregar-integrante').click();

                cy.get('#ingreso-salarios input').eq(0).type('10000');
                cy.get('#ingreso-salarios input').eq(1).type('25000');
                cy.get('#ingreso-salarios input').eq(2).type('42000');

                cy.get('#calcular').click();
                cy.get('#resultados').should('be.visible');

                cy.get('#salario-mayor').should('have.text', '$42000');
                cy.get('#salario-menor').should('have.text', '$10000');
                cy.get('#salario-promedio').should('have.text', '$25666.67');
                cy.get('#salario-promedio-mes').should('have.text', '$2138.89');
            });

            it('Verifies the reset button functionality', () => {
                cy.get('#resetear').click();
                cy.get('#resultados').should('not.be.visible');
                cy.get('#integrantes div').should('not.exist');
            });
        });
    });
});


