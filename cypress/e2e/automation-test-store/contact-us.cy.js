// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test store", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("https://www.automationteststore.com/");
    //For this kind of selector I need to install:  npm install --save-dev @cypress/xpath
    // in /support e2e.js I should add: require("@cypress/xpath");
    cy.xpath("//a[contains(@href, 'contact')]")
      .click()
      .then((link) => {
        cy.log("User clicks in button: ", link.text());
      });
    cy.get("#ContactUsFrm_first_name").type("My first Name");
    cy.get("#ContactUsFrm_email").type("email@saludos.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("This is a random message");
    // This selector is more optimized as .btn > div
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
