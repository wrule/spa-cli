import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import Home from '@/pages/Home';
import About from '@/pages/About'; 
import List from '@/pages/List';
import _404 from '@/pages/_404';

interface Emoji {
  id: string;
  emoji: string;
  top: string;
  left: string;
  size: number;
  targetSize: number;
  isLeaving: boolean;
  animationDuration: number;
}

const EMOJIS = ['🌟', '✨', '🎨', '🎭', '🎪', '🎯', '🎮', '💫', '🚀', '🌈', '🎸', '🎵'];
const MENU_ITEMS = [
  { path: '/', name: '主页', icon: '🏠' },
  { path: '/list', name: '列表', icon: '📋' },
  { path: '/about', name: '关于', icon: '💡' }
];

function useFloatingEmojis() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  
  const generateRandomEmoji = useCallback((): Emoji => ({
    id: Math.random().toString(36).substr(2, 9),
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.floor(Math.random() * (256 - 32 + 1) + 32),
    targetSize: Math.floor(Math.random() * (256 - 32 + 1) + 32),
    isLeaving: false,
    animationDuration: Math.floor(Math.random() * 4000 + 4000),
  }), []);

  useEffect(() => {
    setEmojis(Array(12).fill(null).map(generateRandomEmoji));

    const interval = setInterval(() => {
      setEmojis(current => {
        if (Math.random() > 0.5 && current.length < 15) {
          return [...current, { ...generateRandomEmoji(), targetSize: 256, size: 0 }];
        } 
        if (current.length > 8) {
          const index = Math.floor(Math.random() * current.length);
          return current.map((emoji, i) => i === index ? { ...emoji, isLeaving: true, targetSize: 0 } : emoji);
        }
        return current;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [generateRandomEmoji]);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setEmojis(current => {
        const newEmojis = current
          .map(emoji => {
            const diff = emoji.targetSize - emoji.size;
            return Math.abs(diff) < 0.1 ? emoji : {
              ...emoji,
              size: emoji.size + diff * 0.05
            };
          })
          .filter(emoji => emoji.size > 0.1 || !emoji.isLeaving);
        
        if (newEmojis.some(emoji => Math.abs(emoji.targetSize - emoji.size) >= 0.1)) {
          frameId = requestAnimationFrame(animate);
        }
        return newEmojis;
      });
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return emojis;
}

function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const floatingEmojis = useFloatingEmojis();

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <header className="fixed top-0 w-full bg-amber-400 text-gray-800 shadow-xl z-50 h-12">
        <div className="h-full flex items-center">
          <h1 className="text-xl font-bold tracking-wider ml-[28px]">
            <span className="mr-2">🚀</span>
            My Awesome App
            <span className="ml-2">✨</span>
          </h1>
        </div>
      </header>

      <div className="flex flex-1 pt-12">
        <aside className={`fixed top-12 left-0 h-[calc(100vh-48px)] bg-white shadow-[2px_0_8px_rgba(0,0,0,0.1)] 
          transition-all duration-300 z-40 ${isCollapsed ? 'w-[64px]' : 'w-64'}`}>
          <nav>
            <ul className="space-y-2">
              {MENU_ITEMS.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className={`flex items-center h-12 transition-colors group
                        ${isCollapsed ? 'justify-center' : 'px-3'}
                        ${isActive ? 'text-amber-500 bg-amber-50' : 'text-gray-700 hover:bg-amber-50 hover:text-amber-500'}`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className={`ml-3 font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform
                        ${isCollapsed ? 'hidden' : 'block'}`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute bottom-4 right-0 transform translate-x-1/2 w-8 h-8 rounded-full 
              bg-amber-400 text-gray-800 shadow-lg hover:bg-amber-500 transition-colors cursor-pointer 
              flex items-center justify-center z-50"
          >
            <span className="text-lg pointer-events-none select-none">
              {isCollapsed ? '👉' : '👈'}
            </span>
          </button>
        </aside>

        <main className={`relative flex-1 min-h-[calc(100vh-48px)] transition-all duration-300 z-0 
          ${isCollapsed ? 'ml-[64px]' : 'ml-64'}`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {floatingEmojis.map(({ id, emoji, top, left, size, animationDuration }) => (
              <div
                key={id}
                className="absolute animate-float"
                style={{
                  top,
                  left,
                  fontSize: `${size}px`,
                  opacity: 0.1,
                  animation: `float ${animationDuration}ms ease-in-out infinite`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'font-size 400ms ease-out',
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          <div className="relative h-full p-8">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<_404 />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}