/// <reference types="Cypress"/>

describe("Test to Fail", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
  });

  it.skip(
    "Log information of each Hair care product",
    { retries: { runMode: 2, openMode: 2 } },
    () => {
      cy.get("fail", { timeout: 50 }).contains("fail").click();
    }
  );
});
