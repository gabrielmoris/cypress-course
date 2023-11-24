/// <reference types="Cypress"/>
describe("Get Request", () => {
  it("Validate status code of the /posts api", () => {
    cy.request("http://localhost:3000/posts").as("request");
    cy.get("@request").its("status").should("equal", 200);
  });

  it("Validate /posts api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      let body = JSON.parse(JSON.stringify(res.body));
      expect(body[0]).has.property("title", "json-server");
      expect(body[0]).has.property("author", "typicode");

      body.forEach((el) => {
        expect(el).to.have.all.keys("id", "title", "author");
      });
    });
  });
});
