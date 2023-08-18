import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { InjectedStore } from '@/store/types';
import createReducer from './reducer';
import { rootSaga } from './saga';

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const { run: runSaga } = sagaMiddleware;

  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middlewares,
    enhancers: [
      createInjectorsEnhancer({
        runSaga,
        createReducer,
      }),
    ],
  }) as InjectedStore;

  store.injectedReducers = {};
  store.injectedSagas = {};

  runSaga(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      forceReducerReload(store);
    });
  }

  return store;
};

export const wrapper = createWrapper(makeStore);
