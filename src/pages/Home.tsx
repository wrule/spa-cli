import bubu from '@/assets/images/cover-1.png';
import { Button } from '@mui/material';

export default
function Home() {
  return <div className="bg-red-400">
    <div>主页</div>
    <img src={bubu} className="w-40 h-40" />
    <Button variant="contained">点我</Button>
  </div>;
}
