const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const credentials = process.env.NODE_ENV || 'UAT';
let uri = 'http://uat-gummybears.com'; // UAT

if (credentials === 'PROD') {
  uri = 'https://test.tienda-sv.tmx-internacional.com';
} else if (credentials === 'QA') {
  uri = 'https://clarosv.wcaas.net';
}
console.warn(`${uri} ---> ${credentials}`);

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/main.js',
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnWarning: false,
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
    new webpack.DefinePlugin({
      CREDENTIALS: credentials,
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/containers/assets/index.ejs',
      filename: 'index.html',
      hash: true,
    }),
  ],
};
