import React from 'react';
import { GetStaticProps } from 'next';
import { CounterExampleWithInjectReducerAndSaga } from '@/components/CounterExampleWithInjectReducerAndSaga';
import { SyncCounterExample } from '@/components/SyncCounterExample';
import { setCount } from '@/components/SyncCounterExample/reducer';
import { wrapper } from '@/store/store';

const Index = () => {
  return (
    <>
      CounterExampleWithInjectReducerAndSaga
      <br />
      <CounterExampleWithInjectReducerAndSaga />
      <br />
      <SyncCounterExample />
      <br />
      <div>Index page</div>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(setCount(10));

    return {
      props: {},
    };
  },
);

export default Index;
