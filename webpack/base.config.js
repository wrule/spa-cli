import HtmlWebpackPlugin from 'html-webpack-plugin';
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
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcPath('index.html'),
      hash: true,
      // favicon: '',
    }),
  ],
};
