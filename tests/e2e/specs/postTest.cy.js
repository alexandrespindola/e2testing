describe("Post Test Feature", () => {
  beforeEach(() => {
    cy.login('admin@admin.com', '123456')
    cy.url().should("eq", "http://localhost:8080/");
  })

  it("1) Logged in user can access to posts page and view posts list", () => {
    cy.get("h1").should("have.text", "Home - Post List");
    cy.contains("a", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
  });

  it("2) Logged in user can access to detail post view", () => {
    cy.contains("qui est esse").click();
    cy.url().should("eq", "http://localhost:8080/detail/2");
    cy.get("h1").should("have.text", "qui est esse");
  });

  it("3) logged in user can go back from detail post view to posts list", () => {
    cy.contains("qui est esse").click();
    cy.url().should("eq", "http://localhost:8080/detail/2");
    cy.get("h1").should("have.text", "qui est esse");
    cy.get("button").contains("Back").click();
    cy.url().should("eq", "http://localhost:8080/");
  });
});
