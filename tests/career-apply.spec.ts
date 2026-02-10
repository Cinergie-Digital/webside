import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Career Page - E2E Apply Flow', () => {

  test('User can apply for a job from Career page', async ({ page }) => {

    // Generate unique email for every run
    const uniqueEmail = `testuser_${Date.now()}@example.com`;

    // 1️⃣ Go to website
    await page.goto('https://cinergiedigital.com/', {
      waitUntil: 'domcontentloaded'
    });

    // 2️⃣ Click Careers link (more reliable locator)
    await page.getByRole('link', { name: /career/i }).click();

    // 3️⃣ Wait for job list to appear
    await expect(page.locator('.job-card').first()).toBeVisible({ timeout: 10000 });

    // 4️⃣ Click first job
    await page.locator('.job-card').first().click();

    // 5️⃣ Click Apply button
    await page.getByRole('button', { name: /apply/i }).click();

    // 6️⃣ Wait for form to be visible
    const form = page.locator('form');
    await expect(form).toBeVisible({ timeout: 10000 });

    // 7️⃣ Fill the form (robust selectors)
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill(uniqueEmail);
    await page.getByLabel(/phone/i).fill('03001234567');
    await page.getByLabel(/message/i).fill('This is automated E2E test.');

    // 8️⃣ Upload CV
    const filePath = path.join(__dirname, 'test-cv.pdf');
    await page.setInputFiles('input[type="file"]', filePath);

    // 9️⃣ Submit
    await page.getByRole('button', { name: /submit/i }).click();

    // 🔟 Verify success message
    await expect(
      page.locator('text=Application submitted')
    ).toBeVisible({ timeout: 10000 });

  });

});
