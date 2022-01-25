import { create, getAll } from "../client/blog-post.js";


export async function createPost (title, postText, userId) {

    try {
        await create (title, postText, userId);
        console.log('Post is created!...from postService');


    } catch (error) {
        console.log (error.message)
    }
}

export async function allPostsData () {

    try {
        const result= await getAll()
        console.log('from  postService')
        
        
          return result;

    } catch (error) {
        console.log (error.message)
    }
}