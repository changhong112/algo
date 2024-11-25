
const arr = [4, 5, 6, 3, 2, 1];

// 从未排序区中选择最小的数放到已排序区的末尾
function selectSort(arr, n) {
  if (n <= 1) return;

  for (let i = 0; i < n - 1; i++) { // 只需要找 n-1 次最小的数
    let min = arr[i]; // 假设 i 位是最小的
    let idx = i;

    // 找到从 i 到 n-1 范围内的最小值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < min) {
        min = arr[j];
        idx = j;
      }
    }

    // 交换当前元素和最小值元素的位置
    if (idx !== i) {
      const temp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = temp;
    }
  }
}

selectSort(arr, arr.length);
console.log('arr', arr);
