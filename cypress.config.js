const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    pageLoadTimeout: 180000,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
})
