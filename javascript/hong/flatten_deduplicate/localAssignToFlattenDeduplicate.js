const { arr } = require('./flatten_deduplicate');

/**
 * 思路：
 *   1，遍历数组，判断每一个数组元素
 *   2，如果是最顶层【即depth为0】且元素为数字不重复，就记录该数字并continue循环，如果数字重复，就从原数组末尾取一个元素放到重复位置，然后再遍历该元素
 *   3，如果元素为数组，就重复步骤1，2；区别是如果元素为数字不重复，就将它放到原数组末尾
 */
// 对数组进行原地操作，不用新建一个结果数组
function localAssignToFlattenDeduplicate(arr) {
  const seen = {};
  let tail = arr.length; // 在arr数组初始长度的末尾添加数据的指针
  let n = arr.length; // 在arr数组初始长度处自减的指针
  const length = arr.length;
  let depth = 0;

  function iterate(subarr) {
    depth++;
    for (let i = 0, _n = subarr.length; i < _n; i++) {
      if (depth === 1 && i >= n) break;
      const ele = subarr[i];
      if (typeof ele === 'number') {
        if (!seen[ele]) {
          seen[ele] = true;
          if (depth === 1) continue; //   第一层不重复的数字就让它待在原位
          else arr[tail++] = ele; // 就将它放到原数组末尾
          continue;
        }
        if (depth === 1) {
          arr[i--] = arr[--n];
        }
      } else {
        iterate(ele);
        if (depth === 1) {
          arr[i--] = arr[--n];
        }
      }
    }
    depth--;
  }

  iterate(arr);

  // 覆盖原数组末尾已判断过的值
  while (n < length) {
    arr[n++] = arr[--tail];
  }

  // 数组最后面的值被搬到前面去了，使用length截断数组
  arr.length = tail;
}

// 测试
const input = [1, 2, 3, [4, 5, 6, [7, 8]], [9, 8], 7, [6], 5];
localAssignToFlattenDeduplicate(input); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('res', input);

module.exports = {
  localAssignToFlattenDeduplicate
};