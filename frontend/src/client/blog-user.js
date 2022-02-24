

export async function signIn (username, password) {

    const response= await fetch("/users/sign_in", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
    })
    const user= await response.json();
    console.log(response.status)
    if (response.status !==200) {
        throw new Error('Can not be logged in!')
    }
    if (!user) {
        throw new Error('Log in failed!')
    }
     return user
     

}

export async function register (username, password, passwordConfirmation) {
   
    const response= await fetch("/users/register", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username, password, passwordConfirmation})
    });

    if (response.status !==200) {
        throw new Error('error response')
    }
    return  await response.json();

}
 export async function logout() {

    const res= await fetch('/users/logout');

    if (res.status!==200) {
        throw new Error('Logout unsuccessful!')
    }

 }


