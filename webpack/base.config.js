import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { myPath, srcPath } from '../utils/myPath.js';

export default {
  entry: srcPath('index.tsx'),
  output: {
    path: myPath('dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs'],
    alias: {
      '@': myPath('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(css)$/i,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|webp|gif|ico|bmp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcPath('index.html'),
      hash: true,
      // favicon: '',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].chunk.[contenthash:8].css',
    }),
  ],
};
