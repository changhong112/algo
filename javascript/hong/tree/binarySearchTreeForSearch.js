

const { binarySearchTree } = require('./data');

/**
 * 和数组的二分查找类似
 * @param {*} root 树的根节点
 * @param {*} data 要查找对比的数据
 */
function binarySearchTreeForSearch(root, data) {
  let p = root;
  while (p !== null) {
    if (data < p.data) {
      p = p.left;
    } else if (p.data < data) {
      p = p.right;
    } else {
      return p;
    }
  }
  return null;
}

const res = binarySearchTreeForSearch(binarySearchTree, 19);
console.log(res);

const res2 = binarySearchTreeForSearch(binarySearchTree, 25);
console.log(res2);

