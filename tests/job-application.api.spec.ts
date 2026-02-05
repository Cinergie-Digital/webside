import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Save job application API should work', async ({ request }) => {

  const cvPath = path.join(__dirname, 'dummy-cv.txt');
  fs.writeFileSync(cvPath, 'Test CV content');

  const response = await request.post(
    '/recruitment/admin/save_application.php',
    {
      multipart: {
        job_id: '1', // 🔴 must exist in DB
        fullName: 'CI Test User',
        email: `ci_test_${Date.now()}@example.com`,
        phoneNo: '+923001234567',
        experience: '3',
        linkedin_profile: 'https://linkedin.com/in/citest',
        noticePeriod: '30',
        salaryPackage: 'Yes',
        reference: 'CI',
        job_title: 'Frontend Developer',
        screening_questions: JSON.stringify([]),
        cv: {
          name: 'dummy-cv.txt',
          mimeType: 'text/plain',
          buffer: fs.readFileSync(cvPath),
        },
      },
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.success).toBeTruthy();
});
