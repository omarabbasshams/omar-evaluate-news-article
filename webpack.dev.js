// Require file from node modules

// Html Web Pack Plugin for create html file and add all resourses
const HtmlWebPackPlugin = require("html-webpack-plugin");
// Clean Web Pack Plugin to clean dist folder every time of development creation
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  output: {
    libraryTarget: "var",
    library: "client",
  },
  module: {
    rules: [
      // Babel loader to convert modern js to basic js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // convert scss file to css and add to html file
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
