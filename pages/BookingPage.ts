import { Locator, Page, expect } from '@playwright/test';

export class BookingPage {
  readonly page: Page;
  readonly checkinInput: Locator;
  readonly checkoutInput: Locator;
  readonly checkAvailabilityBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkinInput = page.locator('input[placeholder="Check In"], input.form-control').nth(0);
    this.checkoutInput = page.locator('input[placeholder="Check Out"], input.form-control').nth(1);
    this.checkAvailabilityBtn = page.locator('button', { hasText: 'Check Availability' });
  }

  async goto() {
    await this.page.goto('https://automationintesting.online/'); 
  }

  async getCheckinValue() {
    return this.checkinInput.inputValue();
  }

  async getCheckoutValue() {
    return this.checkoutInput.inputValue();
  }

  async setCheckin(date: string) {
    await this.checkinInput.fill(date);
  }

  async setCheckout(date: string) {
    await this.checkoutInput.fill(date);
  }

  async clickCheckAvailability() {
    await this.checkAvailabilityBtn.click();
  }

  async validateDates() {
    const checkin = await this.getCheckinValue();
    const checkout = await this.getCheckoutValue();
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    expect(checkoutDate > checkinDate).toBeTruthy();
  }
}
