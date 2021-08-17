import HomePage from '@/pages/HomePage';
import PredictPage from '@/pages/PredictPage';
import ReportPage from '@/pages/ReportPage';
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
    component: RouterViewWrapper,
    children: [
      {
        path: '',
        component: PredictPage,
      },
      {
        name: 'report',
        path: 'report',
        component: ReportPage,
        props: true,
      },
    ],
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
