import { create } from "../client/blog-post.js";


export async function createPost (title, postText) {

    try {
        await create (title, postText);
        console.log('Post is created!...from postService');


    } catch (error) {
        console.log (error.message)
    }
}