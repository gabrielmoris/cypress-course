const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mao5un',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,tsx,feature}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
  },
});
