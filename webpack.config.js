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

  // this is javascript object
  module: {
    // rules simply contains an array of specific rule
    rules: [
      {
        test: /\.(png|jpeg)$/, // it checks if file name contains either png or jpg
        // the secound property should use or type
        // here avaliable propery can be asset/resource asset/inline asset
        // so every time we try to import a jpg file, webpack will check if it has a rule for it.
        // if rule doesn't found it will give a error which means unfortunately, I don't know how to import this file.
        type: "asset/resource",
      },
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
      },
    ],
  },
};
