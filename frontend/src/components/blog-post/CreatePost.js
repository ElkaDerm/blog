import { createPost } from "../../service/postService.js";
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext.js";




export function CreatePost() {
    const navigate = useNavigate();


    const { authState } = useContext(AuthContext)

    const userId = authState.userId;
    console.log(userId);


    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const title = formData.get('title')
        const postText = formData.get('postcontent')
        if (!title || !postText) {
            alert('all fielsd are requred')
        }
        createPost(title, postText, userId)
        console.log(title, postText)

        navigate('/blog')
    }


    return (
        <div className="create-post">

        
        <div className="form">
            <h3>Create your post</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <div>
                        <label htmlFor="title">Title:</label>
                    </div>
                    <input type="text" name="title" id="title" defaultValue="" />
                </div>
                <div>
                    <div className="textareaLabel">
                        <label htmlFor="postcontent">Write your post:</label>
                    </div>
                    <textarea name="postcontent" id="postcontent" defaultValue="" ></textarea>

                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>

            </form>
        </div>
        </div>
    )
}


