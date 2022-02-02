

export async function create(title, postText, userId, token) {

    const response = await fetch("/posts/create", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ title, postText, owner: userId })
    })


    if (response.status !== 204) {
        throw new Error('Post is not created')
    }


}

export async function getAll() {

    console.log(`from blog-post `)
    const res = await fetch("/posts");
    const data = await res.json()


    return data;

}

export async function getOne (postId) {
    const res= await fetch (`/posts/${postId}`);

    const data= await res.json();
    return data;
}

export async function deletePost (postId, token) {
    const res = await fetch (`/posts/delete/${postId}`, {
        method:'DELETE',
        headers:{
            "Content-type":"application/json"
        }
    });
    console.log(res.status)
    
}