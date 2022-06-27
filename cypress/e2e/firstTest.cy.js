/// <reference types="Cypress" />

it.only('SHOULD', ()=> {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.get('[id="login-password"]')
    .type(100) //меняем значение
    .should('have.value', 100) //проверяем изменилось ли значение
    .and('be.visible') //проверяем, что поле видимо
})

it('SHOULD', ()=> {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.get('[id="login-password"]')
    .type(100).then( input => {
        expect(input).to.have.value(100)
    })
})

it('SHOULD', ()=> {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.get('.main-nav__dropdown-inner>ul>li').eq(1)
    //cy.contains('Все курсы')
        .trigger('mouseover')
       // .contains('')
       // .should('be.visible')
    
})