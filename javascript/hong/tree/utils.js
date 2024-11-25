const { getTreeBranchs } = require('./getTreeBranchs');
const { getTreeHeight } = require('./getTreeHeight');

function consoleTreeInfo(root) {
}


/**
 * 返回n的e次方
 * 应用场景：用来计数满n叉树的深度为e的层的节点个数
 * @param {*} n 代表基数
 * @param {*} e 代表指数 
 */
function pow(n, e) {
  if (e === 0) return 1;
  if (e === 1) return n;
  let res = n;
  for (let i = 0; i < e - 1; i++) {
    res *= n;
  }
  return res;
}

module.exports = {
  pow
};