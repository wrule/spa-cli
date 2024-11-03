import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jotai from './pages/Jotai';
import StateTear from './pages/StateTear';
import Search from './pages/Search';

export default
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/jotai" element={<Jotai />} />
      <Route path="/tear" element={<StateTear />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
}
