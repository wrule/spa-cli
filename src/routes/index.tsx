import Home from '@/pages/Home';
import List from '@/pages/List';
import About from '@/pages/About';
import _404 from '@/pages/_404';
import { RouteObject } from 'react-router-dom';

const Routes: RouteObject[] = [];

const mainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '*', element: <PageNotFoundView /> },
    { path: '/', element: <Home /> },
    { path: '404', element: <PageNotFoundView /> },
  ],
};
Routes.push(mainRoutes);

export default Routes;
