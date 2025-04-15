const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    uiUrl: 'the-internet.herokuapp.com',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://reqres.in',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
  },
})
