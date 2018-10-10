/* eslint-disable */
var OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        uglifyOptions: {
          mangle: {
            keep_fnames: true,
          },
        },
      }),
    ],
  },
  plugins: [new OptimizeCSSAssetsWebpackPlugin()],
};
