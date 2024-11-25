
const { tree3: tree } = require('./data');
const { getTreeBranchs } = require('./getTreeBranchs');
const { getTreeHeight } = require('./getTreeHeight');
const { pow } = require('./utils');

console.log(JSON.stringify(tree, null, 2));
console.log('最大分支数：', getTreeBranchs(tree));
console.log('深度：', getTreeHeight(tree), '\n'); // 根节点深度为0，高度深度值相等，最深叶子节点高度为0

/**
 * 知道最大深度和最大分支树就能知道满树的节点数
 * 
 * 将任意数看作其最大分支数的满树
 * 缺点：这种使用数组存储树结构数据的方式，如果树中的节点很稀疏的话，会浪费数组的很多元素
 */

/**
 * 实现将任意树`按最大分支数`转为数组存储，不存在的节点，`在数组中表现为空格即undefined值`
 */
function treeToArrayOfMimiQueueBFS2(root, depth, maxBranches) {
  let nodes = [1];
  let sum = nodes[nodes.length - 1]; // 根据depth, maxBranches获得满树的所有节点数
  for (let i = 1; i <= depth; i++) {
    nodes[nodes.length] = maxBranches * nodes[nodes.length - 1];
    sum += nodes[nodes.length - 1];
  }

  const start = sum - nodes[nodes.length - 1];
  const end = sum - 1;
  function isDeepest(idx) { // 节点索引是否属于最底层叶子节点
    if (start <= idx && idx <= end) {
      return true;
    }
    return false;
  }

  const queue = [root];
  let head = 0;
  let tail = 1;
  const res = [];
  let idx = 0;

  while (head < tail) {
    const node = queue[head];
    res[idx++] = node?.tag;

    if (isDeepest(head)) {
      head++;
      continue;
    }
    head++;
    for (let i = 0; i < maxBranches; i++) {
      const sub = node?.children[i];
      queue[tail++] = sub;
    }
  }

  return res;
}

/**
 * 将数组转为原来的树结构
 */
function arrayToTreeOfMimiQueueBFS2(a, depth, maxBranches) {
  // [start, end]表示最深一层的节点的编号，也就是在数组中的索引
  const start = a.length - pow(maxBranches, depth);
  const end = a.length - 1;
  function isDeepest(idx) { // 判断是否时最深一层的节点
    if (start <= idx && idx <= end) {
      return true;
    }
    return false;
  }

  const root = {
    tag: a[0],
    children: []
  };

  const queue = [root];
  let head = 0;
  let tail = 1;
  let idx = 1;

  while (head < tail) {
    const node = queue[head];
    if (isDeepest(head)) { // 如果当前被处理的节点属于最深一层的节点，就不处理的它的子节点
      head++;
      continue;
    }
    head++;
    for (let i = 0; i < maxBranches; i++) {
      const child = {
        tag: a[idx],
        children: []
      };
      if (a[idx] !== undefined) {
        node.children[i] = child;
      }
      queue[tail++] = child;
      idx++;
    }
  }

  return root;
}


const maxBranches = getTreeBranchs(tree);
const depth = getTreeHeight(tree);

const arr = treeToArrayOfMimiQueueBFS2(tree, depth, maxBranches);
console.log(arr);

const allNodes = arr.length;
const realNodes = arr.reduce((accu, curr) => {
  if (curr === undefined) return accu;
  return ++accu;
}, 0);
console.log('满树节点数：', allNodes);
console.log('实际节点数：', realNodes);
console.log('数组元素内存浪费数：', allNodes - realNodes);
console.log('数组元素内存利用率：', realNodes / allNodes);

const _tree = arrayToTreeOfMimiQueueBFS2(arr, depth, maxBranches);

console.log(JSON.stringify(_tree, null, 2));
