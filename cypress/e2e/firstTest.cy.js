/// <reference types="Cypress" />


it('type', ()=>{
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
        .get('#login-password')
        .type(123456789) //передаем значение
})

it('focus', ()=>{
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
        .get('#login-password')
        .focus() //фокусируемся на элементе, не выполняя никаких действий
})

it('blur', ()=>{
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
        .get('#login-password')
        .focus()
        .blur() //подсвечивает поле с ошибкой(если это заложено в стилях)
})

it('clear', ()=>{
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
        .get('#login-password')
        .type(123)
        .pause()
        .clear() 
})

it('submit', ()=>{
    cy.visit('http://the-internet.herokuapp.com/login')
        .get('#login')
        .submit() //подтверждение формы
})

it('rightclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick() 
})

it('dbleclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Double click to edit')
        .dblclick() 
})

it('check', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('#optionsRadios1')
        .check() 
})

it('uncheck', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('[type="checkbox"]').eq(6)
        .uncheck() 
})

it('select', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('.action-select')
        .select('bananas') //выбор из списка
})

it('scrollIntoView', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('#scrollIntoView')
        .scrollIntoView() //находим элемент и скролим до него
        //.should('be.visible')
})

it.only('', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .get('#scrollable-horizontal').scrollIntoView().scrollTo('right') //переходим по указанным параметрам
})

it('triger', ()=>{
    cy.visit('http://the-internet.herokuapp.com/hovers')
        .get('.example > div').eq(1)
        .trigger('mouseover')
})