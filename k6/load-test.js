import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,        // Virtual Users (simulate 50 users)
  duration: '2m', // Total test duration
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests < 500ms
    http_req_failed: ['rate<0.01'],   // <1% requests fail
    checks: ['rate>0.99'],            // 99% checks pass
  },
};

export default function () {
  // Your deployed React app URL (Netlify, Vercel, etc.)
  const res = http.get('https://cinergiedigital.netlify.app');

  // Check if the page loaded successfully
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Wait 1 second between requests to simulate real users
  sleep(1);
}

