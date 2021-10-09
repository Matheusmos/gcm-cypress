/// <reference types="cypress"/>

describe('Invalid email', ()=>{
    before('Visit', ()=>{
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Go to sign in', () =>{
        cy.get('.login').click()
    })

    it('Enter Invalid Email', () => {
        cy.get('#email_create').type('This is not an email')
        cy.get('#SubmitCreate > span').click()
        cy.get('#create_account_error').should('be.visible')
    })

})