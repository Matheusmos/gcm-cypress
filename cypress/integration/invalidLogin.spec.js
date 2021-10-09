/// <reference types="cypress"/>
describe('Invalid Login - without password', ()=>{
    
    before('Visit', ()=>{
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Go to sign in', () =>{
        cy.get('.login').click()
    })

    it('Enter email address without the password', () => {
        cy.get('#email').type('matheus@gmail.com')
        cy.get('#SubmitLogin > span').click()
        cy.get('#center_column > :nth-child(2)').should('be.visible')
        
    })

})