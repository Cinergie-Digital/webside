import { test, expect } from '@playwright/test';

test('Career jobs API should return available jobs', async ({ playwright }) => {
  const api = await playwright.request.newContext({
    baseURL: 'https://api.cinergiedigital.com',
  });

  const response = await api.get(
    '/recruitment/admin/api_jobs.php'
  );

  // 1️⃣ HTTP-level validation
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('Jobs API response:', body);

  // 2️⃣ Contract-level validation
  expect(body).toHaveProperty('data');
  expect(Array.isArray(body.data)).toBe(true);

  // 3️⃣ Business-level validation
  expect(body.data.length).toBeGreaterThan(0);

  // 4️⃣ Schema validation for ONE job
  const job = body.data[0];

  expect(job).toHaveProperty('job_id');
  expect(job).toHaveProperty('title');
  expect(job).toHaveProperty('location');
  expect(job).toHaveProperty('salary_package');

  // 5️⃣ Type sanity checks
  expect(typeof job.job_id).toBe('number');
  expect(typeof job.title).toBe('string');
  expect(typeof job.location).toBe('string');

  await api.dispose();
});
