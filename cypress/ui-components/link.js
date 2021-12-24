// / <reference types="Cypress" />

class Link {
    click(text) {
      cy.contains(text).click({ force: true });
      return this;
    }
}

export default Link;