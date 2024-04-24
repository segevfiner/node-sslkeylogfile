import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/global.ts"],
  target: "node18",
  format: ["cjs", "esm"],
  sourcemap: true,
  dts: true,
});
