function mergeSort(arr) {
  const n = arr.length;

  // 子数组的大小从 1 开始逐步翻倍
  for (let size = 1; size < n; size *= 2) {
    // 每次处理一对子数组
    for (let left = 0; left < n - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);

      // 分割两个子数组
      const arr1 = [];
      const arr2 = [];
      for (let i = left; i <= mid; i++) {
        const ele = arr[i];
        arr1[i - left] = ele;
      }
      for (let i = mid + 1; i <= right; i++) {
        const ele = arr[i];
        arr2[i - mid - 1] = ele;
      }

      // 合并两个子数组
      merge(arr, arr1, arr2, left);
    }
  }
}

function merge(arr, arr1, arr2, p) {
  let i = 0, j = 0, k = 0;
  const temp = [];

  // 按照大小合并两个数组
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      temp[k++] = arr1[i++];
    } else {
      temp[k++] = arr2[j++];
    }
  }

  // 处理剩余部分
  while (i < arr1.length) temp[k++] = arr1[i++];
  while (j < arr2.length) temp[k++] = arr2[j++];

  // 将合并结果写回原数组
  for (let o = 0; o < temp.length; o++) {
    arr[p + o] = temp[o];
  }
}

// 测试
let arr = [11, 8, 3, 9, 7, 1, 2, 5];
mergeSort(arr);
console.log('排序结果', arr);
