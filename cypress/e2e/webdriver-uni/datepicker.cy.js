// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test datepicker in webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();

    let date = new Date();
    date.setDate(date.getDate() + 360); // gives the current day

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();
  });
});
