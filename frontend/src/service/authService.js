

import { singIn, register, logout } from "../client/blog-user.js"

export async function login(username, password) {

try {
  const user=  await singIn(username, password);

  console.log ('sing in from authservice')
    console.log (user)
    return user
} catch (error) {
    
    throw new Error('Not loged in from authService')
}
}

export async function authRegister (username, password) {

    try {
        await register(username, password)
        console.log('registered .. from authService')

        // const user= await singIn(username, password);
        // console.log ('logged in after register')
        
    } catch (error) {
        console.log(error.message)
    }
}

export async function logoutUser() {
    try {
        await logout();
        console.log('logout successful!')
        
    } catch (error) {
        console.log(error.message)
    }
}