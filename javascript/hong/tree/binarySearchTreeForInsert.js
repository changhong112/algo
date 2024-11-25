const { binarySearchTree2 } = require('./data');
/**
 * 支持插入相同的数据
 * @param {number} data 要插入的数据
 */
function binarySearchTreeForInsert(root, data) {
  let p = root;

  function createNode(arr) {
    return {
      left: null,
      data: arr,
      right: null
    };
  }

  while (p !== null) {
    if (data < p.data[0]) { // 节点存在，data数组中至少存在一个数据，若有多个它们是相同的，所以取第一个比较
      if (p.left === null) {
        p.left = createNode([data]);
        return;
      }
      p = p.left;
    } else if (p.data[0] < data) {
      if (p.right === null) {
        p.right = createNode([data]);
        return;
      }
      p = p.right;
    } else {
      p.data[p.data.length] = data;
      return;
    }
  }
}
console.log(JSON.stringify(binarySearchTree2, null, 2));

binarySearchTreeForInsert(binarySearchTree2, 55);

console.log(JSON.stringify(binarySearchTree2, null, 2));

binarySearchTreeForInsert(binarySearchTree2, 55);

console.log(JSON.stringify(binarySearchTree2, null, 2));