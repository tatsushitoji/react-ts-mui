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

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "babel-loader" },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  node: {
    fs: 'empty',
  },
};

const development = {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: { colors: true },
    port: 3000,
    // historyApiFallback: true,
  },
};

const production = {

};


module.exports = {
  ...base,
  ...(NODE_ENV === 'development' && development),
};