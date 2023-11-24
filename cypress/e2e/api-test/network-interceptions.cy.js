// Putting this on the top of the doccument will allow me to have the right types of Cypress
/// <reference types="Cypress"/>
describe("Network Requests", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  it("Get Request", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      {
        body: {
          postId: 1,
          id: 1,
          name: "this is mocked by cypress",
          email: "cypres@io.com",
          body: "This data is mocked via cypress intercept 😋",
        },
      }
    ).as("getComment");

    cy.get(".network-btn").click();

    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });

  it("Post Request", () => {
    cy.intercept({
      method: "POST",
      url: "/comments",
    }).as("postComment");

    cy.get(".network-post").click();

    cy.wait("@postComment").should(({ request, response }) => {
      expect(request.body).to.include("email");
      expect(response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
      expect(request.headers).to.have.property("content-type");
      expect(request.headers).to.have.property(
        "referer",
        "https://example.cypress.io/"
      );
    });
  });

  it("Put Request", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: "Error mocked by Cypress" },
        delay: 500,
      }
    ).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment").its("response.statusCode").should("eq", 404);

    cy.get(".network-put-comment").should("contain", "Error mocked by Cypress");
  });
});
