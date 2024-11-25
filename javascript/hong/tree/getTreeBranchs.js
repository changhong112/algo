/**
 * 获得最大分支数
 */
function getTreeBranchs(node) {
  if (node.children.length === 0) {
    return 0; // 叶子节点分支数为0
  }
  let maxBranches = node.children.length;
  for (let i = 0; i < node.children.length; i++) {
    const branchs = getTreeBranchs(node.children[i]);
    if (branchs > maxBranches) maxBranches = branchs;
  }
  return maxBranches;
}

module.exports = {
  getTreeBranchs
};