/// <reference types="Cypress"/>
describe("Post Request", () => {
  let randomTitle =
    Math.random().toString(36).substring(1) +
    Math.random().toString(36).substring(1);

  it("Validate status code after reate a new post via /posts api", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: randomTitle,
        author: "cypress tests",
      },
    }).then((res) => {
      expect(res.status).to.eql(201);
    });
  });

  it("Validate Validate title of latest post", () => {
    let titleOfPosts = [];
    cy.request({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: {
        accept: "application/json",
      },
    })
      .then((res) => {
        let body = JSON.parse(JSON.stringify(res.body));
        body.forEach((post) => {
          titleOfPosts.push(post["title"]);
        });
      })
      .then(() => {
        expect(titleOfPosts[titleOfPosts.length - 1]).to.eq(randomTitle);
      });
  });
});
