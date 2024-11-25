function quickSort(a, p, r) { // p 代表第一个元素指针，r 代表最后一个元素指针
  if (p >= r) { 
    return;
  }
  const q = partition(a, p, r);
  quickSort(a, p, q - 1);
  quickSort(a, q + 1, r);
}

function partition(a, start, end) {
  const pivot = a[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (a[j] < pivot) {
      swap(a, i, j);
      i = i + 1;
    }
  }

  swap(a, i, end);
  return i;
}

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

// 测试
let arr = [11, 8, 3, 9, 7, 1, 2, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [11, 12, 22, 25, 64]
