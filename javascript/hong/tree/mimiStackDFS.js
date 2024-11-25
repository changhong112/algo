
const { tree } = require('./data');

console.log(JSON.stringify(tree, null, 2));

const mimiStackDFSRes = [];
function mimiStackDFS(root) { // 广度优先模拟栈调用，根节点作为第一层，一层层往下遍历
  let idx = 0;
  const stack = [root];
  let p = stack.length;

  while (p > 0) {
    const node = stack[--p];
    mimiStackDFSRes[idx++] = node.tag;

    const children = node.children;

    for (let i = 0; i < children.length; i++) {
      stack[p++] = children[i];
    }
  }
}
mimiStackDFS(tree);
console.log('mimiStackDFSRes', mimiStackDFSRes); // A,C,G,F,B,E,D
