import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
