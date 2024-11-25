/**
 * 分支思想将有序的链表转换为二叉查找树
 */

const { binarySearchTreeToOrderLink } = require('./binarySearchTreeToOrderLink');
const { tree5 } = require('./data');

/**
 * 快慢指针法：快指针到达尾节点时，慢指针指向的就是中间节点
 */
function findMidNode(link) {
  let low = link;
  let quick = link;

  while (quick !== null && quick.next !== null) {
    low = low.next;
    quick = quick.next.next;
  }

  return low;
}

function orderLinkToBinarySearchTree(link) {
  if (link === null) return null;
  if (link.next === null) {
    return {
      num: link.data,
      children: []
    };
  }

  // 获得中间的链表节点
  const mid = findMidNode(link);

  const left = link;
  if (mid.prev !== null) {
    mid.prev.next = null;
    mid.prev = null;
  }

  const right = mid.next;
  if (mid.next !== null) {
    mid.next.prev = null;
    mid.next = null;
  }

  const node = {
    num: mid.data,
    children: []
  };

  const child1 = orderLinkToBinarySearchTree(left);
  const child2 = orderLinkToBinarySearchTree(right);

  let i = 0;
  if (child1 !== null) {
    node.children[i++] = child1;
  }

  if (child2 !== null) {
    node.children[i] = child2;
  }

  return node;
}

const {
  rootNum,
  linkHead
} = binarySearchTreeToOrderLink(tree5);

let node = linkHead;
while (node !== null) {
  node.data = node.data.num;
  node = node.next;
}

const root = orderLinkToBinarySearchTree(linkHead);
console.log('\n', JSON.stringify(root, null, 2));
