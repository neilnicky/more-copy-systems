/// <reference types="cypress" />

describe("Login functionality", () => {
  it("Login registered user", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("input[name='username']").type("neilnicks");
    cy.get("input[name='password']").type("Password1234$");
    cy.get(":nth-child(5) > .button").click();
  });
});