import HomePage from '@/pages/HomePage';
import PredictPage from '@/pages/PredictPage';
import CompanyListPage from '@/pages/CompanyListPage';
import CompanyDetailPage from '@/pages/CompanyDetailPage';
import ReferencePage from '@/pages/ReferencePage';
import NotFoundPage from '@/pages/NotFoundPage';
import RouterViewWrapper from '@/pages/RouterViewWrapper';

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/predict',
    component: PredictPage,
  },
  {
    path: '/company',
    component: RouterViewWrapper,
    children: [
      {
        path: '',
        component: CompanyListPage,
      },
      {
        path: ':id',
        component: CompanyDetailPage,
      },
    ],
  },
  {
    path: '/reference',
    component: ReferencePage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
