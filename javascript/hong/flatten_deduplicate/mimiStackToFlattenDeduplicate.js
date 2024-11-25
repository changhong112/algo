const { arr } = require('./flatten_deduplicate');

function mimiStackToFlattenDeduplicate(arr) {
  const res = [];
  let resIdx = 0;
  const seen = {};
  const stack = [...arr];
  let stackIdx = stack.length;

  while (stackIdx > 0) {
    let val = stack[--stackIdx];
    console.log(val);

    if (typeof val === 'number') {
      if (!seen[val]) {
        res[resIdx++] = val;
        seen[val] = true;
      }
    } else {
      for (let i = 0; i < val.length; i++) {
        const ele = val[i];
        stack[stackIdx++] = ele;
      }
    }
  }

  return res;
}

const res = mimiStackToFlattenDeduplicate(arr);
console.log('res', res);

module.exports = {
  mimiStackToFlattenDeduplicate
};