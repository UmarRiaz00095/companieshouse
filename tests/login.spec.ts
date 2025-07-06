import { test } from '@playwright/test';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { validCredentials, invalidCredentials } from '../data/logindata';


test.describe('Admin Login Suite', () => {
  let loginPage: AdminLoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new AdminLoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login(validCredentials.username, validCredentials.password);
    await loginPage.assertSuccessfulLogin();
  });

  for (const { username, password, desc } of invalidCredentials) {
    test(`should show error message with ${desc}`, async () => {
      await loginPage.login(username, password);
      await loginPage.assertFailedLogin();
    });
  }
});

