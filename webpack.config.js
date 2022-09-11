const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // this is the entry point, this file usually imports all other modules in your application
  entry: "./src/index.js", // webpack will start from this file when running the build process.

  // here we can specify a name of the file which will be generated as a result of the build process
  // pass to the directory where this file should be generated
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"), // the output dir webpack will automatically generate this.
    publicPath: "dist/", // in version 4 or below default was empty string that why image was not loaded properly
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
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb
          },
        },
      },
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        // use is used for loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        // use is used for loader
        use: [MiniCssExtractPlugin, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      // enable the caching
      filename: "style.[contenthash].css",
    }),
  ],
};
