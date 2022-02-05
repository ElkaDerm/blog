import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteOnePost, getOnePost, postRating } from "../../service/postService.js";
import { AuthContext } from "../../context/AuthContext.js";

export function DetailsPage() {
    const { authState } = useContext(AuthContext);
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

        deleteOnePost(post._id)
        console.log('is deleteed from detailsPage');
        navigate('/blog')
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
        await postRating(userId, postId);
        navigate(`/blog`);
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