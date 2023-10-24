/// <reference types="Cypress" />

describe("Handling Data fro WebdriverUni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("Calculate and assert the total age of all the users", () => {
    const userDetails = [];
    let totalAge = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) totalAge += Number(userDetails[i]);
        }
        cy.log("The total age of all users is " + totalAge);
        expect(totalAge).to.eq(322);
      });
  });

  it("Calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const surname = $el.text();
      if (surname.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
