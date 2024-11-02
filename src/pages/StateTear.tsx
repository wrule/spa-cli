import React, { useState, useTransition } from 'react';

const data = Array(40000).fill(0).map(() => Math.random().toString());

export default
function StateTear() {
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  const search1 = (keyword: string) => {
    setList(() => {
      console.log('计算开始 🚀');
      if (!keyword) return [];
      const result = data.filter((num) => num.includes(keyword));
      console.log('计算结束 👌🏻');
      return result;
    });
  };

  const search2 = (keyword: string) => {
    startTransition(() => {
      search1(keyword);
    });
  };

  return <div>
    <div>
      <input
        className="border-2"
        onChange={(event) => {
          search1(event.target.value.trim());
        }}
      />
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((num, index) => <li key={index}>{num}</li>)}
      </ul>}
    </div>
  </div>;
}
