/// <reference types="cypress" />

describe("Lauch Application", () => {
  it("Renders the home page", () => {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    cy.get("input[name='username']").type("test");
    cy.get("input[name='password']").type("test");

  });
});
