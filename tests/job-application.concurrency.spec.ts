import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('Job Application Concurrency Test', () => {
  const jobId = 82; // Job to apply for

  const createFormData = (userIndex: number) => {
    return {
      job_id: jobId,
      fullName: `User ${userIndex}`,
      email: `user${userIndex}@example.com`,
      phoneNo: `+12345678${userIndex}`,
      experience: '2',
      linkedin_profile: 'https://linkedin.com/in/user',
      noticePeriod: '30',
      salaryPackage: 'Yes',
      reference: 'REF82',
      job_title: 'Frontend Developer',
      screening_questions: JSON.stringify([{ question: 'Do you know React?', answer: 'Yes' }]),
        cv: {
      name: `testCV${userIndex}.txt`,
      mimeType: 'application/pdf',
      buffer: Buffer.from(`This is a test CV for user ${userIndex}`)
    }
    };
  };

  test('Multiple users applying at the same time', async ({ request }) => {
    // Create 5 concurrent requests
    const promises = [];
    for (let i = 1; i <= 5; i++) {
      promises.push(
        request.post('https://api.cinergiedigital.com/recruitment/admin/save_application.php', {
          multipart: createFormData(i),
        })
      );
    }

    // Run all at the same time
    const responses = await Promise.all(promises);

    // Assert all responses
    for (const response of responses) {
      const body = await response.json();
      expect(body.success).toBeTruthy();
    }
  });
});
