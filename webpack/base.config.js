import { myPath, srcPath } from '../utils/myPath.js';

export default {
  mode: 'production',
  entry: srcPath('index.ts'),
  output: {
    path: myPath('dist'),
    filename: 'index.js'
  },
};
