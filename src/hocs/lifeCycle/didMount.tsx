import * as React from 'react';

type LifecycleFunction<TProps, TState = {}> = (
  props: TProps,
  state?: TState,
) => void;

export const didMount = <T extends {}>(f: LifecycleFunction<T>) => (
  BaseComponent: React.ComponentType<T>,
) => {
  class EnhancedComponent extends React.Component<T> {
    componentDidMount() {
      f(this.props);
    }

    render() {
      return React.createFactory(BaseComponent as React.ComponentClass<T>)({
        ...(this.props as any),
        ...this.state,
      });
    }
  }
  return EnhancedComponent;
};
