import React from 'react';
import { TodoIcon } from './indexTIcon';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'grey'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };