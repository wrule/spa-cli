import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import List from '@/pages/List';
import _404 from '@/pages/_404';

export default
function App() {
  return <BrowserRouter>
    <div>吊顶</div>
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">主页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<_404 />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>;
}
