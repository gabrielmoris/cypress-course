// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Iterate over Elements", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();
  });

  it("Log information of each Hair care product", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to the basket", () => {
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   if ($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add another specific product to the basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });

  it("Add another specific product to the basket again", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
