/// <reference types="Cypress" />

it('', () => {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.contains('Войти'); //поиск элемента по значению
})

it('', () => {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.contains('a','Войти'); //поиск игнорируя приоритетные input, button, a, label 
})

it('', () => {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.contains('ВОЙТИ', {matchCase: false}); //игнорируем регистр
})

it.only('', () => {
    cy.visit('https://htmlacademy.ru/login?redirect_url=https%3A%2F%2Fhtmlacademy.ru%2Fstudy')
    cy.get('header').contains('ВОЙТИ', {matchCase: false}); //сочетание с get
})