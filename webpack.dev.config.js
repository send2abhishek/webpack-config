const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm

module.exports = {
  // this is the entry point, this file usually imports all other modules in your application
  entry: "./src/index.js", // webpack will start from this file when running the build process.

  // here we can specify a name of the file which will be generated as a result of the build process
  // pass to the directory where this file should be generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"), // the output dir webpack will automatically generate this.
    publicPath: "auto", // in version 4 or below default was empty string that why image was not loaded properly
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },

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
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        // use is used for loader
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.hbs$/,
        // use is used for loader
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack in Action",
      description: "some desc",
      template: "src/template/index.hbs",
    }),
  ],
};
