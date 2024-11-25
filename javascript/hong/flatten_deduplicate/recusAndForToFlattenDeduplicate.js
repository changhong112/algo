const { arr } = require('./flatten_deduplicate');

// 递归加for循环实现
function recusAndForToFlattenDeduplicate(arr) {
  const res = [];
  let resInx = 0;
  const seen = {};

  function iterate(arr) {
    for (let i = 0; i < arr.length; i++) {
      const ele = arr[i];
      if (typeof ele === 'number') {
        if (!seen[ele]) {
          res[resInx++] = ele;
          seen[ele] = true;
        }
      } else {
        iterate(ele);
      }
    }
  }

  iterate(arr);
  return res;
}

const res = recusAndForToFlattenDeduplicate(arr);
console.log('res', res);

module.exports = {
  recusAndForToFlattenDeduplicate
};