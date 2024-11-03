import React, { useState, useTransition } from 'react';

const data = Array(30000).fill(null).map(() => Math.random().toString());

export default
function Search() {
  const [filter, setFilter] = useState({ search: '' });
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  return <div>
    <div>
      <input onChange={(event) => {
        startTransition(() => {
          setList(() => data.fi)
        });
      }} />
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
