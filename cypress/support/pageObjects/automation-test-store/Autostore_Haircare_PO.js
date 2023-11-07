/// <reference types="Cypress"/>

class Autostore_Haircare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach((product) => {
      cy.addProductToBasket(product).then(() => {
        // With this command I can debug in the browser the code
        // debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click();
    // in this case I will use debugger as a Promise
    // .debug();
  }
}

export default Autostore_Haircare_PO;
