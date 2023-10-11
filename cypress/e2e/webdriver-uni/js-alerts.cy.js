// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Handle js Alerts", () => {
  it("confirm js alerts contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate JS confirm alert box works correctly when clicking OK", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      // click on accept
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Validate JS confirm alert box works correctly when clicking Cancel", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      // click on cancel
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Validate JS confirm alert box using a stub", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
