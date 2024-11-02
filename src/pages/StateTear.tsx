import React, { useState, useTransition, useEffect, FC } from 'react';

interface ComponentProps {
  count: number;
}

// 模拟耗时组件
const SlowComponent: FC<ComponentProps> = ({ count }) => {
  useEffect(() => {
    // 人为添加延迟
    const start = performance.now();
    while (performance.now() - start < 100) {
      // 阻塞 100ms
    }
  }, [count]);

  return (
    <div style={{ background: '#f0f0f0', padding: '20px', margin: '10px' }}>
      <h2>慢速组件显示的count: {count}</h2>
    </div>
  );
};

// 快速组件
const FastComponent: FC<ComponentProps> = ({ count }) => {
  return (
    <div style={{ background: '#e0e0e0', padding: '20px', margin: '10px' }}>
      <h2>快速组件显示的count: {count}</h2>
    </div>
  );
};

// 按钮样式类型
interface ButtonStyle extends React.CSSProperties {
  marginLeft?: string;
}

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = (): void => {
    // 紧急更新
    setCount(c => c + 1);
    
    // 非紧急更新
    startTransition(() => {
      setCount(c => c + 1);
    });
  };

  const handleAutoClick = (): void => {
    // 快速连续点击以增加复现概率
    for(let i = 0; i < 3; i++) {
      setTimeout(() => handleClick(), i * 100);
    }
  };

  const buttonStyle: ButtonStyle = {
    marginLeft: '10px'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>状态撕裂演示</h1>
      <div>
        <button onClick={handleClick}>单次更新</button>
        <button 
          onClick={handleAutoClick} 
          style={buttonStyle}
        >
          连续快速更新(更容易看到撕裂)
        </button>
      </div>
      
      {isPending && <div style={{ color: 'orange' }}>更新中...</div>}
      
      <FastComponent count={count} />
      <SlowComponent count={count} />
    </div>
  );
};

export default App;
