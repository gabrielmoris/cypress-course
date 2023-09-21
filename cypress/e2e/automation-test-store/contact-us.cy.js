// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test store", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("https://www.automationteststore.com/");
    //For this kind of selector I need to install:  npm install --save-dev @cypress/xpath
    // in /support e2e.js I should add: require("@cypress/xpath");
    cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("My first Name");
    cy.get("#ContactUsFrm_email").type("email@saludos.com");
    cy.get("#ContactUsFrm_enquiry").type("This is a random message");
    // This selector is more optimized as .btn > div
    cy.get("button[title='Submit']").click();
  });
});