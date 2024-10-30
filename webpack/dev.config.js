import { merge } from 'webpack-merge';
import baseConfig from './base.config.js';

export default merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    compress: true,
  },
});
