import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.topklik.online/');
  await page.getByRole('textbox', { name: 'логин' }).fill('tester@inzhenerka.tech');
  await page.getByRole('textbox', { name: 'пароль' }).fill('LetsTest!');
  await page.getByRole('button', { name: 'Войти' }).click();
  // Ждем, пока загрузится, чтобы тест  стартовал на готовой странице
  await expect(page.getByText('Калькулятор столешниц')).toBeVisible();
});

test('Проверить работу переключателя "Скрыть столешницу"', async ({ page }) => {
 
  await page.getByRole('img', { name: 'toggle' }).click();
  await expect(page.getByText('Показать столешницу')).toBeVisible();
});

test('Переключение на П-образную столешницу', async ({ page }) => {

    await page.getByTestId('countertop-type-u').click();
    await expect(page.getByRole('heading', { name: 'П-образная столешница' })).toBeVisible();
});