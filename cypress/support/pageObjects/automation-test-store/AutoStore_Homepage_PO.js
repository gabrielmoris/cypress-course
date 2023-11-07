/// <reference types="Cypress"/>

class AutoStore_Homepage_PO {
  accessHomepage() {
    cy.visit("https://www.automationteststore.com/");
  }
  clickHaircareLink() {
    cy.get('a[href*="?rt=product/category&path=').contains("Hair Care").click();
  }
}

export default AutoStore_Homepage_PO;
