import React from 'react';
import './CreateTodoButton.css';
//import { TodoContext } from '../TodoContext/indexTCT';
//import { Modal } from '../Modal/indexM';

function CreateTodoButton(props){
    
    const onClickButton = () => {
       props.setOpenModal(prevState => !prevState);
    };

    return(
        <button 
        className="CreateTodoButton" 
        onClick={onClickButton }
        >
            +
        </button>
    );
}

export {CreateTodoButton};