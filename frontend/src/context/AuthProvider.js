

import React, { useCallback, useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider ({children}) {

    const [authState, setAuthState] = useState({isAuthenticated:false});
    
    const authenticate= useCallback((username, password) => {
        console.log(username,password);
console.log('from authProvider')
        setAuthState({isAuthenticated:true})
    },[])

    return (
        <AuthContext.Provider value={{authState, authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}