const { binarySearchTree3 } = require('./data');

/**
 * 第一种情况：被删除的节点无子节点
 * 第二种情况：只有左子节点或右子节点
 * 第三种情况：存在左右子节点
 */
function binarySearchTreeForDelete(root, data) {
  let p = root;
  let pp = null; // p节点的父节点，用来检查p节点是左节点还是右节点
  while (p !== null) {
    if (data < p.data) {
      pp = p;
      p = p.left;
    } else if (p.data < data) {
      pp = p;
      p = p.right;
    } else {
      break; // 找到要被删除的节点
    }
  }
  if (p === null) return; // 未找到匹配的节点

  // 第三种情况：存在左右子节点
  if (p.left !== null && p.right !== null) {
    // 找到右子树种最小的节点，用于替换被删除的节点
    let minP = p.right;
    let minPP = p;

    while (minP.left !== null) { // 找到右子树中最小的节点
      minPP = minP;
      minP = minP.left;
    }

    p.data = minP.data; // 用找到的节点替换到被删除的节点
    pp = minPP;
    p = minP; // 替换后，minP就成了要被删除的下一个节点了，该节点的子节点情况可复用下面的逻辑
  }

  let child; // 被删除节点的子节点，左子节点||右子节点||无子结点

  /**
   * 其余两种情况：
   *  1，被删除的节点无子节点
   *  2，只有左子节点或右子节点
   */
  if (p.left !== null) {
    child = p.left;
  } else if (p.right !== null) {
    child = p.right;
  } else {
    child = null;
  }

  if (pp === null) { // 删除的是根节点且不同时有左右子节点
    root = child;
  } else if (pp.left === p) {
    pp.left = child;
  } else if (pp.right === p) {
    pp.right = child;
  }
  
}

console.log(JSON.stringify(binarySearchTree3, null, 2), '\n');

binarySearchTreeForDelete(binarySearchTree3, 18);

console.log(JSON.stringify(binarySearchTree3, null, 2), '\n');
