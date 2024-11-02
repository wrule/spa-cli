import React, { useState, useTransition } from 'react';

let count = 0;
const data = Array(40000).fill(0).map(() => Math.random().toString());

export default
function StateTear() {
  const [num, setNum] = useState<number>(0);
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  const search1 = (keyword: string) => {
    setList(() => {
      console.log('计算开始 🚀', keyword);
      if (!keyword) return [];
      const result = data.filter((num) => num.includes(keyword));
      console.log('计算结束 👌🏻', keyword);
      return result;
    });
  };

  const search2 = (keyword: string) => {
    startTransition(() => {
      const num = ++count;
      search1(keyword);
      setNum(num);
    });
  };

  return <div>
    <div>
      <input
        className="border-2"
        onChange={(event) => {
          search2(event.target.value.trim());
          setNum(200);
        }}
      />
      <span>{num}</span>
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((num, index) => <li key={index}>{num}</li>)}
      </ul>}
    </div>
  </div>;
}
