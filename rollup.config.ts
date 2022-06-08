import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

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
    external: ['../lib/main.js'],
    plugins: [typescript({ tsconfig: 'tsconfig.cli.json' })],
  },
];
