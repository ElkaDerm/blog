

import { singIn, register } from "../client/blog-user.js"

export async function login(username, password) {

try {
    await singIn(username, password);

  console.log ('sing in from authservice')
    
} catch (error) {
    console.log (error.message)
}
}

export async function authRegister (username, password) {

    try {
        await register(username, password)
        console.log('registered .. from authService')
        
    } catch (error) {
        console.log(error.message)
    }
}