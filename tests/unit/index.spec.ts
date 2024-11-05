import { twoSum } from '../../src/utils/index';

describe('twoSum的测试', () => {
  it('测试正常情况', () => {
    const a = twoSum([1, 2, 3, 4, 5], 7);
    expect(a).toEqual([2, 5]);
  });
});
