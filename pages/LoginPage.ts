import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
 private readonly page: Page;
 private readonly loginInput: Locator;
  private readonly passwordInput: Locator;
    private readonly button: Locator;


 constructor(page:Page) {
    this.page = page;
    this.loginInput = page.getByRole('textbox', {name:'логин'});
    this.passwordInput = page.getByRole('textbox', { name: 'пароль' });
    this.button = page.getByRole('button', { name: 'Войти' })
 }

async openUrl() {
  await this.page.goto('https://dev.topklik.online/');
  
}

async fillLogin(email: string) {
    await this.loginInput.fill(email);

}

async fillPassword(password: string) {
    await this.passwordInput.fill(password);

}

async clickSubmit() {
    await this.button.click();

}

}

