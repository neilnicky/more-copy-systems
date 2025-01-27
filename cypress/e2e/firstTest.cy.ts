describe("Cypress demo", () => {
  it("renders the default elements", () => {
    cy.visit("http://localhost:3000/todos");

    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "Todos");
  });

  it("renders the todos  on the page", () => {
    cy.visit("http://localhost:3000/todos");

    cy.get('[data-testid="todo-1"]').should("exist");
    cy.get('[data-testid="todo-2"]').should("exist");
    cy.get('[data-testid="todo-3"]').should("exist");
    cy.get('[data-testid="todo-4"]').should("exist");
  });
});
