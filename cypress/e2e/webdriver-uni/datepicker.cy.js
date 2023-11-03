// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test datepicker in webdriveruni", () => {
  it("Select date from datepicker", () => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click();
    cy.get("#datepicker").click();
    let date = new Date();
    date.setDate(date.getDate() + 365); // gives the current day

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString("default", { month: "long" });
    let futureDay = date.getDate();

    const selectMonthAndYear = () => {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .eq(0)
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").eq(0).click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .eq(0)
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").eq(0).click();
                selectMonthAndYear();
              }
            });
        });
    };
    const selectFutureDay = () => {
      cy.get("[class='day']").contains(futureDay).click();
    };
    selectMonthAndYear();
    selectFutureDay();
  });
});
