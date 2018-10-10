/* eslint-disable */
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfiguration = require('./webpack.commons.config.js');
var optimizationConfiguration = require('./webpack.optimization.config.js');

const productionConfiguration = env => {
  const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
  return {
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    ],
  };
};

module.exports = merge.smart(baseConfiguration, optimizationConfiguration, productionConfiguration);
