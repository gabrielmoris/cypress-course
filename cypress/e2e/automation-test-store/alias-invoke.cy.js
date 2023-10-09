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

  it("Challenge: Validate number of products and they contain the title add to cart", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("listOfProducts");
    cy.get("@listOfProducts").its("length").should("be.gt", 1);
    cy.get("@listOfProducts")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total of normal and sale products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("listOfProducts");
    // cy.get("@listOfProducts")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     $el.text()
    //   });

    let itemsTotal = 0;
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    //I use the first alias to iterate and add every price in itemsPriceTotal

    cy.get("@itemPrice").then(($linkText) => {
      cy.log("this will be a concatenated string, not an array", $linkText);
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split("$");

      for (let i = 0; i < itemPrice.length; i++) {
        itemsPriceTotal += Number(itemPrice[i]);
      }

      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price items Total: ", itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemsPriceTotal = 0;
        let saleItemPrice = $linkText.split("$");

        for (let i = 0; i < saleItemPrice.length; i++) {
          saleItemsPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemsPriceTotal;
        cy.log("Sale price items Total: ", saleItemsPriceTotal);
      })
      .then(() => {
        cy.log("The total price of all products: ", itemsTotal);
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
