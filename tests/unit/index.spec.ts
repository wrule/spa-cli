import { twoSum } from '@/utils/index';

describe('twoSum测试', () => {
  it('正常情况 - 数组中间的两个数', () => {
    const result = twoSum([1, 2, 3, 4, 5], 7);
    expect(result).toEqual([3, 2]); // 4 + 3 = 7
  });

  it('数组首尾两个数', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 0]); // 7 + 2 = 9
  });

  it('包含重复数字的情况', () => {
    const result = twoSum([3, 3], 6);
    expect(result).toEqual([1, 0]); // 3 + 3 = 6
  });

  it('数组只有两个数', () => {
    const result = twoSum([1, 2], 3);
    expect(result).toEqual([1, 0]); // 2 + 1 = 3
  });

  it('没有符合条件的结果', () => {
    const result = twoSum([1, 2, 3], 8);
    expect(result).toEqual([]);
  });

  it('数组包含负数', () => {
    const result = twoSum([1, -2, 3, -4], -1);
    expect(result).toEqual([3, 1]); // -4 + -2 = -6
  });

  it('包含0的情况', () => {
    const result = twoSum([0, 1, 2, 0], 0);
    expect(result).toEqual([3, 0]); // 0 + 0 = 0
  });

  it('大数值的情况', () => {
    const result = twoSum([1000000, 2000000], 3000000);
    expect(result).toEqual([1, 0]);
  });

  // 边界情况测试
  it('输入空数组', () => {
    const result = twoSum([], 1);
    expect(result).toEqual([]);
  });

  it('输入只有一个数的数组', () => {
    const result = twoSum([1], 1);
    expect(result).toEqual([]);
  });
});
