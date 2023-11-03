// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
  before(() => {
    // shis have to match the filename in fixtures folder
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    // To remove an attribute
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });

  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    // If I want to access to the DOM directly:
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    // If I want to check the title of the HTML
    cy.title().should("include", "WebDriver | Contact Us");

    // If I want to access to the URL
    cy.url().should("include", "contactus.html");
    const { first_name, last_name, email, body } = data;
    cy.webdriveruniContactFormSubmission(
      Cypress.env("first_name_env"),
      last_name,
      email,
      body,
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Shouldn't be able to submit a succesful submission via Contact Uns Form as all fields are required", () => {
    // cy.visit("/Contact-Us/contactus.html");
    const { first_name, last_name, body } = data;
    cy.webdriveruniContactFormSubmission(
      first_name,
      last_name,
      " ",
      body,
      "body",
      "Error: "
    );
  });
});
