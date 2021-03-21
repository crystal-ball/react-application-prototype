/* eslint-disable jest/expect-expect */
/// <reference types="Cypress" />

describe('React screen', () => {
  beforeEach(() => {
    cy.visit('/react')
  })

  /**
   * The screen should render without errors
   */
  it('should render without errors', () => {
    cy.contains(/React conventions/)
    cy.percySnapshot()
  })
})
