/// <reference types="cypress" />

describe("app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:8080/");
  });

  it("default section", () => {
    cy.get("h1").should("contain.text", "Scrap");
    cy.get("h2").should("have.text", "Configure");
  });

  it("finances section", () => {
    cy.get("h1").contains("finances").click();
    cy.get("h2").should("have.text", "Finances");
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
    cy.get("h2").should("have.text", "Vehicles");
  });
});
