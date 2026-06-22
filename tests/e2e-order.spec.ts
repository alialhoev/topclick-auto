import { ConstructorPage } from '../pages/ConstructorPage';
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Переходим сразу на страницу калькулятора
  await page.goto('https://dev.topklik.online/');
});

test('e2e-сценарий: Сборка и расчет индивидуального заказа', async ({ page }) => {
  const constructorPage = new ConstructorPage(page);

  // П-образная столешница, толщина = 4
  await constructorPage.clickCounterTop();
  await constructorPage.clickArrowDown();

  // Плинтус
  await constructorPage.clickPlinth();

  // Остров
  await constructorPage.selectIsland();

  // Сток воды
  await constructorPage.selectWaterDrain();

  // Выбор цвета
  await constructorPage.selectColorOnix();

  // Расчет
  await constructorPage.clickCalculate();
  const page1Promise = page.waitForEvent('popup');
  await constructorPage.clickReport();
  const page1 = await page1Promise;

  // Проверка расчета
  await expect(page1.getByRole('cell', { name: /acryl.*Neomarm.*N-103/ })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'П-образная' })).toBeVisible();
  await expect(page1.getByRole('cell', { name: 'Проточки для стока воды' }).first()).toBeVisible();
  await expect(page1.getByRole('cell', { name: '379800.00 ₽' })).toBeVisible();
});
