/// <reference types="cypress"/>
describe('Existing email', ()=>{
    
    before('Visit', ()=>{
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Go to sign in', () =>{
        cy.get('.login').click()
    })

    it('Enter an email that already exists', () => {
        cy.get('#email_create').type('teste2@gmail.com')
        cy.get('#SubmitCreate > span').click()
        cy.get('#create_account_error').should('be.visible')
    })

})