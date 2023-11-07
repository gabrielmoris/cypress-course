/// <reference types="Cypress"/>

class Autostore_Haircare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((product) => {
      cy.addProductToBasket(product);
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default Autostore_Haircare_PO;
