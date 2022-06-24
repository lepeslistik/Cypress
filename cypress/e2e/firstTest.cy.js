/// <reference types="Cypress" />
// it('By Contains name', () => {
//     cy.visit('https://htmlacademy.ru/study')
//     cy.get('[class^="page-content"]')
// });

it('Using Get with Find and Eq', () => {
        cy.visit('https://htmlacademy.ru/study')
        cy.get('.page-header__top').find('a').eq(10)
    });

