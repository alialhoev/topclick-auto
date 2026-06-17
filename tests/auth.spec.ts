import { test, expect } from '@playwright/test';

test('Успешная авторизация на ТопКлик', async ({ page }) => {
  // 1. Авторизация
await page.goto('https://dev.topklik.online/');

  await page.getByRole('textbox', { name: 'логин' }).fill('tester@inzhenerka.tech');
  await page.getByRole('textbox', { name: 'пароль' }).fill('LetsTest!');
  await page.getByRole('button', { name: 'Войти' }).click();

  await expect(page.getByText('Калькулятор столешниц')).toBeVisible();
});

