class LoginPage {
    get #usernameInput() {
        return cy.get("#username");
    }

    get #passwordInput() {
        return cy.get("#password");
    }

    get #loginButton() {
        return cy.get("button[type = submit]");
    }

    get #flashMessageElement() {
        return cy.get("#flash");
    }

    setUsername(username) {
        this.#usernameInput.type(username);
        return this;
    }

    setPassword(password) {
        this.#passwordInput.type(password);
        return this;
    }

    clickLoginButton() {
        this.#loginButton.click();
        return this;
    }

    login(username, password) {
        this.setUsername(username)
            .setPassword(password)
            .clickLoginButton();
    }

    checkUrl() {
        cy.location("pathname").should("equal", "/login");
        return this;
    }

    checkErrorMessage(expectedText) {
        this.#flashMessageElement.should("have.class", "error")
            .invoke("text")
            .should("include", expectedText);
        return this;
    }

    checkWrongUsernameMessageDisplayed() {
        return this.checkErrorMessage("Your username is invalid");
    }

    checkWrongPasswordMessageDisplayed() {
        return this.checkErrorMessage("Your password is invalid");
    }
}
export default new LoginPage();