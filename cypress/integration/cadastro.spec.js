/// <reference types="cypress" />

beforeEach(function () {
  cy.visit("https://www.jumia.co.ao/register", {
    headers: { "Accept-Encoding": "gzip, deflate" },
  });
});

describe("Should navegate to store", function () {
  it("Change site Lang", () => {
    cy.get(".dropdown-toggle").click();
  });

  it("Signup User", () => {
    cy.get("#name").type("Euclides do Rosário").should('have.value', 'Euclides do Rosário');
    cy.get("#email").type("euclidesdry@gmail.com").should('have.value', 'euclidesdry@gmail.com');
    cy.get("#phoneNumber").type("990735489").should('have.value', '990735489');
    cy.get("#password").type("@990735489#").should('have.value', '@990735489#');
  });

  describe("Should mark Chechbox", () => {
    it("Mark Checkbox", () => {
      cy.get(":nth-child(1) > .phone-check > .fake-input").click();
    });
  });
});
