/**
 * 深度和高度的值是一样的
 * 
 * 递归问题，大问题分成小问题，最小问题解为叶子节点知道自己的高度为0，
 * 以此类推，上一层节点高度就为0+1=1
 */
function getTreeHeight(node) {
  // 如果节点为空，就不存在节点中的高度或深度的概念 
  if (!node) {
    return -1;
  }
  // 如果节点没有子节点，高度为0
  if (node.children.length === 0) {
    return 0;
  }
  // 计算所有子节点的高度，并取其中的最大值  
  let maxHeight = 0;
  for (let child of node.children) {
    const childHeight = getTreeHeight(child);
    maxHeight = Math.max(maxHeight, childHeight);
  }
  // 返回当前节点高度加1即上一层节点高度  
  return maxHeight + 1;
}

module.exports = {
  getTreeHeight
};