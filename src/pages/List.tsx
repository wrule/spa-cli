import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { produce } from 'immer';

let count = 0;

const List = () => {
  console.log(`🐤 渲染了 ${++count} 次`);
  const [filter, setFilter] = useState({ search: '' });

  useEffect(() => {
    const a = { b: 123 };
    const b = produce(a, (draft) => {
      draft.b = 123;
    });
    console.log(a, b, a === b);
  });

  return (
    <>
      <Helmet>
        <title>这里是一个列表页</title>
      </Helmet>
      <div className="p-4">
        <div>
          <input
            className="border-gray-200 border-2 px-2 py-1 rounded-md"
            placeholder="请输入搜索内容"
          />
          <button
            className="ml-3 px-2 py-1.5 bg-blue-500 text-white rounded-md"
            onClick={() => setFilter({ search: '' })}
          >
            搜索
          </button>
        </div>
        <div>
          <pre>{JSON.stringify(filter)}</pre>
        </div>
      </div>
    </>
  );
};

List.whyDidYouRender = true;

export default List;
