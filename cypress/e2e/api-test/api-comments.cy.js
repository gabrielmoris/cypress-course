/// <reference types="Cypress"/>
describe("Post, Get, Delete Requests", () => {
  let randomComment =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("Create a new Comment", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/comments",
      body: {
        body: randomComment,
        postId: Math.floor(Math.random() * 100) + 1,
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
    });
  });

  it("Locate a new Comment", () => {
    let comments = [];
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        let body = JSON.parse(JSON.stringify(res.body));
        body.forEach((comment) => {
          comments.push(comment["body"]);
        });
      })
      .then(() => {
        expect(comments[comments.length - 1]).to.eq(randomComment);
      });
  });

  it("Delete a new Comment", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:3000/comments",
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/comments/" + res.body.length,
      }).then((res) => {
        expect(res.status).to.eql(200);
      });
    });
  });
});
