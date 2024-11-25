const { arr } = require('./flatten_deduplicate');

function mimiQueueToFlattenDeduplicate(arr) {
  const res = [];
  let resIdx = 0;
  const seen = {};
  const queue = [...arr];
  let head = 0;
  let tail = queue.length;

  while (head < tail) {
    const val = queue[head++];
    if (typeof val === 'number') {
      if (!seen[val]) {
        res[resIdx++] = val;
        seen[val] = true;
      }
    } else {
      for (let i = 0; i < val.length; i++) {
        const ele = val[i];
        queue[tail++] = ele;
      }
    }
  }
  return res;
};

const res = mimiQueueToFlattenDeduplicate(arr);
console.log('res', res);

module.exports = {
  mimiQueueToFlattenDeduplicate
};