module.exports = {
  entryPoints: ["src/index.ts"], // Specify the entry file(s) of your library
  splitting: true,
  sourcemap: true,
  minify: true,
  clean: true,
  dts: true,
  external: ["react", "react-dom", "react-icons"]
};
