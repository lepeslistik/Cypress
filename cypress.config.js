const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "http://localhost:1234",
    excludeSpecPattern: "cypress/e2e/{1*,2*}/*",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
