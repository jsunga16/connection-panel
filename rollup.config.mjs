import packageJson from "./package.json" assert { type: "json" };
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import gzip from "rollup-plugin-gzip";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      url({
        include: ["**/*.woff2"],
        limit: Infinity,
        fileName: "[dirname][name][extname]",
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      gzip({
        fileName: (name) => {
          if (name.endsWith(".mjs")) return name.replace(".mjs", ".gz.mjs");
          else return name.replace(".js", ".gz.js");
        },
      }),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
