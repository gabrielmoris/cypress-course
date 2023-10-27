// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test file upload in webdriveruni", () => {
  it("Upload a File", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myFile").selectFile("cypress/fixtures/img.png");
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Your file has now been uploaded!");
    });
  });

  it("Click on upload without File", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });
});
