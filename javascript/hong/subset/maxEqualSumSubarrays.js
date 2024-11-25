/**
 *  请设计一个函数，输入一个由正整数组成的数组 nums，该数组中可能存在两个元素互不相
    交并且和相等的子数组，如果存在，将其中最大的和返回，如果不存在，请返回0
    提示：
    1. 0 &lt;= nums.length &lt;= 20
    2. 1 &lt;= nums[i] &lt;= 1000
    3. sum(nums[i]) &lt;= 5000
    示例1:
    输入：[2,3,4,5,9]
    输出：9
    解释: 有元素不相交的子子数组[2,3,4] 和 [9]，他们的和相同，为9
    示例2:
    输入：[2,3]
    输出：0
    解释: 没有不相交并且和相等的子集
    示例3:
    输入：[1,2,2,3,4]
    输出：6
    解释: 有元素不相交的子数组 [1,2,3] 和 [2,4]，他们的和相同，为6
    示例4:
    输入：[1,2,4,8,16,32,64,128,256,512,50,50,50,150,150,150,100,100,100,321]
    输出：1122
 */
function maxEqualSumSubarrays(nums) {
  const n = nums.length;
  const sumMap = new Map(); // 用于记录每个和对应的索引集合数组
  let maxSum = 0;

  // 遍历所有子集（用二进制掩码）
  // n个元素的集合共有2的n次方个子集，包括它本身和空集
  for (let mask = 0; mask < (1 << n); mask++) {
    let currentSum = 0;
    const indices = new Set();

    // 计算当前子集的和以及索引
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) { // 判断mask二进制码串中是否有值为1的二进制值，如果有代表该位对应的数字存在
        currentSum += nums[i];
        indices.add(i);
      }
    }

    // 检查是否存在和相等且无交集的子集
    if (sumMap.has(currentSum)) {
      for (const otherIndices of sumMap.get(currentSum)) {
        if (![...indices].some(idx => otherIndices.has(idx))) {
          // 没有交集，更新最大和
          maxSum = Math.max(maxSum, currentSum);
        }
      }
    }

    // 记录当前子集的索引集合
    if (!sumMap.has(currentSum)) {
      sumMap.set(currentSum, []);
    }
    sumMap.get(currentSum).push(indices);
    console.log(sumMap);
  }

  return maxSum;
}

// 示例测试
console.log(maxEqualSumSubarrays([2, 3, 4, 5, 9])); // 输出: 9


console.log(maxEqualSumSubarrays([2, 3])); // 输出: 0  
console.log(maxEqualSumSubarrays([1, 2, 2, 3, 4])); // 输出: 6  
// console.log(maxEqualSumSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 50, 50, 50, 150, 150, 150, 100, 100, 100, 321])); // 输出: 1122