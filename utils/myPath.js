import path from 'path';

export
function myPath(subPath) {
  return path.join(import.meta.dirname, '../', subPath);
}

export
function srcPath(subPath) {
  return path.join(myPath('src'), subPath);
}
