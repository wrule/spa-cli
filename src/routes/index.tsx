import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import List from '@/pages/List';
import About from '@/pages/About';
import _404 from '@/pages/_404';
import PageNotFound from '@/components/common/PageNotFound';
import { RouteObject } from 'react-router-dom';

const Routes: RouteObject[] = [];

Routes.push({
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <List />,
    },
    {
      path: 'list',
      element: <List />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: '404',
      element: <_404 />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ],
});

export default Routes;
