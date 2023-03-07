/// <reference types="cypress" />

describe('Pruebas sobre el componente Filter', () => {

    it('passes', () => {
        cy.visit('http://localhost:3000/')
    })

    //Debe contener un label que muestre filteredPodcasts.length
    it('should contain a label that shows filteredPodcasts.length', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="filter-label"]').should('be.visible')
    })

    //Debe contener un input
    it('should contain an input', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="filter-input"]').should('be.visible')
    })

    //Probar el texto del input
    it('should contain the text of the input', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="filter-input"]').should('have.value', '')
        cy.get('[data-cy="filter-input"]').type('city')
    })

    //Si introducimos un texto en el input, debe filtrar los podcasts
    it('should filter the podcasts if we introduce a text in the input', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="filter-input"]').type('city')
        cy.get('[data-cy="podcast-name"]').should('have.length', 1)
    })

})