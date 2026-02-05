import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
  ],

  use: {
    baseURL: 'https://api.cinergiedigital.com',
  },
});
