/* 
// 冒泡排序，a表示数组，n表示数组大小
public void bubbleSort(int[] a, int n) {
  if (n <= 1) return;
 
 for (int i = 0; i < n; ++i) {
    // 提前退出冒泡循环的标志位
    boolean flag = false;
    for (int j = 0; j < n - i - 1; ++j) {
      if (a[j] > a[j+1]) { // 交换
        int tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;
        flag = true;  // 表示有数据交换      
      }
    }
    if (!flag) break;  // 没有数据交换，提前退出
  }
}
*/

const arr = [4, 5, 6, 3, 2, 1];

// 原地排序
function bubbleSort(arr, n) {
  if (n <= 1) return; // 就是有序的
  for (let i = 0; i < n; i++) {
    let flag = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if (!flag) break; // 不用遍历n次就有序，提前退出
  }
}

bubbleSort(arr, arr.length);
console.log('arr', arr);
