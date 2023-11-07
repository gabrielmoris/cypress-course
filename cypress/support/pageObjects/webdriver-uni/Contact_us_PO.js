/// <reference types="Cypress"/>

class Contact_us_PO {
  contact_form_submission(
    firstname,
    lastname,
    email,
    comment,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstname);
    cy.get('[name="last_name"]').type(lastname);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 50000 });
    // I can choose when I want to do a screenshot
    // cy.screenshot();
    // cy.screenshot("Make a contact us form submission");
  }
}

export default Contact_us_PO;
