// 3. 实现一个计时器组件
//   - 页面展示从开始计时到当下多少秒。从零开始计时，每秒更新一次 0, 1, 2, 3, 4, ……
//   - 添加三个 button 控制计时器的启动，暂停和清空
//   - 添加第四个 button 进行存储，每次点击存储当前计数，最多存储并展示最近的五条记录

import { useState } from 'React';

function Count() {

  const [arr, setArr] = useState<Array<number>>([]);
  const [id, setId] = useState<number | null>(null);
  const [num, setNum] = useState<number>(0);
  const [res, setRes] = useState<Array<number>>([]);

  const start = () => {
    const id = setInterval(() => {
      setArr(arr => arr.unshift(num));
      setNum(num => num + 1);
    }, 1000);

    setId(id);
  };
  const stop = () => {
    clearInterval(id);
  };
  const empty = () => {
    setArr([]);
  };
  const save = () => {
    const res = arr.slice(0, 5);
    setRes(res);
  };

  return <div>
    <div onClick={start}>启动</div>
    <div onClick={stop}>暂停</div>
    <div onClick={empty}>清空</div>
    <div onClick={save}>存储</div>
  </div>;
}