import { useState, useTransition } from 'react';

localStorage.bgColor = 'bg-blue-500';

function getBgColor() {
  return localStorage.bgColor;
}

function setBgColor(color: string) {
  localStorage.bgColor = color;
}

function Li(props: { index: number }) {
  const bgColor = getBgColor();
  return <li className={bgColor}>{props.index}</li>;
}

export default
function StateTear() {
  const [list, setList] = useState<string[]>([]);
  const [loading, startTransition] = useTransition();

  return <div>
    <div>
      <button onClick={() => {
        startTransition(() => {
          setList(Array(100000).fill(null));
        });
      }}>渲染列表</button>
      <button onClick={() => {
        setBgColor('bg-red-500');
      }}>修改颜色</button>
    </div>
    <div>
      {loading ? <span>加载中...</span> : <ul>
        {list.map((_, index) => <Li key={index} index={index} />)}
      </ul>}
    </div>
  </div>;
}
