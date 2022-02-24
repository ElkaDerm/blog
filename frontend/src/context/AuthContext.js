


import React from "react";

export const AuthContext= React.createContext({
    authState: undefined,
    authenticate : () => {},
    logout:()=>{},
    register:()=>{}
})

