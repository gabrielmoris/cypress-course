// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    // To remove an attribute
    cy.get("#contact-us").invoke("removeAttr", "target").click();

    // If I want to access to the DOM directly:
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    // If I want to check the title of the HTML
    cy.title().should("include", "WebDriver | Contact Us");

    // If I want to access to the URL
    cy.url().should("include", "contactus.html");

    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get('[name="email"]').type("johnDoe@yahoo.de");
    cy.get("textarea.feedback-input").type("Lorem Ipsum");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Shouldn't be able to submit a succesful submission via Contact Uns Form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("John");
    cy.get('[name="last_name"]').type("Doe");
    cy.get("textarea.feedback-input").type("Lorem Ipsum");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: ");
  });
});
