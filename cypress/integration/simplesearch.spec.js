/// <reference types="cypress"/>

describe('Simple search', () => {
    before('Visit', () => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Type and search', () => {
        cy.get('#search_query_top').type('simple search')
        cy.get('#searchbox > .btn').click()
    })

    it('search results', () => {
        cy.get('.alert').should('contain', 'No results were found')
    })
})