/// <reference types="Cypress"/>

class HomePage_PO {
  visitHomepage() {
    cy.visit("/");
  }
  click_on_contact_us_btn() {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  }
}

export default HomePage_PO;
