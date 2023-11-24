/// <reference types="Cypress"/>
describe("Delete  Request", () => {
  it("Delete a post via the /posts api", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/posts/" + res.body.length,
      }).then((res) => {
        expect(res.status).to.eql(200);
      });
    });
  });
});
