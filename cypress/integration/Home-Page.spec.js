// <reference types="cypress" />
import HomePage from '../../cypress/ui-pages/home-page.js';

describe('Dinesh Dhiman - SDET Assignment - Fiserv',() => {
  const homePage = new HomePage();
  beforeEach(() => {
    cy.visit('https://google.com')
  })

  it('verify search engine result', () => {
    
    homePage.enterSearchText('terms{enter}').verifyResult('term');
    homePage
      .takeScreenShot('Search-Result');
  })
});