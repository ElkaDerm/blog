import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteOnePost, getOnePost, postRating } from "../../service/postService.js";
import { AuthContext } from "../../context/AuthContext.js";
import {NotificationContext} from "../../context/NotificationContext.js"

export function DetailsPage() {
    const { authState } = useContext(AuthContext);
    const {addNotification}= useContext(NotificationContext)
    const navigate = useNavigate();
    const userId = authState.userId;
    const params = useParams()

    const [post, setPost] = useState({});

    const postId = params.postId;


    useEffect(() => {
        async function onePost(postId) {

            const post = await getOnePost(postId);
            console.log(post.owner._id)
            setPost(post);

        }
        onePost(postId)


    }, [postId]);


    const owner = post.owner;

    async function deleteFunc(e) {
        e.preventDefault();

        deleteOnePost(post._id).then(()=>{
        //    TODO: asking :Are you shure?
        console.log ('deleted...details page')
            navigate('/blog');
        }).catch(error=>{
            addNotification(error)
        })
   
    }

    
    function likeButton() {
        
        const likes = post.likeCount?.find(x => x._id === userId);
        
        const isOwner = userId === post.owner?._id;
    
        if (!likes && !isOwner) {
            return (<ul>
                <li>
                <Link to='' onClick={rating}>Like</Link>
                </li>
            </ul>)
        }

    }

    async function rating(e) {
        e.preventDefault();
        await postRating(userId, postId).then(()=>{
            navigate('/blog');
        }).catch(err=>{
            addNotification(err)
        })
        
    }


    return (
        <div className="details">
            <span id="author">Author : {owner ? owner.username : ''}</span>
            <h3>{post.title}</h3>
            <section>
                <p>
                    {post.textBody}

                </p>
            </section>

            {userId && (userId === post.owner?._id
                ? <ul>

                    <li>
                        <Link to={`/edit/${postId}`}>Edit</Link>
                    </li>
                    <li>
                        <Link to={`/blog`} onClick={deleteFunc}>Delete</Link>
                    </li>

                </ul>
                : (likeButton())
              

            )}

            <span> {post.likeCount?.length} likes</span>

        </div>

    )
}