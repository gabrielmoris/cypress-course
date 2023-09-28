// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Iterate over Elements", () => {
  it("Log information of each Hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to the basket", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
