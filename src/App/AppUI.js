import React from "react";
import { TodoContext } from "../TodoContext/indexTCT"; 
import {TodoCounter} from '../TodoCounter/indexTC';
import { TodoSearch } from "../TodoSearch/indexTS";
import { TodoList } from "../TodoList/indexTL";
import { TodoItems } from "../TodoItems/indexTI";
import { TodoForm } from "../TodoForm/indexTF";
import {CreateTodoButton} from "../CreateTodoButton/indexCtB";
import { Modal } from "../Modal/indexM";
import { TodoError } from "../TodoError/indexTE";
import { TodoLoading } from "../TodoLoading/indexTL";
import { EmptyTodo } from "../EmptyTodo/indexET";



function AppUI () {
 
    const {
      error, 
      loading,
      searchedCapitulos,
      completeCapitulo,
      deleteCapitulo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
      <TodoCounter />
      <TodoSearch />
           
      <TodoList>

                {error && <TodoError error={error} />}
                {loading && <TodoLoading />}
                {(!loading && !searchedCapitulos.length) && <EmptyTodo />}


                {searchedCapitulos.map(capitulo => (
                  <TodoItems 
                  key={capitulo.text} 
                  text={capitulo.text} 
                  completed={capitulo.completed}
                  onComplete = {()=> completeCapitulo(capitulo.text)}
                  onDelete = {()=> deleteCapitulo(capitulo.text)}
                  />
                ))}
      </TodoList> 
                  
      {!!openModal && (
      <Modal>
        <TodoForm />
      </Modal>)}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      </React.Fragment>
    );
} export { AppUI }