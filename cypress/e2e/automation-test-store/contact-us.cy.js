// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test store", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("https://www.automationteststore.com/")

  });
});
