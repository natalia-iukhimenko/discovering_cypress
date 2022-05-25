import loginPage from "../support/pages/login_page";
import securePage from "../support/pages/secure_page";

describe("Test suite for login functionality", () => {
    beforeEach(() => {
        cy.openLoginPage();
    })

    it("Successfully login with valid credentials", () => {
        loginPage.login(Cypress.env("username"), Cypress.env("password"));
        securePage.checkUrl()
            .checkSuccessMessageDisplayed();
    })
})