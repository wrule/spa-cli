import bubu from '@/assets/images/cover-1.png';
import ColorModeContext from '@/context/colorMode';
import { Button } from '@mui/material';
import { useContext } from 'react';

export default
function Home() {
  const colorMode = useContext(ColorModeContext);

  return <div className="bg-red-400">
    <div>主页</div>
    <img src={bubu} className="w-40 h-40" />
    <Button variant="contained" onClick={() => {
      colorMode.toggleColorMode();
    }}>点我切换主题</Button>
  </div>;
}
