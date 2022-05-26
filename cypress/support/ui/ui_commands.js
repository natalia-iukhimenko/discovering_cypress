let baseUrl = Cypress.env("uiUrl");

Cypress.Commands.add("openLoginPage", () => {
    cy.visit(`${baseUrl}/login`);
})