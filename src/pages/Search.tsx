import React, { useState, useTransition } from 'react';

const data = Array(100000).fill(null).map((_, index) => index.toString());

export default
function Search() {
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  let inputValue = '';

  return <div className="p-4">
    <div>
      <input
        className="border-solid border-2 rounded-md px-2 py-0.5 mr-1 border-blue-500"
        onChange={(event) => {
          inputValue = event.target.value.trim();
          startTransition(() => {
            setList(() => {
              if (!inputValue) return [];
              return data.filter((str) => str.includes(inputValue));
            });
          });
        }}
      />
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul className="border-solid border-2 rounded-md mt-3 min-h-56">
        {list.map((str) => <Item key={str} value={str} />)}
      </ul>}
    </div>
  </div>;
}

function Item(props: { value: string }) {
  return <li className="px-2 py-1 border-b-2 last:border-b-0">{props.value}</li>;
}
