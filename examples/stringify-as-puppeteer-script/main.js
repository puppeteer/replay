import { stringify } from '../../lib/main.js';

console.log(
  await stringify({
    title: 'Test recording',
    steps: [],
  })
);
