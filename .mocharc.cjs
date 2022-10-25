module.exports = {
  reporter: 'spec',
  // Allow `console.log`s to show up during test execution
  logLevel: 'debug',
  exit: !!process.env.CI,
  spec: 'test/**/*.test.ts',
  extension: ['ts'],
  timeout: 25 * 1000,
  loader: 'ts-node/esm',
};
