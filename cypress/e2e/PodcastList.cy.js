/// <reference types="cypress" />

describe('Pruebas sobre el componenten PodcastList', () => {

    it('passes', () => {
        cy.visit('http://localhost:3000/')
    })

    //Debe contener podcast-image
    it('should contain the podcast-image', () => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy="podcast-image"]').should('be.visible')
    })
})