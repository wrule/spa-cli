import { myPath, srcPath } from '../utils/myPath.js';

export default {
  entry: srcPath('index.js'),
  output: {
    path: myPath('dist'),
    filename: 'index.js'
  },
};