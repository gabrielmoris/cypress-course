// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Validate Webdriveruni homepage links", () => {
  it("confirm links redirect to the correct pages", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();

    cy.url().should("include", "contactus");
    cy.go("back");
    // cy.reload(); // reload not using cache
    cy.reload(true); // reload using cache
    cy.url().should("include", "http://www.webdriveruniversity.com/");

    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");

    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
