import { merge } from 'webpack-merge';
import baseConfig from './base.config.js';

export default merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
});
