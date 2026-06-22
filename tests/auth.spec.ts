import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('Успешная авторизация на ТопКлик', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openUrl();
  await loginPage.fillLogin('tester@inzhenerka.tech');
  await loginPage.fillPassword('LetsTest!');
  await loginPage.clickSubmit();

  await expect(page.getByText('Калькулятор столешниц')).toBeVisible();
});
