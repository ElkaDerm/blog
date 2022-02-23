

export async function signIn (username, password) {

    const response= await fetch("/users/sign_in", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
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

export async function register (username, password) {
   
    const response= await fetch("/users/regist", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username, password})
    });

    if (response.status !==200) {
        throw new Error('error response')
    }

}
 export async function logout() {

    const res= await fetch('/users/logout');

    if (res.status!==200) {
        throw new Error('Logout unsuccessful!')
    }

 }


