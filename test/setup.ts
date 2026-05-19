import { it } from 'node:test';
import path from 'node:path';

// Remove color from snapshots
process.env['FORCE_COLOR'] = '0';
if (process.env['RUNNER_DEBUG'] === '1') {
  process.env['DEBUG'] = 'puppeteer:*';
}

if (it.snapshot) {
  it.snapshot.setResolveSnapshotPath((testPath) => {
    if (!testPath) {
      return '';
    }
    // throw new Error(`Don't load test snapshots ${testPath}`);
    const relativePath = path.relative(
      path.join(process.cwd(), 'lib'),
      testPath
    );
    const snapshotPath = path.join(
      process.cwd(),
      relativePath.replace('.js', '.ts.snapshot')
    );
    return snapshotPath;
  });
}
