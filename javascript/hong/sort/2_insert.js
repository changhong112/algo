// // 插入排序，a表示数组，n表示数组大小
// public void insertionSort(int[] a, int n) {
//   if (n <= 1) return;

//   for (int i = 1; i < n; ++i) {
//     int value = a[i];
//     int j = i - 1;
//     // 查找插入的位置
//     for (; j >= 0; --j) {
//       if (a[j] > value) {
//         a[j+1] = a[j];  // 数据移动
//       } else {
//         break;
//       }
//     }
//     a[j+1] = value; // 插入数据
//   }
// }



const arr = [4, 5, 6, 3, 2, 1];

function insertSort(arr, n) {
  if (n <= 1) return;

  // 遍历未排区的元素
  for (let i = 1; i < n; i++) {
    const value = arr[i];
    // 如下循环是将该 value 插入到已排区的合适位置

    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }
}

insertSort(arr, arr.length);
console.log('arr', arr);
