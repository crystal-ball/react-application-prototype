/// <reference types="Cypress" />

describe('Application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  /**
   * The entire application should build and render without errors
   */
  it('should have built without errors', () => {
    cy.contains(/The Order\s*of the\s*Crystal Code\s*Wizards/)
  })

  it('should use hashed image assets', () => {
    cy.get('[data-testid=hero-img]').should($img => {
      expect($img.css('background-image')).to.match(
        /\/static\/media\/radpack-bg\.[a-z0-9]+\.jpg/,
      )
    })
  })

  it('should produce anchor tags with hrefs', () => {
    cy.get('[data-testid=nav-link]').each($link => {
      expect($link).to.have.attr('href')
    })
  })

  it('should navigate', () => {
    cy.get('[data-testid=nav-link]')
      .eq(1)
      .click()

    cy.url().should('include', '/application-stack')
    cy.contains('Application stack')
  })
})
