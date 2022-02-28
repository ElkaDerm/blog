import { create, getAll, getOne, deletePost, update, ratingPost, getMyAllPosts } from "../client/blog-post.js";


export async function createPost (title, postText, userId) {

    try {
        await create (title, postText, userId);

    } catch (error) {
        throw (error);
    }
}

export async function allPostsData () {

    try {
        const result= await getAll();
      
         return result;

    } catch (error) {
        throw (error);
    }
}

export async function getOnePost (postId) {

    try {
        const result= await getOne(postId);
        return result;
        
    } catch (error) {
        throw (error);
    }
}

export async function deleteOnePost (postId, token) {
    try {
        await deletePost (postId);

    } catch (error) {
        throw (error);
    }
}

export async function updatePost(title,textBody, postId, token) {
    try {
        
        await update(postId, title,textBody, token);

    } catch (error) {
        console.log(error)
        throw  (error);
        
    }
}

export async function postRating(userId,postId) {
    try {
        await ratingPost(userId,postId);

    } catch (error) {

        throw (error);
        
    }
}

export async function getMyPosts(userId) {
    try{
      const posts=  await getMyAllPosts(userId);
      return posts;

    }catch (err) {
        throw (err);
    }
}