Cypress.Commands.add("getSingleUser", (id) => {
    cy.request("GET", `/api/users/${id}`);
})

Cypress.Commands.add("register", (jsonBody) => {
    cy.request("POST", "/api/register", jsonBody)
})

Cypress.Commands.add("login", (jsonBody) => {
    cy.request("POST", "/api/login", jsonBody)
})