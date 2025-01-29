describe("Dynamic drpodown", () => {
  it("Handles dynamic dropdown functionality", () => {
    cy.visit("https://www.yatra.com/", {
      headers: { "Accept-Encoding": "gzip, deflate" },
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
