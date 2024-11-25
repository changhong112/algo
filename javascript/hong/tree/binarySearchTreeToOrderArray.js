/**
 * 将二叉查找树转为有序的数组，
 *    用中序遍历就可以得到
 *    或转为有序链表后再转为数组
 * 节点值大小关系：左子节点 < 父节点 < 右子节点
 */

const { tree5 } = require('./data');
const { inOrderDFS } = require('./inOrderDFS');

function binarySearchTreeToOrderArray(root) {
  const res = inOrderDFS(root);
  return res;
}

binarySearchTreeToOrderArray(tree5);

module.exports = {
  binarySearchTreeToOrderArray
};