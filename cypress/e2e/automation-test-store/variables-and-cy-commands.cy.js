// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Verify variables, cypress commands and jquery commands", () => {
  it("Navigate to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    const makeupLink = cy
      .get('a[href*="?rt=product/category&path=')
      .contains("Makeup");
    const skincareLink = cy
      .get('a[href*="?rt=product/category&path=')
      .contains("Skincare");

    makeupLink.click();
    skincareLink.click();
  });
});
