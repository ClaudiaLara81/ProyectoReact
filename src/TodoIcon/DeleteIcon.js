import React from 'react';
import { TodoIcon } from './indexTIcon'; 

function DeleteIcon({ onDelete }) {

    return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };