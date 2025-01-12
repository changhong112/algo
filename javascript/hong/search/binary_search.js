// public int bsearch(int[] a, int n, int value) {
//   int low = 0;
//   int high = n - 1;

//   while (low <= high) {
//     int mid = (low + high) / 2;
//     if (a[mid] == value) {
//       return mid;
//     } else if (a[mid] < value) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }

function binarySearch(a, n, value) { // 要求a为有序，可重复
  let low = 0; // 低位索引
  let high = n - 1; // 高位索引

  while (low <= high) {
    let mid = low + Math.floor((high - low) >> 1);
    if (a[mid] < value) {
      low = mid + 1;
    } else if (a[mid] > value) {
      high = mid - 1;
    } else { // 此时 a[mid] === value，但是它不是第一个值为8的元素的索引
      if (mid === high || a[mid + 1] !== value) return mid;
      else low = mid + 1;
    }
  }
  return -1; // 代表未找到
}

const arr = [1, 3, 4, 5, 6, 8, 8, 8, 8,11, 18]; // 找出最后一个值给定值为8的元素的索引
const idx = binarySearch(arr, arr.length, 8);
console.log('idx', idx);
console.log('hello...')
