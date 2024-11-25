
const { tree5 } = require('./data');
/**
 * 将二叉查找树转为有序的双链表
 */
function binarySearchTreeToOrderLink(root) {
  const rootNum = root.num; // 记录根节点序数，方便从反转回来的时候，链表拿到树根节点
  const node = {
    prev: null,
    data: root,
    next: null
  };
  let linkHead = node;

  const queue = [node];
  let head = 0;
  let tail = 1;

  while (head < tail) {
    const node = queue[head++];

    for (let i = 0; i < node.data.children.length; i++) {
      const curr = {
        prev: null,
        data: node.data.children[i],
        next: null
      };
      if (i === 0) { // 左子节点
        if (node.data.children[i] === undefined) {
          continue;
        }
        if (node.prev === null) {
          node.prev = curr;
          curr.next = node;

          linkHead = curr;
        } else {
          curr.prev = node.prev;
          node.prev.next = curr;

          node.prev = curr;
          curr.next = node;
        }
        let currx = linkHead;

        queue[tail++] = curr;
      }
      if (i === 1) { // 右子节点
        if (node.next === null) {
          node.next = curr;
          curr.prev = node;
        } else {
          curr.next = node.next;
          node.next.prev = curr;

          node.next = curr;
          curr.prev = node;
        }

        queue[tail++] = curr;
      }
    }
  }

  return {
    rootNum,
    linkHead
  };
}


console.log(JSON.stringify(tree5, null, 2), '\n');

const { linkHead } = binarySearchTreeToOrderLink(tree5);
let curr = linkHead;

do {
  if (curr === null) break;
  console.log(curr.data.num);
  curr = curr.next;
} while (true);

module.exports = {
  binarySearchTreeToOrderLink
};