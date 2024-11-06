import { Helmet } from 'react-helmet-async';

let count = 0;

export default function List() {
  console.log(`🐤 渲染了 ${++count} 次`);

  return (
    <>
      <Helmet>
        <title>这里是一个列表页</title>
      </Helmet>
      <div>
        <div>列表内容</div>
      </div>
    </>
  );
}
