import { test } from '@playwright/test';
import { AdminLoginPage } from '../pages/AdminLoginPage .ts';


test.describe('Admin Login Suite', () => {
  let loginPage: AdminLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new AdminLoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('admin', 'password');
    await loginPage.assertSuccessfulLogin();
  });

  const invalidCredentials = [
    { username: '', password: 'password', desc: 'empty username' },
    { username: 'admin', password: '', desc: 'empty password' },
    { username: '', password: '', desc: 'both fields empty' },
  ];

  for (const { username, password, desc } of invalidCredentials) {
    test(`should show error message with ${desc}`, async () => {
      await loginPage.goto();
      await loginPage.login(username, password);
      await loginPage.assertFailedLogin();
    });
  }
});
