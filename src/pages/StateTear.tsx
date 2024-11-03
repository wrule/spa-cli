import { useState, useTransition } from 'react';
import { atom, useAtom } from 'jotai';

const atomBgColor = atom('bg-blue-500');

function Li(props: { index: number }) {
  const [bgColor, setBgColor] = useAtom(atomBgColor);
  return (
    <li className={`${bgColor} p-3 rounded-md shadow-sm transition-all duration-200 hover:shadow-md flex items-center justify-between border border-gray-200`}>
      <span className="font-medium">#{props.index}</span>
      <span className="text-sm text-gray-600">Item {props.index}</span>
    </li>
  );
}

export default
function StateTear() {
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();
  const [bgColor, setBgColor] = useAtom(atomBgColor);

  return <div>
    <div>
      <button 
        onClick={() => {
          startTransition(() => {
            setList(Array(100000).fill(null));
          });
        }}
        className="px-4 py-2 mr-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md">
        渲染列表
      </button>
      <button
        onClick={() => {
          setBgColor('bg-red-500');
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-md">
        修改颜色
      </button>
      <button
        onClick={() => {
          setBgColor('bg-yellow-500');
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-md">
        修改颜色2
      </button>
    </div>
    <div className="p-4">
      {loading ? (
        <span className="flex items-center text-gray-600">
          <svg className="animate-spin h-5 w-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          加载中...
        </span>
      ) : (
        <ul className="space-y-2 max-h-[600px] overflow-y-auto">
          {list.map((_, index) => (
            <Li key={index} index={index} />
          ))}
        </ul>
      )}
    </div>
  </div>;
}
