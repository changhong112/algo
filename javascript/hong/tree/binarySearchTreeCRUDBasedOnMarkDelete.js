
/**
 * 对二叉查找树的增删改查基于标记删除
 * 
 * 删除节点时，首先只对节点标记要删除，不真正执行删除操作，
 * 判断标记率如果大于某个阈值后，再进行一次真正的删除所有被标记删除的节点
 * 
 * 每个节点上除了存储自身数据信息，还需要存储标记删除的字段，二叉树的总节点数，
 * 便于计算标记删除率
 */

class Node {
  constructor(value) {
    this.left = null;
    this.data = {
      value,
      isDeleteMarked: false
    };
    this.right = null;

    this.init();
  }

  init() {
    /**
     * 每个节点实例都可能用到，且每个实例的该值都是相同的，
     * 因此放在实例能公共访问的位置，即原型对象上
     * 
     * allNodes：计数创建的节点实例总个数
     */
    const { prototype } = Node;
    if (prototype.allNodes === undefined) { // 首次创建节点实例
      prototype.allNodes = 1;
      prototype.markDeleteCount = 0;
    } else {
      prototype.allNodes += 1;
    }
  }
}
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  search(value) {
    let p = this.root;
    let node = null;

    while (p !== null) {
      if (p.data.value < value) {
        p = p.right;
      } else if (p.data.value > value) {
        p = p.left;
      } else {
        if (!p.data.isDeleteMarked) {
          node = p;
          break;
        }
        // 找到相同值的节点但被标记为删除也返回null，查找失败
      }
    }

    return node;
  }

  insert(value) {
    let p = this.root;
    let node = new Node(value); // 指向插入的节点，插入失败就是数据重复了，返回null

    if (p === null) {
      this.root = node;
      return node;
    }
    while (p !== null) {
      if (p.data.value < value) {
        if (p.right === null) {
          p.right = node;
          break;
        }
        p = p.right;
      } else if (value < p.data.value) {
        if (p.left === null) {
          p.left = node;
          break;
        }
        p = p.left;
      } else { // 找到数据相等的节点
        // 判断有没有被标记为删除
        if (p.data.isDeleteMarked) {
          p.data.value = value; // 直接更改值即可
          p.data.isDeleteMarked = false;
          node = p;
          break;
        }
        break; // 数据重复
      }
    }

    return node;
  }

  /**
  * @param {*} value 
  * @param {*} rate 是否要进行真正删除操作的阈值 默认0.5
  */
  delete(value, rate = 0.5) {
    this.markDelete(value);

    // 计算标记删除率并决定是否需要进行一次真正的删除
    console.log('真正删除节点前>>>');
    const { allNodes, markDeleteCount } = Object.getPrototypeOf(this.root);
    const markDeleteRate = markDeleteCount / allNodes;
    console.log('allNodes', allNodes);
    console.log('markDeleteCount', markDeleteCount);
    console.log('markDeleteRate', markDeleteRate);

    if (markDeleteRate < rate) return;

    // 进行真正的删除
    this.deleteMarked();

    console.log('\n');

    console.log('真正删除节点后>>>');
    const { allNodes: allNodes2, markDeleteCount: markDeleteCount2 } = Object.getPrototypeOf(this.root);
    console.log('allNodes2', allNodes2);
    console.log('markDeleteCount2', markDeleteCount2);
    console.log('markDeleteRate2', markDeleteCount2 / allNodes2);
  }

  markDelete(value) {
    let p = this.root;
    let node = null; // 返回值为null，说明没找到要删除的节点，或节点已标记为删除

    while (p !== null) {
      if (p.data.value < value) {
        p = p.right;
      } else if (p.data.value > value) {
        p = p.left;
      } else {
        if (!p.data.isDeleteMarked) {
          p.data.isDeleteMarked = true;
          Object.getPrototypeOf(p).markDeleteCount++; // 计数被标记删除的节点
          node = p;
          break;
        }
        // 找到相同值的节点但被标记为删除也返回null，查找失败
      }
    }

    return node;
  }

  deleteMarked() {
    // 广度优先删除，模拟队列处理
    const root = this.root;

    const queue = [root];
    let head = 0;
    let tail = 1;

    while (head < tail) {
      const node = queue[head++];

      // 将左子节点入队列
      if (node.left !== null) {
        queue[tail++] = node.left;
      }

      // 将右子节点入队列
      if (node.right !== null) {
        queue[tail++] = node.right;
      }

      // 将子节点入队列后再操作当前节点
      if (node.data.isDeleteMarked) {
        this.deleteOne(node.data.value);
      }
    }


    /**
     * 删除一遍后，判断markDeleteCount是否为0，如果不为0，就在删一次
     * 用例：
     *  1，当在右子树中找最小的节点替换当前的值时
     *  2，当前节点和最小值子节点的层级间隔大于1
     *  3，找到的最小值子节点也被标记为删除
     * 
     * 原因：
     *  1，该也被标记为删除的最小值子节点没有放入队列里，导致没有被处理到
     * 解决：
     *  1，需要重新调用一次删除
     */
    if (Object.getPrototypeOf(this.root).markDeleteCount > 0) {
      this.deleteMarked();
    }
  }

  deleteOne(value) {
    let p = this.root;
    let pp = null; // p节点的父节点，用来检查p节点是左节点还是右节点
    while (p !== null) {
      if (value < p.data.value) {
        pp = p;
        p = p.left;
      } else if (p.data.value < value) {
        pp = p;
        p = p.right;
      } else {
        break; // 找到要被删除的节点
      }
    }
    if (p === null) return p; // 未找到匹配的节点

    // 第三种情况：存在左右子节点
    if (p.left !== null && p.right !== null) {
      // 找到右子树种最小的节点，用于替换被删除的节点
      let minP = p.right;
      let minPP = p;

      while (minP.left !== null) { // 找到右子树中最小的节点
        minPP = minP;
        minP = minP.left;
      }

      p.data.value = minP.data.value; // 用找到的节点替换到被删除的节点
      p.data.isDeleteMarked = minP.data.isDeleteMarked; // minP可能也是个被标记删除的节点，所以将它的isDelete也更新过去，方便判断在处理下一个节点前，对该节点进行一次删除操作

      pp = minPP;
      p = minP; // 替换后，minP就成了要被删除的下一个节点了，该节点的子节点情况可复用下面的逻辑
    }

    let child; // 被删除节点的子节点，左子节点||右子节点||无子结点

    /**
     * 其余两种情况：
     *  1，被删除的节点无子节点
     *  2，只有左子节点或右子节点
     */
    if (p.left !== null) {
      child = p.left;
    } else if (p.right !== null) {
      child = p.right;
    } else {
      child = null;
    }

    if (pp === null) { // 删除的是根节点且不同时有左右子节点，情况1：没有子节点，情况2：只有左子节点，情况3：只有右子节点
      this.root = child;
    } else if (pp.left === p) {
      pp.left = child;
    } else if (pp.right === p) {
      pp.right = child;
    }

    Object.getPrototypeOf(p).markDeleteCount--;
    Object.getPrototypeOf(p).allNodes--;
  }

  getOrderValueBasedOnInOrderDFS(isNeedDeleteMarkedStatus = false) {
    const node = this.root;
    const res = [];
    let i = 0;
    function iterate(node) {
      if (node === null) return null;

      iterate(node.left);
      if (isNeedDeleteMarkedStatus) {
        res[i++] = {
          value: node.data.value,
          isDeleteMarked: node.data.isDeleteMarked
        };
      } else {
        res[i++] = node.data.value;
      }
      iterate(node.right);
    }

    iterate(node);

    return res;
  }

  getMaxNode() {
    let p = this.root;
    let pp = null;

    while (p !== null) {
      pp = p;
      p = p.right;
    }

    return pp;
  }

  getMinNode() {
    let p = this.root;
    let pp = null;

    while (p !== null) {
      pp = p;
      p = p.left;
    }

    return pp;
  }

  getPrevNode(value) {
    return this.search(value).left;
  }

  getNextNode(value) {
    return this.search(value).right;
  }
}

