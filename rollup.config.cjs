const typescript = require('@rollup/plugin-typescript').default;
const dts = require('rollup-plugin-dts').default;
const pkg = require('./package.json');

module.exports = [
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'lib/main.js',
        sourcemap: true,
        format: 'es',
      },
      {
        file: 'lib/cjs/main.cjs',
        sourcemap: true,
        format: 'cjs',
      },
    ],
    external: Object.keys(pkg.peerDependencies),
    plugins: [typescript({ module: 'NodeNext' })],
  },
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'lib/main.d.ts',
        format: 'es',
      },
      {
        file: 'lib/cjs/main.d.cts',
        format: 'cjs',
      },
    ],
    external: [
      'devtools-protocol',
      'devtools-protocol/types/protocol-mapping.js',
    ],
    plugins: [
      dts({
        compilerOptions: { declaration: true },
      }),
    ],
  },
  {
    input: 'src/cli.ts',
    output: {
      file: 'lib/cli.js',
      format: 'es',
      sourcemap: true,
      banner: '#!/usr/bin/env node',
    },
    external: [
      ...Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies }),
      '../lib/main.js',
      'fs',
      'path',
      'url',
      'process',
      'yargs/helpers',
    ],
    plugins: [typescript({ tsconfig: 'tsconfig.cli.json' })],
  },
];
