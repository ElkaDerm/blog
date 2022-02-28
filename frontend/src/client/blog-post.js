

export async function create(title, postText, userId, token) {

    const response = await fetch("/posts/create", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ title, postText, owner: userId })
    })


    if (response.status !== 200) {
        const result = await response.json()
        console.log(result)
        throw (result.error);
    }


}

export async function getAll() {
    
    const res = await fetch("/posts");
    if (res.status!==200) {
        const result= await res.json();
        throw (result.error)
    }
    const data = await res.json();
    return data;

}

export async function getOne(postId) {

    const res = await fetch(`/posts/${postId}`);

    if (res.status !== 200) {
        const result = await res.json()
        throw (result.error);

    } else {

        const data = await res.json();
        return data;
    }
}

export async function deletePost(postId, token) {
    const res = await fetch(`/posts/delete/${postId}`, {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        }
    });

    if (res.status !== 200) {
        const result = await res.json();
        console.log(result)
        throw (result.error);
    }
}

export async function update(postId, title, textBody, token) {


    const res = await fetch(`/posts/${postId}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ title, textBody })

    })
    
    if (res.status !== 200) {
        const result = await res.json();
        throw result.error;
    }


}

export async function ratingPost(userId, postId) {

    const res = await fetch(`/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ userId })
    });
     if (res.status!==200) {
         const result= await res.json();
         throw result.error;
     };
    
}

export async function getMyAllPosts(userId) {
    const res = await fetch(`/posts/profile/${userId}`);
    const data = await res.json();
    return data;
}