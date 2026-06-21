import { LoginPage } from '../pages/LoginPage';
import { ConstructorPage } from '../pages/ConstructorPage';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

 await loginPage.openUrl();
 await loginPage.fillLogin('tester@inzhenerka.tech');
 await loginPage.fillPassword('LetsTest!');
 await loginPage.clickSubmit();
 await expect(page.getByText('Калькулятор столешниц')).toBeVisible();
});

test('Проверить работу переключателя "Скрыть столешницу"', async ({ page }) => {
    const constructorPage = new ConstructorPage(page);

  await constructorPage.clickSwitch();
  await expect(page.getByText('Показать столешницу')).toBeVisible();
});

test('Переключение на П-образную столешницу', async ({ page }) => {
  const constructorPage = new ConstructorPage(page);

    await constructorPage.clickCounterTop();
    await expect(page.getByRole('heading', { name: 'П-образная столешница' })).toBeVisible();
});