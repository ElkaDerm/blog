import { create } from "../client/blog-post.js";


export async function createPost (title, postText, userId) {

    try {
        await create (title, postText, userId);
        console.log('Post is created!...from postService');


    } catch (error) {
        console.log (error.message)
    }
}