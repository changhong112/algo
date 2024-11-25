
const { tree } = require('./data');

console.log(JSON.stringify(tree, null, 2));

const postOrderDFSRes = [];
let postOrderDFSIdx = 0;
function postOrderDFS(root) { // 后序深度优先
  if (root === undefined) return;

  postOrderDFS(root.children[0]);
  postOrderDFS(root.children[1]);
  const tag = root.tag;
  postOrderDFSRes[postOrderDFSIdx++] = tag;
}
postOrderDFS(tree);
console.log('postOrderDFSRes', postOrderDFSRes); // D,E,B,F,G,C,A
