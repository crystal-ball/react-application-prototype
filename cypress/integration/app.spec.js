/// <reference types="Cypress" />

describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // Test that the production build finished without errors by loading the app
  it('should have built without errors', () => {
    cy.get('[data-testid=title]').contains(/The Order\s*of the\s*Crystal Code\s*Wizards/)
  })

  // Test that images loaded with the file loader are output into the correct
  // static/media folder and have a cache busting hash appended to the filename
  it('should hash image assets', () => {
    cy.get('[data-testid=hero-img]')
      .should('have.attr', 'src')
      .and('match', /\/static\/media\/karly-santiago\.[a-z0-9]+?\.jpg/)
  })
})
