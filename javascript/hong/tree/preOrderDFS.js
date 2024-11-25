
const { tree } = require('./data');

console.log(JSON.stringify(tree, null, 2));


const preOrderDFSRes = [];
let preOrderDFSIdx = 0;
function preOrderDFS(root) { // 前序深度优先
  if (root === undefined) return;

  const tag = root.tag; // 相对当前节点来说，当前节点都是根节点
  preOrderDFSRes[preOrderDFSIdx++] = tag;

  preOrderDFS(root.children[0]);
  preOrderDFS(root.children[1]);
}
preOrderDFS(tree);
console.log('preOrderDFSRes', preOrderDFSRes); // A,B,D,E,C,F,G