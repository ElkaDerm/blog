import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOnePost, updatePost } from '../../service/postService.js';


export function EditPage() {

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

        const title = post.title
        const textBody = post.textBody

        updatePost(title, textBody, currentPostId);
        navigate('/blog')

    }



    return (
        <div className="background">


            <div className="form">
                <h3>Update your post</h3>
                <form onSubmit={onSubmit} method='PUT' >
                    <div>
                        <div>
                            <label htmlFor="title">Title:</label>
                        </div>
                        <input type="text" name="title" id="title" value={post.title}
                            onChange={(e) => {
                                setPost((previousState) => ({ ...previousState, title: e.target.value }))
                            }
                            } />
                    </div>
                    <div>
                        <div className="textareaLabel">
                            <label htmlFor="postcontent"> Post text:</label>
                        </div>
                        <textarea name="postcontent" id="postcontent" value={post.textBody}
                            onChange={(e) => setPost((previousState) => ({ ...previousState, textBody: e.target.value }))}
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