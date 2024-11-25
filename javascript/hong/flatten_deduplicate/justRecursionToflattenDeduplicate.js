const { arr } = require('./flatten_deduplicate');

function justRecursionToflattenDeduplicate(arr) {
  const res = [];
  let resIdx = 0;
  const seen = {};

  function iterate(arr) { // arr代表数组或子数组
    let i = 0;
    const n = arr.length;

    function getEle(arr, i) {
      if (i >= n) return; // 终止条件
      const val = arr[i++];
      if (typeof val === 'number') {
        if (!seen[val]) {
          res[resIdx++] = val;
          seen[val] = true;
        }
        getEle(arr, i);
      } else {
        iterate(val);
        getEle(arr, i);
      }
    }

    getEle(arr, i);
  }
  iterate(arr);

  return res;
}

const res = justRecursionToflattenDeduplicate(arr);
console.log('res', res);

module.exports = {
  justRecursionToflattenDeduplicate
};