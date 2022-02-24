

import React, { useCallback, useState } from "react";
import { authRegister, login } from "../service/authService.js";
import { AuthContext } from "./AuthContext.js";
import { useNavigate } from "react-router-dom";

const initialState = {
    isAuthenticated: false,
    username: '',
    userId: '',
    token: '',
    errorMessage: undefined
}

export function AuthProvider({ children }) {


    const [authState, setAuthState] = useState(initialState);

    const authenticate = useCallback(async (username, password) => {

        try {

            const user = await login(username, password);

            setAuthState({ isAuthenticated: true, username: user.username, userId: user._id, token: '' });

        } catch (err) {

            console.log(err.message)
            setAuthState({ isAuthenticated: false, errorMessage: err.message });

        }

    }, []);
    const register = useCallback(async (username, password, passwordConfirmation) => {

        try {

            const user = await authRegister(username, password, passwordConfirmation);
            console.log(user)
            setAuthState({ isAuthenticated: true, username: user.username, userId: user._id, token: '' });

        } catch (err) {

            console.log(err.message)
            setAuthState({ isAuthenticated: false, errorMessage: err.message });

        }

    }, []);


    const logout = useCallback(() => {
        setAuthState(initialState)
    }, [])




    return (
        <AuthContext.Provider value={{ authState, authenticate, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}