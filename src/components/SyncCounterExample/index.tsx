import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSync } from './actions';
import { countSelector } from './selectors';

export const SyncCounterExample = () => {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  return (
    <div>
      <button type="button" onClick={() => dispatch(actionSync())}>
        increment
      </button>
      <br />
      count: {count}
    </div>
  );
};
