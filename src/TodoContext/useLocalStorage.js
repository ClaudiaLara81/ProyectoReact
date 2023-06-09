import React from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setloading] = React.useState(true);
    const[item, setItem] = React.useState(initialValue);
      React.useEffect(()=>{
        setTimeout(()=>{
        try {
          const localStoreItem= localStorage.getItem(itemName);
          let parsedItem;
  
          if(!localStoreItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
  
          } else {
            parsedItem = JSON.parse(localStoreItem);
          }
  
            setItem(parsedItem);
            setloading(false);
            
        } catch (error){
            setError(error);
        }
        }, 1000)
      });
    
  
    
  
    const saveItem = (newItem) => {
  
      try {
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
    
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }
  export {useLocalStorage};