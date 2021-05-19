// Html Web Pack Plugin for create html file and add all resourses
const HtmlWebPackPlugin = require("html-webpack-plugin");
// minifed css files for production mode
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
module.exports = {
  entry: "./src/client/index.js",
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    libraryTarget: "var",
    library: "client",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new WorkboxPlugin.GenerateSW(),
  ],
};
