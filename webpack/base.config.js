import HtmlWebpackPlugin from 'html-webpack-plugin';
import { myPath, srcPath } from '../utils/myPath.js';

export default {
  mode: 'production',
  entry: srcPath('index.ts'),
  output: {
    path: myPath('dist'),
    filename: 'index.js',
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
