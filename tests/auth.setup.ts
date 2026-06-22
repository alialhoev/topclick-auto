import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openUrl();
  await loginPage.fillLogin('tester@inzhenerka.tech');
  await loginPage.fillPassword('LetsTest!');
  await loginPage.clickSubmit();

  // Убедимся, что главная страница загрузилась
  await expect(page.getByText('Калькулятор столешниц')).toBeVisible();

  // Сохраняем куки и токены в файл
  await page.context().storageState({ path: authFile });
});
