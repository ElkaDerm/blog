

export async function create (title, postText) {

    const response = await fetch("/posts/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({title, postText})
    })
       
    
    if (response.status !==204) {
         throw new Error('Post is not created')
    }


}