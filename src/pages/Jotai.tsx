import { useStateX } from '@/hooks/useStateX';
import React, { useState } from 'react';

let count = 0;

export default function Jotai() {
  console.log(`🐤 Render了 ${++count} 次`);

  const [searchValue, setSearchValue] = useStateX({ kwd: '1' });

  const handleSearch = () => {
    setSearchValue((draft) => {
      const value = (Math.random() * 3) < 1 ? '1' : '2';
      console.log(value);
      draft.kwd = value;
    });
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md gap-2 p-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-700 transition-all duration-200"
      >
        Search
      </button>
      <span className="ml-2">{searchValue.kwd}</span>
      <button
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-700 transition-all duration-200"
        onClick={() => {
          searchValue.kwd = 'haha';
        }}>
        Test
      </button>
    </div>
  );
}

Jotai.whyDidYouRender = true;
