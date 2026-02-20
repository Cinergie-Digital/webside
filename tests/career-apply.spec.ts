import { test, expect } from '@playwright/test';

test.describe('Career Page - E2E Apply Flow', () => {

  test('User can apply for a job from Career page', async ({ page }) => {

    const uniqueEmail = `test${Date.now()}@example.com`;

    // 1️⃣ Open homepage
    await page.goto('https://cinergiedigital.com/');

    // 2️⃣ Go to career page
    await page.locator('a[href="/career"]').first().click();

    // 3️⃣ Wait for job cards
    await expect(page.locator('.job-card').first()).toBeVisible({ timeout: 15000 });

    // 4️⃣ Click first job
    await page.locator('.job-card').first().click();

    // 5️⃣ Wait for Apply form to load
    await expect(page.locator('text=Apply to the job')).toBeVisible({ timeout: 15000 });

    // 6️⃣ Fill form using correct name attributes
    await page.fill('input[name="fullName"]', 'Test User');
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('input[name="phoneNo"]', '03001234567');
    await page.fill('input[name="experience"]', '3');
    await page.fill('input[name="linkedIn"]', 'https://linkedin.com/in/testuser');
    await page.fill('input[name="noticePeriod"]', '30');

    // 7️⃣ Select salary radio button
    await page.check('input[name="salaryPackage"][value="Yes"]');

    // 8️⃣ Upload CV
    await page.setInputFiles('input[name="cv"]', 'tests/test-cv.pdf');

    // 9️⃣ Submit
    await page.click('button[type="submit"]');

    // 🔟 Wait for success modal
    await expect(page.locator('text=Application Sent')).toBeVisible({ timeout: 15000 });

  });

});
