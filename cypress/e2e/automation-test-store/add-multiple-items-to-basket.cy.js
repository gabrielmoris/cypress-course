// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import Autostore_Haircare_PO from "../../support/pageObjects/automation-test-store/Autostore_Haircare_PO";

describe("Add multiple Items to Basket", () => {
  const autoStoreHomepagePo = new AutoStore_Homepage_PO();
  const autoStoreHairCare = new Autostore_Haircare_PO();
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStoreHomepagePo.accessHomepage();
    autoStoreHomepagePo.clickHaircareLink();
  });

  it("Add specific Items to Basket", () => {
    autoStoreHairCare.addHairCareProductsToBasket();
  });
});
