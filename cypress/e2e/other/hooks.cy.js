describe("hooks", () => {
  before(() => {
    cy.log("runs once before the first test in this block");
  });

  after(() => {
    cy.log("runs once after the last test in this block");
  });

  beforeEach(() => {
    cy.log("runs before each test in this block");
  });

  afterEach(() => {
    cy.log("runs after each test in this block");
  });

  it("Example 1", () => {
    cy.log("Example Test 1");
  });
  it("Example 2", () => {
    cy.log("Example Test 2");
  });
});
