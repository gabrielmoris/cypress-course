const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "mao5un",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a configFile value or use development by default
      if (config.env.configFile) {
        const file = config.env.configFile;
        return getConfigurationByFile(file);
      } else {
        return;
      }
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
    // videoUploadOnPasses: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name_env: "environment in cypress.config.js",
    },
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
});
