import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // 1. Проект-сетап. Он выполнится самым первым
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/, 
    },

    // 2. Основной проект для тестов
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json', 
      },
      dependencies: ['setup'], 
    },
  ],
});
