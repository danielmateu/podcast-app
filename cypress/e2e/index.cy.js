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
    cy.get('input').type('city')
  })

  // Que el main tenga el data-cy main-page
  it('should contain the main element with the data-cy main-page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="main-page"]').should('be.visible')
  })

  // Se debe conectar a la API y traer los datos
  it('should connect to the API and bring the data', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('city')
    // cy.get('button').click()
    cy.get('main').should('have.length', 1)
  })

})