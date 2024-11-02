import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Jotai from './pages/Jotai';

export default
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/jotai" element={<Jotai />} />
    </Routes>
  </BrowserRouter>
}
