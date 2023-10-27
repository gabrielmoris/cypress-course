// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Cypress Web Security", () => {
  it.skip("Validate visiting 2 different Domains", () => {
    // In older versions that would trigger an error
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://www.google.com/");
  });

  it("Validate visiting 2 different Domains via user actions", () => {
    // In older versions that would trigger an error because the link would lead to another domain but if in cypress.config i put
    // chromeWebSecurity: false, wont trigger a fail.
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });

  it("Origin Command", () => {
    cy.origin("http://www.automationteststore.com/", () => {
      cy.visit("/");
    });
    // cy.origin("http://www.webdriveruniversity.com/", () => {
    //   cy.visit("/");
    // });

    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("http://selectors.webdriveruniversity.com/");
  });
});
