
import { signIn, register, logout } from "../client/blog-user.js"



export async function login(username, password) {

    try {
        const user = await signIn(username, password); 

        console.log('sign in from authservice')
        console.log(user)
        return user
    } catch (error) {

        throw new Error('Not logged in! Username or password invalid!')
    }
}

export async function authRegister(username, password, passwordConfirmation) {
    console.log('inside authreg....')
    try {
     const user=  await register(username, password, passwordConfirmation);

        console.log('registered .. from authService,', user);
        return user;

    } catch (error) {
        console.log('inside catch.....')
        throw new Error('Registration unsuccessful!')
    }

}

export async function logoutUser() {
    try {
        await logout();
        console.log('Logged out!')

    } catch (error) {
        console.log(error.message);
        throw new Error('User is not logged out!')
    }
}