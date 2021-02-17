var path = require("path");
var webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
var BrotliPlugin = require("brotli-webpack-plugin");
const prod = process.argv.indexOf("-p") !== -1;
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: prod ? "production" : "development",
  entry: {
    app: [path.resolve(__dirname + "/src/index.tsx")],
  },
  node: { fs: "empty" },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "public", "[name]-manifest.json"),
      name: "[name]",
      context: path.resolve(__dirname, "/public"),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
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
    //new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    //root: path.resolve(__dirname, "Scripts/react"),
    modules: [__dirname, "node_modules"],
  },
});
