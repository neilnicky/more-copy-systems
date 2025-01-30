describe("Shadcn UI", () => {
  it("Launches the website", () => {
    // Add handler for uncaught exceptions
    cy.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.visit("https://ui.shadcn.com/");
    cy.get(".flex-1 > .gap-2 > .inline-flex").click();
  });
});
