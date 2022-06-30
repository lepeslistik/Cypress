export class SignUpNewUser {
    typeUser(firstName, lastName, patronymic, birthday, phone) {
        cy.get('[name="firstName"]')
            .type(firstName)
            .get('[name="lastName"]')
            .type(lastName)
            .get('[name="patronymic"]')
            .type(patronymic)
            .get('[name="birthday"]')
            .type(birthday)
            .get('[name="phone"]')
            .type(phone)
    }
    typePasswordConfirm(passwordConfirm) {
        cy.get('[name="passwordConfirm"]')
            .type(passwordConfirm)
    }
    checkAgreement() {
        cy.get('.form_checkbox [type="checkbox"]')
        .should('be.checked')
    }
}
export const signUp = new SignUpNewUser()