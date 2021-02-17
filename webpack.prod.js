const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
var webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
var path = require("path");

module.exports = merge(common, {
  mode: "production",
  devtool: "",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({ filename: "bundle.css" }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionWebpackPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
    }),
  ],
});
