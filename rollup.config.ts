import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');

export default [
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'lib/main.js',
        format: 'es',
      },
      {
        file: 'lib/cjs/main.cjs',
        format: 'cjs',
      },
    ],
    external: [...Object.keys(pkg.peerDependencies), /^lighthouse/],
    plugins: [typescript()],
  },
  {
    input: 'src/main.ts',
    output: {
      file: 'lib/main.d.ts',
      format: 'es',
    },
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
