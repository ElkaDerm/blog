import { createPost } from "../../service/postService.js";
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext.js";
import { NotificationContext } from "../../context/NotificationContext.js";



export function CreatePost() {
    const navigate = useNavigate();
    const { authState } = useContext(AuthContext);
    const {addNotification}= useContext(NotificationContext);

    const userId = authState.userId;


    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const title = formData.get('title');
        const postText = formData.get('postcontent');

        if (!title || !postText) {
            addNotification('All fielsd are requred!');
 
            return;
        }
        if (title.length<3 || title.length>100) {
            addNotification('Title must contain between 3 and 100 characters!');

            return;
        }
        if (postText.length<3 || postText.length>15000) {
            addNotification('Text must contain between 3 and 15000 characters!');
  
            return;
        }

        createPost(title, postText, userId).then(()=>navigate('/blog'))
        .catch(error=>{
            console.log(error)
            addNotification(error)
        });

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


