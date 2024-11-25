
const { binarySearchTreeToOrderArray } = require('./binarySearchTreeToOrderArray');
const { tree5 } = require('./data');

/**
 * 分支思想将有序数组转换为二叉查找树
 * 
 * 使用中序遍历：二叉查找树树 => 数组
 * 使用分治思想：数组 => 二叉查找树
 */
function orderArrayToBinarySearchTree(arr) {
  if (arr.length === 0) return;
  const mid = Math.floor((arr.length / 2));

  const node = {
    num: arr[mid],
    children: []
  };
  let i = 0;

  const arr1 = [];
  const arr2 = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (i < mid) {
      arr1[i] = arr[i];
    }
    if (i > mid) {
      arr2[j++] = arr[i];
    }
  }

  const left = orderArrayToBinarySearchTree(arr1);
  const right = orderArrayToBinarySearchTree(arr2);

  if (left !== undefined) {
    node.children[i++] = left;
  }

  if (right !== undefined) {
    node.children[i] = right;
  }

  return node;
}

const arr = binarySearchTreeToOrderArray(tree5);

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2[i] = arr[i].num;
}

console.log(arr2);

const root = orderArrayToBinarySearchTree(arr2);
console.log(JSON.stringify(root, null, 2));
