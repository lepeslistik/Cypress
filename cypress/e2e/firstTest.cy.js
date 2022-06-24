/// <reference types="Cypress" />
// it('By Contains name', () => {
//     cy.visit('https://htmlacademy.ru/study')
//     cy.get('[class^="page-content"]')
// });

it('Using Get with Find and Eq', () => {
        cy.visit('https://htmlacademy.ru/study')
        cy.get('.page-header__top').find('a').eq(10)
    });

 it.only('Using Get with Find and Eq', () => {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('.hidden xl:block xl:col-span-2 mt-16 lg:z-10').find('nav').find('ul').find('li').find(a)
    });