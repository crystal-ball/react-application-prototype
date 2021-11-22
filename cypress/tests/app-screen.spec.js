/// <reference types="Cypress" />

describe('Application screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  /**
   * The entire application should build and render without errors
   */
  it('should have built without errors', () => {
    cy.contains(/Prototype application/)
    cy.percySnapshot()
  })

  it('should use hashed image assets', () => {
    cy.get('[data-testid=hero-img]').should(($img) => {
      expect($img.css('background-image')).to.match(
        /\/static\/media\/radpack-bg\.[a-z0-9]+\.jpg/,
      )
    })
  })

  it('should produce anchor tags with hrefs', () => {
    cy.findAllByRole('link').each(($link) => {
      expect($link).to.have.attr('href')
    })
  })

  it('should navigate', () => {
    cy.findByRole('link', { name: /Application Stack/i }).click()

    cy.url().should('include', '/application-stack')
    cy.contains('Application stack')
    cy.percySnapshot()
  })
})
