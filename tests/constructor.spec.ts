import { ConstructorPage } from '../pages/ConstructorPage';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.topklik.online/');
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
