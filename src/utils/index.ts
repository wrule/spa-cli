export function twoSum(nums: number[], target: number): number[] {
  const hashMap: { [name: number]: number } = {};
  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    if (hashMap[target - num] != null) {
      return [i, hashMap[target - num]];
    }
    hashMap[num] = i;
  }
  return [];
}
