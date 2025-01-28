/// <reference types="cypress" />

describe("Registration functionality", () => {
  it("Register new user", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > :nth-child(3) > a").click();

    cy.get("input[name='customer.firstName']").type("Neil");
    cy.get("input[name='customer.lastName']").type("Nicholas");
    cy.get("input[name='customer.address.street']").type("Kanat Cottage");
    cy.get("input[name='customer.address.city']").type("Ernakulam");
    cy.get("input[name='customer.address.state']").type("Kerala");
    cy.get("input[name='customer.address.zipCode']").type("682012");
    cy.get("input[name='customer.phoneNumber']").type("7994350720");
    cy.get("input[name='customer.ssn']").type("1234-5678-9123");
    cy.get("input[name='customer.username']").type("neilnicks");
    cy.get("input[name='customer.password']").type("Password1234$");
    cy.get("input[name='repeatedPassword']").type("Password1234$");

    cy.get('[colspan="2"] > .button').click();

    cy.get("span[id='customer.username.errors']").should(
      "have.text",
      "This username already exists."
    );
  });
});
