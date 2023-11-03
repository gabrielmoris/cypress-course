// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Verify Autocomplete dropdown list in webdriveruni", () => {
  it("Type a char and select specific product", () => {
    cy.visit("/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const productToSelect = "Avacado";

        if (product === productToSelect) {
          //$el.click();
          $el.trigger("click");

          cy.get("#submit-button").click();

          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");

        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product2 = $el.text();
          const productToSelect2 = "Grapes";

          if (product2 === productToSelect2) {
            //$el.click();
            $el.trigger("click");

            cy.get("#submit-button").click();

            cy.url().should("include", productToSelect2);
          }
        });
      });
  });
});
