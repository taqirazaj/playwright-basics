// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory where Playwright tests are located
  testDir: './tests',

  // Global timeout for tests
  timeout: 30000, // 30 seconds

  // Retry configuration
  retries: 2, // Retry failed tests 2 times

  // Test reporter configuration
  reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],

  // Base URL for tests
  use: {
    baseURL: 'https://example.com', // Change this to your base URL
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    video: 'on', // Record video of each test
    trace: 'on', // Record trace for each test
    screenshot: 'on', // Take screenshot on failure
  },

  // Projects configuration (e.g., different browsers)
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'google chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  // Optionally, define global setup and teardown hooks
  globalSetup: './global-setup.ts',
  globalTeardown: './global-teardown.ts',
});
