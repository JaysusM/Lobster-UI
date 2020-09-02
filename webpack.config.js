var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
              test: /\.jsx?$/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/react', '@babel/env']
                  }
              },
              exclude: /node_modules/
          }
        ],
      },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    devServer: {
        port: process.env.PORT || 8080,
        contentBase: './src',
        historyApiFallback: true
    }
};