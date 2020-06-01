/// <reference types="cypress"/>

const URL = 'http://127.0.0.1:5500/tareas/clase-12/ExchangeRate/index.html';

context('Exchange rate calculator', () => {
    before(() => {
        cy.visit(URL);
    });

    describe('Calculate rates between currencies', () => {
        const currentDate = new Date().toISOString().substring(0, 10);
        const defaultCurrency = 'EUR';
        const currencyNumber = 33;  //Hace falta hacer un llamado a la API?

        describe('Verifies the setup of the landing page', () => {
            it('Verifies the existence of the main buttons and inputs', () => {
                cy.get('#inputs').should('exist');
                cy.get('#input-currency').should('exist');
                cy.get('#input-date').should('exist');
                cy.get('#apply-filters').should('exist');
                cy.get('#reset-filters').should('exist');
            });

            it('Verifies the default values', () => {
                cy.get('#input-currency').should('have.value', defaultCurrency);
                cy.get('#input-date').should('have.value', currentDate); //Averiguar como se verifica una fecha.
            });

            it('Verifies the correct display setting of the table', () => {
                cy.get('#table-container').should('not.be.visible');
            });
        });

        describe('Verifies the basic functionality of the program', () => {
            //Deberia usar un .then para poder hacer un pedido a la API de manera
            it('Select default parameters', () => {
                cy.get('#apply-filters').click();
                cy.get('#table-container').should('be.visible');
            });

            it('Verifies the correct title for the table', () => {
                cy.get('#base-currency').should('have.text', `${defaultCurrency}`);
                cy.get('#date').should('have.text', `${currentDate}`);
            });
        });
    });
});

