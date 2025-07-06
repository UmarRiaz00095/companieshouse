import { Page, Locator, expect } from '@playwright/test';

export class AdminLoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly roomsTab: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#doLogin');
    this.roomsTab = page.getByText('Rooms');
    this.errorMessage = page.locator('.card-body .alert.alert-danger[role="alert"]');

  }

  async goto() {
    await this.page.goto('https://automationintesting.online/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertSuccessfulLogin() {
    await expect(this.roomsTab).toBeVisible({ timeout: 10000 });
  }

  async assertFailedLogin() {
    await this.errorMessage.waitFor({ state: 'visible', timeout: 10000 });
    await expect(this.errorMessage).toHaveText('Invalid credentials', { timeout: 7000 });
  }
}
