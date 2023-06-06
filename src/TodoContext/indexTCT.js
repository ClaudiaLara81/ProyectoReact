import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: capitulos,
        saveItem: savecapitulos,
        loading,
        error,
      } = useLocalStorage('CAPITULOS_V1', []);
            
      const [searchValue, setSearchValue] = React.useState('');
      
      const [openModal, setOpenModal]= React.useState(false);

      const completedCapitulos = capitulos.filter(capitulo => !!capitulo.completed).length;
     
      const totalCapitulos = capitulos.length;
    
      let searchedCapitulos = [];
    
      if (!searchValue.length >= 1) {
        searchedCapitulos=capitulos;
      } else {
        searchedCapitulos = capitulos.filter(capitulo =>{
          const capituloTexto = capitulo.text.toLowerCase();
          const searchtexto = searchValue.toLowerCase();
          return capituloTexto.includes(searchtexto);
        });
        
      }
        
      const addCapitulo = (text) => {
        
        const newCapitulo = [...capitulos];
        newCapitulo.push({
          completed: false,
          text
        });
        savecapitulos(newCapitulo);
      };

        // para marcar de completados los capitulos
      const completeCapitulo = (text) => {
        const capituloIndex = capitulos.findIndex(capitulo => capitulo.text === text); //examinando de capitulo por capitulo para saber cual tiene ese dato
        const newCapitulo = [...capitulos];
        newCapitulo[capituloIndex].completed = true;
        savecapitulos(newCapitulo);
      };
    
      const deleteCapitulo = (text) => {
        const capituloIndex = capitulos.findIndex(capitulo => capitulo.text === text); //examinando de capitulo por capitulo para saber cual tiene ese dato
        const newCapitulo = [...capitulos];
        newCapitulo.splice(capituloIndex, 1);
        savecapitulos(newCapitulo);
      };
    

return (
<TodoContext.Provider value= {{
    loading,
    error,
    totalCapitulos,
    completedCapitulos,
    searchValue,
    setSearchValue,
    searchedCapitulos,
    addCapitulo,
    completeCapitulo,
    deleteCapitulo,
    openModal,
    setOpenModal,
}}>

{props.children}
</TodoContext.Provider>
);

}

export {TodoContext, TodoProvider};