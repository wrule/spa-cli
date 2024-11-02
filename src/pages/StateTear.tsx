import { useState, useTransition } from 'react';

localStorage.bgColor = 'bg-blue-500';

function getBgColor() {
  return localStorage.bgColor;
}

function setBgColor(color: string) {
  localStorage.bgColor = color;
}

export default
function StateTear() {
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  return <div>
    <div>
      <button onClick={() => {
        startTransition(() => {
          setList(Array(200000).fill(null));
        });
      }}>渲染列表</button>
      <button onClick={() => {
        setBgColor('bg-red-500');
      }}>修改颜色</button>
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((_, index) => <li key={index} className={(() => getBgColor())()}>{index}</li>)}
      </ul>}
    </div>
  </div>;
}
