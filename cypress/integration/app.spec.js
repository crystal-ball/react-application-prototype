/// <reference types="Cypress" />

describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  /**
   * The entire application should build and render without errors
   */
  it('should have built without errors', () => {
    cy.get('[data-testid=title]').contains(/The Order\s*of the\s*Crystal Code\s*Wizards/)
  })
})
