// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>

describe("Test Mouse events", () => {
  it("Scroll element into view", () => {
    cy.visit("/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Drag & drop a draggable item", () => {
    cy.visit("/");
    cy.get("#actions").invoke("removeAttr", "target").click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    cy.get("#droppable > p > :nth-child(1)").should("contain", "Dropped!");
  });

  it("Double mouse click", () => {
    cy.visit("/");
    cy.get("#actions").invoke("removeAttr", "target").click({ force: true });

    cy.get("#double-click")
      .dblclick()
      .should("have.css", "background-color", "rgb(147, 203, 90)");
  });

  it("Hold  down the left mouse click", () => {
    cy.visit("/");
    cy.get("#actions").invoke("removeAttr", "target").click({ force: true });

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
