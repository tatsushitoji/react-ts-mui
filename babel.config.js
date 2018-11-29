const nodeEnv = process.env["NODE_ENV"];

const presets = [
  "@babel/react",
  "@babel/typescript",
  [
    "@babel/env",
    {
      "modules": false
    }
  ],
];

const plugins = [
  "@babel/proposal-class-properties",
  "@babel/proposal-object-rest-spread",
  "@babel/plugin-syntax-dynamic-import",
];

nodeEnv === 'production' && plugins.unshift("emotion", "react-remove-properties");
nodeEnv === 'development' && plugins.unshift(["emotion", { "sourceMap": true }]);

module.exports = {
  presets,
  plugins,
};
