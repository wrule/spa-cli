import { Helmet } from 'react-helmet-async';

export default function List() {
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
