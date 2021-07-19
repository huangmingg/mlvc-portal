import HomePage from '@/pages/HomePage';
import PredictPage from '@/pages/PredictPage';
import CompanyPage from '@/pages/CompanyPage';
import ReferencePage from '@/pages/ReferencePage';
import NotFoundPage from '@/pages/NotFoundPage';

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
    component: CompanyPage,
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
