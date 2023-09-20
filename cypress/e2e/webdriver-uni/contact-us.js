// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("johnDoe@yahoo.de");
    cy.get("textarea.feedback-input").type("Lorem Ipsum");
    cy.get('[type="submit"]').click();
  });

  it("Shouldn't be able to submit a succesful submission via Contact Uns Form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get("textarea.feedback-input").type("Lorem Ipsum");
    cy.get('[type="submit"]').click();
  });
});
