import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "es2019",
  entry: ["components/index.ts"],
  format: ["cjs", "esm"],
});
