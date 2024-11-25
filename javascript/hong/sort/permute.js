
/**
 * 集合的不同排序的所有集
 */
const a = [1, 2, 3];

// 依次往槽里放
function permute(a) {
  const permutations = [];
  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      permutations[permutations.length] = path;
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const newPath = [...path];
      newPath[newPath.length] = remaining[i];
      const newRemaining = [];
      let j = 0;
      let k = 0;
      while (j < remaining.length) {
        if (i === j) {
          j++;
          continue;
        }
        newRemaining[k++] = remaining[j++];
      }
      backtrack(newPath, newRemaining);
    }
  }

  backtrack([], a);
  return permutations;
}

const permutations = permute(a);
console.log('permutations', permutations);

/**
 * 根据排序生成二叉树
 * 一个排序代表一种树结构，n个排序代表有n种树结构
*/
const b = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// 生成满二叉树
function generateBinaryTree(a) {
  let level = 0; // 树的层数 1到第level层
  for (let i = 0; i < b.length; i += 2 * i + 1) { // 计算二叉树的层数
    level++;
  }
  const depth = level - 1; // 深度从0到depth
  let n = a.length;
  const temp = [];

  for (let i = depth; i >= 0; i--) { // i 代表数的深度，从最底层开始向上遍历
    for (let j = 0; j < 1 << i; j++) { // 深度为depth的层即depth+1层有 1<<depth 个子节点，并遍历它
      const k = --n;
      const tag = a[k];
      const node = {
        tag,
        children: []
      };
      if (i < depth) {
        node.children[0] = temp[2 * k + 1];
        node.children[1] = temp[2 * k + 2];
      }
      temp[k] = node;
    }
  }
  const tree = temp[0];

  return tree;
}

const tree = generateBinaryTree(b);

