Cypress.Commands.add("openLoginPage", () => {
    cy.visit("http://the-internet.herokuapp.com/login");
})