

export async function singIn (username, password) {

    const response= await fetch("/users/sing_in", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username,password})
    })
      const user= await response.json()
    

    if (!user) {
        throw new Error('Log in failed')
    }
     return user
     

}

export async function register (username, password) {
   
    const response = await fetch("/users/regist", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username, password})
    });

    if (response.status !==204) {
        throw new Error('Can not be registered!')
    }

}
 export async function logout() {

    const res= await fetch('/users/logout');

    if (res.status!==200) {
        throw new Error('Logout unsuccessful!')
    }

 }


