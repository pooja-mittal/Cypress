import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      experimentalRunAllSpecs:true
      // implement node event listeners here
    },
  },
});
