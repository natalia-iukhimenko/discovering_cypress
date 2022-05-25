class SecurePage {
    get #flashMessageElement() {
        return cy.get("#flash");
    }

    checkUrl() {
        cy.location("pathname").should("equal", "/secure");
        return this;
    }

    checkSuccessMessageDisplayed() {
        this.#flashMessageElement.should("have.class", "success")
            .invoke("text")
            .should("include", "You logged into a secure area");
        return this;
    }
}
export default new SecurePage();