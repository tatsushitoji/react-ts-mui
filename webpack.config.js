const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

const {
  NODE_ENV,
} = process.env;

const externals = [
  {
    module: 'react',
    global: 'React',
    entry: 'umd/react.development.js',
  },
  {
    module: 'react-dom',
    global: 'ReactDOM',
    entry: 'umd/react-dom.development.js',
  },
];

module.exports = {
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

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
  devtool: 'eval',
  devServer: {
    stats: { colors: true },
    port: 3000,
    open: true,
    // historyApiFallback: true,
  },
};
