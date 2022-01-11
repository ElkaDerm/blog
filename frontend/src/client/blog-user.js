

export async function singIn (username, password) {

    const response= await fetch("/users/sing_in", {
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({username,password})
    })

    if (response.status !== 204) {
        throw new Error('Log in failed')
    }

}

