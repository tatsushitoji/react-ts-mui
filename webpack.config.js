const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  NODE_ENV,
} = process.env;

const devMode = NODE_ENV !== 'production';

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
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
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
    historyApiFallback: true,
  },
};

const production = {

};


module.exports = {
  ...base,
  ...(NODE_ENV === 'development' && development),
};