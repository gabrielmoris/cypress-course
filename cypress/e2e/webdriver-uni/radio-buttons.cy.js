// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Verify radio buttons in webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons")
      .find("input[type='radio']")
      .as("checkboxes")
      .first()
      .check();

    cy.get("@checkboxes").eq(1).check();
  });

  it("Validate states of specific radio buttons", () => {
    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="cabbage"]').should("be.disabled");
    cy.get('[value="pumpkin"]').should("be.checked");
    cy.get('[value="lettuce"]').check();
    cy.get('[value="pumpkin"]').should("not.be.checked");
  });
});
