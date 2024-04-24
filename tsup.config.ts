import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ["src/index.ts"],
    target: 'node18',
    format: ['cjs', 'esm'],
    sourcemap: true,
    dts: true,
})
