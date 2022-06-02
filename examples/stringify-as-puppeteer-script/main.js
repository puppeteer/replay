import { stringify } from '../../lib/index.js';

console.log(
  await stringify({
    title: 'Test recording',
    steps: [],
  })
);
