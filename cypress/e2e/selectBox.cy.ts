describe("Select Box", () => {
  it("Select Box", () => {
    cy.visit("http://localhost:3000/products");
    cy.get("#cars").select(4);
    cy.get("#cars").select("Ford");
    cy.get("#cars").select("Volvo");
    cy.get("select").select(["Volvo", "BMW"]);
  });
});