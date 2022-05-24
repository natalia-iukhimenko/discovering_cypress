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
    }

    login(username, password) {
        this.setUsername(username)
            .setPassword(password)
            .clickLoginButton();
    }
}
export default new LoginPage();