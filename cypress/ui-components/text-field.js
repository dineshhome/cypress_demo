// / <reference types="Cypress" />

class TextField {
    fill(identifier, content) {
      cy.get(identifier, { timeout: 10000 }).type(content, { force: true });
      return this;
    }

    clear(identifier) {
        return cy.get(identifier).clear();
      }
}
    export default TextField;