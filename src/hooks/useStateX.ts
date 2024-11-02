import React, { useState } from 'react';
import { freeze, produce } from 'immer';

export
function useStateX<T>(initValue: T | (() => T)) {
  return useState<T>(initValue);
}
