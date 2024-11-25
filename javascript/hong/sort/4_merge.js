// 归并排序
function mergeSort(arr) {
  recursion(arr, 0, arr.length - 1);
}

function recursion(arr, p, r) {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);

  recursion(arr, p, q);
  recursion(arr, q + 1, r);

  const arr1 = [];
  const arr2 = [];

  for (let i = p; i <= q; i++) {
    const ele = arr[i];
    arr1[i - p] = ele;
  }
  for (let j = q + 1; j <= r; j++) {
    const ele = arr[j];
    arr2[j - q - 1] = ele;
  }
  merge(arr, arr1, arr2, p);
}

function merge(arr, arr1, arr2, p) {
  let i = 0, j = 0, k = 0;
  const temp = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      temp[k++] = arr1[i++];
    } else {
      temp[k++] = arr2[j++];
    }
  }
  while (i < arr1.length) temp[k++] = arr1[i++];
  while (j < arr2.length) temp[k++] = arr2[j++];

  for (let o = 0; o < temp.length; o++) {
    arr[p + o] = temp[o];
  }
}

// 测试
let arr = [11, 8, 3, 9, 7, 1, 2, 5];
mergeSort(arr);
console.log('排序结果', arr);