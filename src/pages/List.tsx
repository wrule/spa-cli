import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { produce } from 'immer';
import { useImmer } from '@/hooks/useImmer';

let count = 0;

const List = () => {
  const [filter, setFilter] = useState({ search: '' });

  console.log(`🐤 渲染了 ${++count} 次`, filter);

  const handleClick = useCallback(
    (search: string) => {
      const newFilter = produce(filter, (draft) => {
        draft.search = search;
      });
      if (newFilter !== filter) {
        setFilter(() => newFilter);
      }
    },
    [filter],
  );

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
            onClick={() => {
              handleClick('1');
            }}
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
