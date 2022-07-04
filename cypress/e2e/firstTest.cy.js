/// <reference types="Cypress" />

it('Get', () => {
    cy.request('https://stage.dobrovmeste.com/')
        .then((response)=>{
            console.log(response);
        })  
})

it('Post', () => {
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
            title: 'foo',
            body: 'bar',
            userId: 1,
          },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
        .then((response)=>{
            expect(response).to.have.property('status').to.equal(201)
            expect(response.body).to.have.property('id').to.equal(101)
            console.log(response);
        })  
})

it('Post', () => {
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
            title: 'foo',
            body: 'bar',
            userId: 1,
          },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
        .its('body').should('contain', {
            id: 101
        })  
})

it.only('', () => {
    cy.visit('https://stage.dobrovmeste.com/sign_in')
        //.get('[role="submit"]')
        .contains('[role="submit"]', 'Войти')
})