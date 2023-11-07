/// <reference types="Cypress"/>

class HomePage_PO {
  visitHomepage() {
    cy.visit("/", { timeout: 6000 });
  }
  click_on_contact_us_btn() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ force: true }, { timeout: 8000 });
  }
}

export default HomePage_PO;
