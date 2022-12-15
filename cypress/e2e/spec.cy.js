/// <reference types="Cypress" />

describe('My First Test', () => {
  it('finds the content "type" and click it', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();
  });
});
