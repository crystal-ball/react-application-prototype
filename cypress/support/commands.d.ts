declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Logs how radical it is
     * @example
     * cy.logRadical()
     */
    logRadical(): void
  }
}
