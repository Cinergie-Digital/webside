import { test, expect } from '@playwright/test';

test('User can apply for a job from Career page', async ({ page }) => {

  // 1️⃣ Go to website
  await page.goto('https://synergydigital.com');

  // 2️⃣ Click on Careers
  await page.click('text=Careers');

  // 3️⃣ Wait for jobs to load
  await page.waitForSelector('.job-card');

  // 4️⃣ Click first job
  await page.locator('.job-card').first().click();

  // 5️⃣ Click Apply button
  await page.click('text=Apply');

  // 6️⃣ Fill the form
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'testuser@example.com');
  await page.fill('input[name="phone"]', '03001234567');
  await page.fill('textarea[name="message"]', 'This is automated E2E test.');

  // 7️⃣ Upload CV
  await page.setInputFiles('input[type="file"]', 'tests/test-cv.pdf');

  // 8️⃣ Submit
  await page.click('button[type="submit"]');

  // 9️⃣ Verify success message
  await expect(page.locator('text=Application submitted')).toBeVisible();
});
