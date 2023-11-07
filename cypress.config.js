const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mao5un",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,tsx,feature}",
    exludeSpecPattern: "cypress/e2e/other/*.{js,jsx,tsx,feature}",
    // for this I can just use cy.visit("/") and If i change the URL I do it only here
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videoCompression: 51, // if I enable video recording 51 is the worst quality, 0 is the best quality
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name_env: "environment in cypress.config.js",
    },
  },
});
