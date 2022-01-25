

export async function create (title, postText, userId) {

    const response = await fetch("/posts/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({title, postText, owner:userId})
    })
       
    
    if (response.status !==204) {
         throw new Error('Post is not created')
    }


}