// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Add multiple Items to Basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();
  });

  it("Add specific Items to Basket", () => {});
});
