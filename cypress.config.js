const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    uiUrl: 'the-internet.herokuapp.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: 'https://reqres.in',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})