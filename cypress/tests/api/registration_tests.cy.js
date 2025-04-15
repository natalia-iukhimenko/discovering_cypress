const { faker } = require("@faker-js/faker");
import {checkStatus200} from "../../support/api/check_utils";

describe("API tests", () => {
    it("Registration & login scenario", () => {
        const userId = 1;
        const passwordLength = 6;
        cy.getSingleUser(userId).then((userResponse => {
            let newUser = {
                "email": userResponse.body.data.email,
                "password": faker.internet.password(passwordLength)
            }
            cy.register(newUser).then((registerResponse) => {
                checkStatus200(userResponse);
                expect(registerResponse.body.id).to.equal(userId);
                cy.login(newUser).then((loginResponse) => {
                    checkStatus200(userResponse);
                    expect(loginResponse.body.token).to.equal(registerResponse.body.token);
                })
            })
        }));
    })
})