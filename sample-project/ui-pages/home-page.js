/// <reference types="Cypress" />

//import Link from '../ui-components/link';
import TextField from '../ui-components/text-field.js.js.js';
import Text from '../ui-components/text.js.js.js';


class HomePage {
 
    constructor() {
        //this.link = new Link();
        this.textField = new TextField();
        this.text = new Text();
    }

    enterSearchText(text) {
        this.textField.fill(
          `.gLFyf`,
          text,
        );
        //this.textField.clear('.gLFyf');
    
        return this;
      }

     verifyResult(text) {

        this.text.getText('.c8d6zd').should('equal', text);
        return this;

     }
     
     takeScreenShot(screenShotName) {
      cy.wait(8000);
      cy.screenshot(screenShotName);
      return this;
    }
    
}

export default HomePage;