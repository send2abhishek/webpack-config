const path = require("path");
module.exports = {
  // this is the entry point, this file usually imports all other modules in your application
  entry: "./src/index.js", // webpack will start from this file when running the build process.

  // here we can specify a name of the file which will be generated as a result of the build process
  // pass to the directory where this file should be generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"), // the output dir webpack will automatically generate this.
  },
  mode: "none",
};
