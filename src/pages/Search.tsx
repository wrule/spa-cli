import React, { useState } from 'react';

const data = Array(30000).fill(null).map(() => Math.random().toString());

export default
function Search() {
  const [filter, setFilter] = useState({ search: '' });
  const [list, setList] = useState<string[]>([]);

  return <div>
    <div>
      <input />
      <button>Search</button>
    </div>
    <div>
      <ul>
        {list.map((_, index) => <Item key={index} value={index} />)}
      </ul>
    </div>
  </div>;
}

function Item(props: { value: number }) {
  return <li>{props.value}</li>;
}
