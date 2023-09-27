// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Verify variables, cypress commands and jquery commands", () => {
  it("Navigate to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");

    // The following will Fail
    // const makeupLink = cy
    //   .get('a[href*="?rt=product/category&path=')
    //   .contains("Makeup");
    // const skincareLink = cy
    //   .get('a[href*="?rt=product/category&path=')
    //   .contains("Skincare");

    // makeupLink.click();
    // skincareLink.click();

    // The following will Pass, but this is not the best way
    // const makeupLink = cy
    //   .get('a[href*="?rt=product/category&path=')
    //   .contains("Makeup");
    // makeupLink.click();

    // const skincareLink = cy
    //   .get('a[href*="?rt=product/category&path=')
    //   .contains("Skincare");
    // skincareLink.click();

    // This is better
    cy.get('a[href*="?rt=product/category&path=').contains("Makeup").click();
    cy.get('a[href*="?rt=product/category&path=').contains("Skincare").click();
  });

  it("Navigate to specific product pages using promises", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Makeup").click();
    // This code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    //We should use Promises
    cy.get("h1 .maintext").then(($header) => {
      const headerText = $header.text();
      cy.log(headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it("Validate properties of the Contact Page", () => {
    cy.visit(
      "https://www.automationteststore.com/index.php?rt=content/contact"
    );

    // Uses Cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");

    // Jquery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name:");

      // Embedded commands (Clousures) INSIDE THE Promise of Jquery approach (Not neccessary)
      cy.get("#field_11").then((text) => {
        cy.log(text.text());
      });
    });
  });
});
