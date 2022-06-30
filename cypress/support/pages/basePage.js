export class BasePage {
    open(url) {
        cy.viewport(1300, 1200)
        cy.visit(url)
    }
    typeEmail(email) {
        cy.get('[name="email"]')
            .type(email)
    }
    typePassword(password) {
        cy.get('[name="password"]')
            .type(password)
    }
    clickSubmit() {
        cy.get('[role="submit"]')
            //.click()
    }
}
export const basePage = new BasePage()