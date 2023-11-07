// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_us_PO from "../../support/pageObjects/webdriver-uni/Contact_us_PO";
describe("Test Contact Us form via WebdriverUni", () => {
  const contact_us_po = new Contact_us_PO();
  const homePage_PO = new HomePage_PO();

  before(() => {
    // this have to match the filename in fixtures folder
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    homePage_PO.visitHomepage();
    homePage_PO.click_on_contact_us_btn();
  });

  it("Should be able to submit a succesful submission via Contact Uns Form", () => {
    // If I want to access to the DOM directly:
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    // If I want to check the title of the HTML
    cy.title().should("include", "WebDriver | Contact Us");

    // If I want to access to the URL
    cy.url().should("include", "contactus.html");
    const { first_name, last_name, email, body } = data;

    // Using Page Object
    contact_us_po.contact_form_submission(
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
    // Using Cypress Commands
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
