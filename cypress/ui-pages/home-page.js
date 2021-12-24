// / <reference types="Cypress" />

import TextField from '../../cypress/ui-components/text-field.js';
import Text from '../../cypress/ui-components/text.js';


class HomePage {
 
    constructor() {
        this.textField = new TextField();
        this.text = new Text();
    }

    enterSearchText(text) {
        this.textField.fill(
          `.gLFyf`,
          text,
        );    
        return this;
      }

     verifyResult(text) {

        this.text.getText('.c8d6zd').should('equal', text);
        this.text.isTextVisible('a word or group of words with a particular meaning');
        return this;
     }
     
     takeScreenShot(screenShotName) {
      cy.wait(3000);
      cy.screenshot(screenShotName);
      return this;
    }
    
}

export default HomePage;