describe("Dynamic drpodown", () => {
  it("Handles dynamic dropdown functionality", () => {
    // Add handler for uncaught exceptions
    cy.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.get("#input-with-icon-adornment")
      .click()
      .clear()
      .type("New", { delay: 200 });
    cy.get(".viewport span:last-child").each(($el, index, $list) => {
      cy.log($el.text());
      if ($el.text() === "DEL") {
        cy.wrap($el).click();
      }
    });
  });
});
