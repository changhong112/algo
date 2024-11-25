
const { tree } = require('./data');

console.log(JSON.stringify(tree, null, 2));

function inOrderDFS(root) {
  const res = [];
  let inOrderDFSIdx = 0;
  function iterate(root) { // 中序深度优先
    if (root === undefined) return;

    iterate(root.children[0]);
    res[inOrderDFSIdx++] = root;
    iterate(root.children[1]);
  }
  iterate(root);
  return res;
}

const inOrderDFSRes = inOrderDFS(tree);
console.log('inOrderDFSRes', inOrderDFSRes); // D,B,E,A,F,C,G

module.exports = {
  inOrderDFS
};