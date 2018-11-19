import loadable from 'loadable-components';

export const LoadableHome = loadable(
  () =>
    import(/* webpackChunkName: "Home" */ '../components/pages/Home').then(
      ({ Home }) => Home,
    ),
  {
    modules: ['../components/pages/Home'],
  },
);

export const LoadableCounter = loadable(
  () =>
    import(/* webpackChunkName: "Counter" */ '../containers/Counter').then(
      ({ Counter }) => Counter,
    ),
  {
    modules: ['../containers/Counter'],
  },
);

export const LoadableTodo = loadable(
  () =>
    import(/* webpackChunkName: "Todo" */ '../containers/Todo').then(
      ({ Todo }) => Todo,
    ),
  {
    modules: ['../../containers/Todo'],
  },
);
