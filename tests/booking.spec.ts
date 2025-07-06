import { test, expect } from '@playwright/test';
import { BookingPage } from '../pages/BookingPage';

test.describe('Booking Date Selection', () => {
  let bookingPage: BookingPage;

  test.beforeEach(async ({ page }) => {
    bookingPage = new BookingPage(page);
    await bookingPage.goto();
  });

  test('default dates should be set correctly', async () => {
    const checkin = await bookingPage.getCheckinValue();
    const checkout = await bookingPage.getCheckoutValue();

    expect(checkin).toBe('06/07/2025');
    expect(checkout).toBe('07/07/2025');
  });

  test('should allow updating checkin and checkout dates', async () => {
    await bookingPage.setCheckin('10/07/2025');
    await bookingPage.setCheckout('15/07/2025');

    const checkin = await bookingPage.getCheckinValue();
    const checkout = await bookingPage.getCheckoutValue();

    expect(checkin).toBe('10/07/2025');
    expect(checkout).toBe('15/07/2025');
  });

  test('should fail validation if checkout is before checkin', async () => {
    await bookingPage.setCheckin('20/07/2025');
    await bookingPage.setCheckout('18/07/2025');


    await expect(async () => {
      await bookingPage.validateDates();
    }).rejects.toThrow();
  });

  test('should click on check availability button', async () => {
    await bookingPage.clickCheckAvailability();

    // We can add assertions here based on what clicking the button does
    

    
  });
});
