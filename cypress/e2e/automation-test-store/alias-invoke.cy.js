// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Alias and Invoke", () => {
  it("Validate a specific hair product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();

    // With this invoque and as I am creatin a variable as let productThumbnail
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it.only("Challenge: Validate number of products and they contain the title add to cart", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("listOfProducts");
    cy.get("@listOfProducts").its("length").should("be.gt", 1);
    cy.get("@listOfProducts")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
});
