// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test store", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(
      "a[href='https://automationteststore.com/index.php?rt=content/contact']"
    ).click();
    cy.get("#ContactUsFrm_first_name").type("My first Name");
    cy.get("#ContactUsFrm_email").type("email@saludos.com");
    cy.get("#ContactUsFrm_enquiry").type("This is a random message");
    cy.get("button[title='Submit']").click();
  });
});
