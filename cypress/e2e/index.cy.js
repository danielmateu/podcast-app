/// <reference types="cypress" />

describe('template spec', () => {

  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  //Debe contener el componente Filter y probar el texto del input
  it('should contain the Filter component', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').should('be.visible')
    cy.get('input').should('have.value', '')
    cy.get('input').type('text')
  })

  // Debe contener el componente PodcastList
  it('should contain the PodcastList component', () => {
    cy.visit('http://localhost:3000/')
    // cy.get('Podcast').should('be.visible')
  })
})