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

  //Que el main contenga el componente Filter y el componente PodcastList
  // it('El main contenga el componente Filter y el componente PodcastList', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('[data-cy="filter"]').should('exist')
  // })


  // Debe contener el componente PodcastList
  

})