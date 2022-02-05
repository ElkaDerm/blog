import { create, getAll, getOne, deletePost, update, ratingPost } from "../client/blog-post.js";


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

export async function getOnePost (postId) {

    try {
        const result= await getOne(postId);
        return result;
        
    } catch (error) {
        console.log (error.message)
    }
}

export async function deleteOnePost (postId, token) {
    try {
        await deletePost (postId)
       console.log(`post is deleted...`)

    } catch (error) {
        console.log (error.message)
    }
}

export async function updatePost(title,textBody, postId, token) {
    try {
        
        await update(postId, title,textBody, token);
        console.log('post ist updated ....postService')

    } catch (error) {
        console.log (error.message)
        
    }
}

export async function postRating(userId,postId) {
    try {
        await ratingPost(userId,postId)

        console.log('post is rated!')
    } catch (error) {

        console.log(error.message)
        
    }
}