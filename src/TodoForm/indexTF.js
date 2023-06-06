import React from "react";
import { TodoContext } from "../TodoContext/indexTCT";

function TodoForm () {

    const [newCapituloValue, setNewCapituloValue]= React.useState('');
    const{
        addCapitulo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewCapituloValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onSubmit= (event) => {
        event.preventDefault();
        addCapitulo(newCapituloValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
          <label>Escribe tu nuevo tema</label>
          <textarea 
          value={newCapituloValue}
          onChange={onChange}
          placeholder="Capitulo 1"
          />  
          <div className="TodoForm-buttonConteiner">
            <button 
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick={onCancel}>
                Cancelar
            </button>
            <button type="submit"
            className="TodoForm-button TodoForm-button--add">
                Añadir
            </button>
            </div>    
        </form>
    );
}
export {TodoForm};