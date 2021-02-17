const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prod = process.argv.indexOf("-p") !== -1;

module.exports = {
  context: __dirname,
  target: "web",
  mode: prod ? "production" : "development",
  devtool: prod ? "" : "eval-source-map",
  // node: { fs: "empty" },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
      constants: path.resolve(__dirname, "src/constants"),
      assets: path.resolve(__dirname, "src/assets"),
      src: path.resolve(__dirname, "src"),
      helpers: path.resolve(__dirname, "src/helpers"),
      isEmpty: path.resolve(__dirname, "src/helpers/isEmpty.ts"),
      utils: path.resolve(__dirname, "src/utils"),
      ts: path.resolve(__dirname, "src/ts"),
      services: path.resolve(__dirname, "src/services"),
      selectors: path.resolve(__dirname, "src/selectors"),
      navigations: path.resolve(__dirname, "src/navigations"),
      scenes: path.resolve(__dirname, "src/scenes"),
      environment: path.resolve(
        __dirname,
        prod
          ? "src/environments/production.ts"
          : "src/environments/development.ts"
      ),
    },
  },
  entry: {
    app: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "body",
      //   favicon: 'public/favicon.ico'
    }),
    // new MiniCssExtractPlugin({
    //   filename: "style.css",
    //   chunkFilename: "[name].css"
    // }),
    // new MiniCssExtractPlugin()
  ],
};
