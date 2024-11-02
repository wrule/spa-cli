import { useState, useTransition } from 'react';

let bgColor = 'bg-blue-500';

const data = Array(50000).fill(0).map(() => Math.random().toString());

export default
function StateTear() {
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
      search1(keyword);
    });
  };

  return <div>
    <div>
      <input
        className="border-2"
        onChange={(event) => {
          search2(event.target.value.trim());
        }}
      />
      <button onClick={() => {
        bgColor = 'bg-red-500';
        console.log(bgColor);
      }}>点我</button>
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((num, index) => <li key={index}>{num}</li>)}
      </ul>}
    </div>
  </div>;
}
