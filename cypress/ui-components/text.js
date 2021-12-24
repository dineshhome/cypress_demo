// / <reference types="Cypress" />

class Text {
    isTextVisible(text) {
      return cy.contains(text).should('be.visible');
    }
  
    isTextPresent(text) {
      return cy.contains(text).should('exist');
    }

    getText(identifier) {
        return cy.get(identifier).invoke('text');
      }
}
export default Text;