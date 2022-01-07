

import React, { useState } from "react";
import { AuthContext } from "./AuthContext.js";

export function AuthProvider ({children}) {

    const [authState, setAuthState] = useState({isAuthenticated:false});
    

    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
            {children}
        </AuthContext.Provider>
    )
}