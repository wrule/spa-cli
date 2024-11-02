import React, { useState } from 'react';

export
function useStateX<T>(initValue: T | (() => T)) {
  return useState<T>(initValue);
}
