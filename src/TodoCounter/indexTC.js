import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/indexTCT';

function TodoCounter(){
    
    const {totalCapitulos, completedCapitulos} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completedCapitulos} de {totalCapitulos} capitulos</h2>
    );
}

export { TodoCounter } ;