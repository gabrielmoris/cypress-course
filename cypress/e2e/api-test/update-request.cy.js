/// <reference types="Cypress"/>
describe("UpdateRequest", () => {
  it("Update an existing post via the /posts api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/1",
      body: {
        title: "Updated by cypress",
        author: "cy",
      },
    }).then((res) => {
      expect(res.status).to.eql(200);
    });
  });
});
