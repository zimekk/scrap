/// <reference types="cypress" />

describe("app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("");
  });

  it("default section", () => {
    cy.get("h1").should("contain.text", "Scrap");
    cy.get("h2").should("have.text", "Builder");
  });

  it("configure section", () => {
    cy.get("h1").contains("configure").click();
    cy.get("h2").should("have.text", "Configure");
  });

  it("finances section", () => {
    cy.get("h1").contains("finances").click();
    cy.get("h2:first").should("have.text", "Deposits");
    cy.get("h2:last").should("have.text", "Finances");
  });

  it("games section", () => {
    cy.get("h1").contains("games").click();
    cy.get("h2").should("have.text", "Games");
  });

  it("products section", () => {
    cy.get("h1").contains("products").click();
    cy.get("h2").should("have.text", "Products");
  });

  it("properties section", () => {
    cy.get("h1").contains("properties").click();
    cy.get("h2").should("have.text", "Properties");
  });

  it("vehicles section", () => {
    cy.get("h1").contains("vehicles").click();
    cy.get("h2", { timeout: 60000 })
      .should("have.text", "Vehicles")
      .should("be.visible");

    cy.get("a").contains("Show map").click().should("have.text", "Hide map");
    cy.get("a")
      .contains("Show chart")
      .click()
      .should("have.text", "Hide chart");
    cy.get("a")
      .contains("Show summary")
      .click()
      .should("have.text", "Hide summary");
  });
});
