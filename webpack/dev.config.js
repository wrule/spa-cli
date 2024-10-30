import HtmlWebpackPlugin from 'html-webpack-plugin';
import { myPath, srcPath } from '../utils/myPath.js';

export default {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    compress: true,
  },
};
