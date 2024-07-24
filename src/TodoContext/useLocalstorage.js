import React from "react";

function useLocalStorage(itemName,initialValues){
    const[item, setItem] = React.useState
    (initialValues);
    const[loading , setLoading] = React.useState
    (true)
    const[error, setError] = React.useState
    (false)

React.useEffect(()=>{
    setTimeout(() => {
        try{
            const LocalStorageItem = localStorage.getItem(itemName);
    
            let parsedItem;
        
            if(!LocalStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValues));
                parsedItem = initialValues;
            } else{
                parsedItem =JSON.parse
                (LocalStorageItem);
                setItem(parsedItem);
            }
            setLoading(false);
            }
            catch(error){
                setLoading(false)
                setError(true);
            }
        }, 2000
        );
    },[]);

    const saveItem =(newItem)=>{
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return{
        item,
        saveItem, 
        loading, 
        error
    };
}

export {useLocalStorage}


// localStorage.removeItem('TODO_V1');
// const defaultTodos = [
//   { Text:'empezar con el proyecto React', Completed:true },
//   { Text:'Es un Secreto', Completed:false },
//   { Text:'tomar el curso de intro a react.js', Completed:true },
//   { Text:'Esforzarse al 100% al máximo', Completed:false },
//   { Text:'Usar estados Proyecto 1 React.', Completed:true},
// ];
// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));