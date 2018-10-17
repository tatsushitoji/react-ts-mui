const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  NODE_ENV,
} = process.env;

const base = {
  mode: NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "babel-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  node: {
    fs: 'empty',
  },
  devtool: 'eval',
  devServer: {
    stats: { colors: true },
    port: 3000,
    open: true,
    // historyApiFallback: true,
  },
};

module.exports = {
  ...base,
};