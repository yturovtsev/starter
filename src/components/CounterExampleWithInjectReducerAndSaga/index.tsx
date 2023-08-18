import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '@/store/redux-injectors';
import { action } from './actions';
import { counterSliceReducer } from './reducer';
import { testSaga } from './saga';
import { countSelector } from './selectors';

export const CounterExampleWithInjectReducerAndSaga = () => {
  useInjectReducer({ key: 'testReducer', reducer: counterSliceReducer });
  useInjectSaga({ key: 'testSaga', saga: testSaga });

  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  return (
    <div>
      <button type="button" onClick={() => dispatch(action())}>
        increment
      </button>
      <br />
      count: {count}
    </div>
  );
};
