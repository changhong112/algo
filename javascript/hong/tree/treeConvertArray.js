const { tree } = require('./data');
const { getTreeBranchs } = require('./getTreeBranchs');
const { getTreeHeight } = require('./getTreeHeight');

console.log(JSON.stringify(tree, null, 2));
console.log('最大分支数：', getTreeBranchs(tree));
console.log('深度：', getTreeHeight(tree), '\n'); // 根节点深度为0，高度深度值相等，最深叶子节点高度为0

/**
 * 如下的两个方法表示：tree <=> array
 *    
 * 1，每个节点支持任意分支数
 * 2，树转为数组时记录每个节点的分支数 childrenCount
 * 3，数组转为树时根据记录的分支数进行还原
 * 
 */
function treeToArrayOfMimiQueueBFS(root) {
  const res = [];
  const queue = [root];
  let head = 0;
  let tail = 1;
  let idx = 0;

  while (head < tail) {
    const node = queue[head++];
    const children = node.children;
    res[idx++] = {
      tag: node.tag,
      childrenCount: children.length
    };

    for (let i = 0; i < children.length; i++) {
      queue[tail++] = children[i];
    }
  }

  return res;
}

function arrayToTreeOfMimiQueueBFS(a) {
  const n = a.length;
  if (!n) return null;

  const root = { // 将第一个元素转换为节点对象
    tag: a[0].tag,
    children: []
  };

  const queue = [ // 将根节点入队列
    {
      node: root,
      childrenCount: a[0].childrenCount
    }
  ];
  let head = 0, tail = 1;
  /**
   * idx索引从数组的第二个元素开始处理，第一个即代表树的根节点的元素已被
   * 转为节点对象并插入队列，
   * 
   * 根据数组创建一个节点顺序一致的队列
   * 
   * childrenCount的和就是根节点以外的所有子节点的个数，遍历这个和的长度次数，
   * 就能遍历到所有的子节点
   */
  let idx = 1;

  while (head < tail) {
    const { node, childrenCount } = queue[head++];
    let j = 0;
    for (let i = 0; i < childrenCount; i++) {
      const child = {
        tag: a[idx].tag,
        children: []
      };
      node.children[j++] = child;
      queue[tail++] = {
        node: child,
        childrenCount: a[idx].childrenCount
      };
      idx++;
    }
  }
  return root;
}

const mimiQueueBFSRes = treeToArrayOfMimiQueueBFS(tree);
console.log('mimiQueueBFSRes', mimiQueueBFSRes, '\n'); // A,B,C,D,E,F,G

const arrayToTreeRes = arrayToTreeOfMimiQueueBFS(mimiQueueBFSRes);
console.log('Deserialized Tree', JSON.stringify(arrayToTreeRes, null, 2));

