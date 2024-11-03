import React, { useState, useTransition } from 'react';

const data = Array(30000).fill(null).map(() => Math.random().toString());

export default
function Search() {
  console.log('🐤 渲染了');

  const [filter, setFilter] = useState({ search: '' });
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  let inputValue = '';

  return <div className="p-4">
    <div>
      <input
        className="border-solid border-2 rounded-md px-2 py-0.5 border-blue-500"
        onChange={(event) => {
          inputValue = event.target.value.trim();
        }}
      />
      <button
        className="bg-blue-500 text-white rounded-md px-2 py-1 mx-1"
        onClick={() => {
          setFilter({ search: inputValue });
        }}>
        搜索
      </button>
      <button className="bg-yellow-500 text-white rounded-md px-2 py-1 mx-1">
        切换颜色
      </button>
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((_, index) => <Item key={index} value={index} />)}
      </ul>}
    </div>
  </div>;
}

function Item(props: { value: number }) {
  return <li>{props.value}</li>;
}
