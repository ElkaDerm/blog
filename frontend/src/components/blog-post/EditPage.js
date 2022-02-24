import { useContext, useEffect, useState } from 'react';
import { NotificationContext } from '../../context/NotificationContext.js';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePost, updatePost } from '../../service/postService.js';


export function EditPage() {

    const {addNotification}= useContext(NotificationContext);
    const navigate = useNavigate();
    
    const [post, setPost] = useState({
        title: '',
        textBody: ''
    });
    const params = useParams();
    const currentPostId = params.postId;
    console.log(currentPostId)


    useEffect(() => {

        async function currentPost(currentPostId) {
            const current = await getOnePost(currentPostId);

            setPost(current);
        }
        currentPost(currentPostId)
    }, [currentPostId]);


    function onSubmit(event) {
        event.preventDefault();

        const title = post.title;
        const textBody = post.textBody;

        if (!title || !textBody) {
            addNotification('All fielsd are requred!');
            return;
        }
        if (title.length<3 || title.length>50) {
            addNotification('Title must contain between 3 and 50 characters!');
            return;
        }
        if (textBody.length<3 || textBody.length>500) {
            addNotification('Text must contain between 3 and 500 characters!');
            return;
        }

        updatePost(title, textBody, currentPostId);
        navigate('/blog')

    }



    return (
        <div className="edit">


            <div className="form">
                <h3>Update your post</h3>
                <form onSubmit={onSubmit} method='PUT' >
                    <div>
                        <div>
                            <label htmlFor="title">Title:</label>
                        </div>
                        <input type="text" name="title" id="title" value={post.title}
                            onChange={(event) => {
                                setPost((previousState) => ({ ...previousState, title: event.target.value }))
                            }
                            } />
                    </div>
                    <div>
                        <div className="textareaLabel">
                            <label htmlFor="postcontent"> Post text:</label>
                        </div>
                        <textarea name="postcontent" id="postcontent" value={post.textBody}
                            onChange={(event) => setPost((previousState) => ({ ...previousState, textBody: event.target.value }))}
                        ></textarea>

                    </div>
                    <div>
                        <button type="submit" >Update</button>
                    </div>

                </form>
            </div>
        </div>
    )
}