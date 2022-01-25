

import React, { useCallback, useState } from "react";
import { login } from "../service/authService.js";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider ({children}) {

    const [authState, setAuthState] = useState({
        isAuthenticated:false,
        username:'',
        userId:'',
        token:'',
        errorMessage:undefined});
    
    const authenticate= useCallback(async (username, password) => {

        try{
            
          const user=  await login(username,password);

            setAuthState({isAuthenticated:true,username:user.username,userId:user._id, token:''});

        }catch (err) {
            

            setAuthState({isAuthenticated:false, errorMessage:err.message})
        }

    },[])

    return (
        <AuthContext.Provider value={{authState, authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}