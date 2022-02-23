import { createContext, useCallback, useState } from "react";


export const NotificationContext= createContext();

export const types={
    error:'error',
    success:'success'
}

export const NotificationProvider =({children}) =>{

    const [notification, setNotification]= useState({show:false, message:'', type:types.error});

    const addNotification= useCallback((message, type=types.error) =>{
        setNotification({show:true,message,type});
        setTimeout(()=>{
            setNotification({show:false, message:'', type})
        },5000)
    },[]);

    return (
        <NotificationContext.Provider value={ {notification, addNotification}} >
            {children}
        </NotificationContext.Provider>
    )
}
