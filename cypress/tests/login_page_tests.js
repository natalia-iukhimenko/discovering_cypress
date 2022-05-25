import loginPage from "../support/pages/login_page";
import securePage from "../support/pages/secure_page";
const { faker } = require("@faker-js/faker");

describe("Test suite for login functionality", () => {
    let username = Cypress.env("username");
    let password = Cypress.env("password");

    beforeEach(() => {
        cy.openLoginPage();
    })

    it("Successfull login with valid credentials", () => {
        loginPage.login(username, password);
        securePage.checkUrl()
            .checkSuccessMessageDisplayed();
    })

    it("Unsuccessful login with wrong username", () => {
        loginPage.login(faker.internet.userName(), password);
        loginPage.checkUrl()
            .checkWrongUsernameMessageDisplayed();
    })

    it("Unsuccessful login with wrong password", () => {
        loginPage.login(username, faker.internet.password());
        loginPage.checkUrl()
            .checkWrongPasswordMessageDisplayed();
    })

    it("Unsuccessful login without password", () => {
        loginPage.setUsername(username)
            .clickLoginButton()
            .checkUrl()
            .checkWrongPasswordMessageDisplayed();
    })

    it("Unsuccessful login without username", () => {
        loginPage.setPassword(password)
            .clickLoginButton()
            .checkUrl()
            .checkWrongUsernameMessageDisplayed();
    })
})