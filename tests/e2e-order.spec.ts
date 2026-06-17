import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.topklik.online/');
  await page.getByRole('textbox', { name: 'логин' }).fill('tester@inzhenerka.tech');
  await page.getByRole('textbox', { name: 'пароль' }).fill('LetsTest!');
  await page.getByRole('button', { name: 'Войти' }).click();
});

test('e2e-сценарий: Сборка и расчет индивидуального заказа', async ({ page }) => {

    // П-образная столешница, толщина = 4
    await page.getByTestId('countertop-type-u').click();
    await page.getByTestId('countertop').getByRole('button', { name: 'arrow-down-white' }).click();
    await page.getByTestId('countertop').getByRole('button', { name: '4' }).click();

    // Плинтус
    await page.getByRole('button', { name: 'Плинтус' }).click();

    // Остров

    await page.locator('[data-testid="product-item"]').getByText('Остров').click();

    // Сток воды
    await page.locator('[data-testid="options-item"]').getByText('Проточки для стока воды').click();

    // Выбор цвета
    await page.locator('[data-testid="stone-block"]').getByText('N-103 Gray Onix').click();

    // Расчет
      await page.getByTestId('calc-button').click();
      const page1Promise = page.waitForEvent('popup');
      await page.getByTestId('open-report-button').click();
      const page1 = await page1Promise;

    // Проверка расчета

     await expect(page1.getByRole('cell', { name: /acryl.*Neomarm.*N-103/ })).toBeVisible();
     await expect(page1.getByRole('cell', { name: 'П-образная' })).toBeVisible();
     await expect(page1.getByRole('cell', { name: 'Проточки для стока воды'}).first()).toBeVisible();
     await expect(page1.getByRole('cell', { name: '372500.00 ₽' })).toBeVisible();


});