const tree = new BinarySearchTree();
const insertArr = [33, 16, 50, 13, 18, 34, 58, 15, 17, 25, 51, 66, 19, 27, 55];

for (let i = 0; i < insertArr.length; i++) {
  const value = insertArr[i];
  tree.insert(value);
}

function displayTree(tree) {
  console.log(JSON.stringify(tree, null, 2), '\n');
}
displayTree(tree);

console.log('allNodes', tree.root.allNodes, '\n');
console.log('markDeleteCount', tree.root.markDeleteCount, '\n');
const minNode = tree.getMinNode();
console.log('minNode', JSON.stringify(minNode, null, 2), '\n');
const maxNode = tree.getMaxNode();
console.log('maxNode', JSON.stringify(maxNode, null, 2), '\n');
const prevOf25 = tree.getPrevNode(25);
const nextOf25 = tree.getNextNode(25);
console.log('prevOf25', JSON.stringify(prevOf25, null, 2));
console.log('nextOf25', JSON.stringify(nextOf25, null, 2));

tree.insert(55);
let orderArr;
orderArr = tree.getOrderValueBasedOnInOrderDFS(true);
console.log(orderArr, '\n');



const deleteArr = [13, 55, 58, 15, 17, 34, 19, 33];

for (let i = 0; i < deleteArr.length; i++) {
  const val = deleteArr[i];
  tree.delete(val);
  orderArr = tree.getOrderValueBasedOnInOrderDFS(true);
  console.log(orderArr, '\n');
}

// displayTree(tree);



