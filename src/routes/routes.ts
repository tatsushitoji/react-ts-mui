import { RouteConfig } from 'react-router-config';
import { App } from '../components/App';
import { Counter } from '../containers/Counter';
import { Todo } from '../containers/Todo';

export const routeConfig: RouteConfig[] = [
  {
    component: App as any,
    routes: [
      {
        path: '/',
        exact: true,
        component: Counter,
      },
      {
        path: '/todo',
        exact: true,
        component: Todo,
      },
    ] as any,
  },
];
