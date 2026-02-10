// tests/contact-us.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Us Page - E2E Flow', () => {

  test('User can fill and submit the contact us form', async ({ page }) => {
    const uniqueEmail = `test${Date.now()}@example.com`;

    // 1️⃣ Open homepage
    await page.goto('https://cinergiedigital.com/');

    // 2️⃣ Navigate to Contact Us page
    await page.locator('a[href="/contact"]').first().click();

    // 3️⃣ Wait for the contact form to load
    await expect(page.locator('text=Ready to Connect?')).toBeVisible({ timeout: 15000 });

    // 4️⃣ Fill out the form fields
    await page.fill('input[name="business"]', 'Test Business');
    await page.fill('input[name="fname"]', 'Test');
    await page.fill('input[name="lname"]', 'User');
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('textarea[name="message"]', 'This is a test message from E2E test.');

    // 5️⃣ Click submit button
    await page.click('button[type="submit"]');

    // 6️⃣ Wait for the success modal
    await expect(page.locator('text=Application Sent')).toBeVisible({ timeout: 15000 });
  });

});
