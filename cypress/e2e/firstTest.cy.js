/// <reference types="Cypress" />

import { basePage } from "../support/pages/basePage"
import { SignInAccount } from "../support/pages/signIn"
import { signUp } from "../support/pages/signUp"

it('SignUpNewUser', () => {
    basePage.open('https://stage.dobrovmeste.com/sign_up')
    signUp.typeUser('Иван', 'Иванов', 'Иванович', '01011990', '9964240903')
    basePage.typeEmail('lepeslistik@gmail.com')
    basePage.typePassword('123456789Zz')
    signUp.typePasswordConfirm('123456789Zz')
    signUp.checkAgreement()
    basePage.clickSubmit()
    
})

it.only('SignInAccount', () => {
    basePage.open('https://stage.dobrovmeste.com/sign_in')
    basePage.typeEmail('lepeslistik@gmail.com')
    basePage.typePassword('123456789Zz')
    basePage.clickSubmit()
})