import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteOnePost, getOnePost } from "../../service/postService.js";
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

    function buttonSwitch(userId, owner) {


        if (!userId) {

            return (
                ''
            )
        } else {
            if (owner) {

                const ownerId = owner._id

                if (ownerId === userId) {
                    return (<ul>

                        <li>
                            <Link to={`/edit/${postId}`}>Edit</Link>
                        </li>
                        <li>
                            <Link to={`/blog`} onClick={deleteFunc}>Delete</Link>
                        </li>

                    </ul>

                    )
                } else {
                    return (
                        <ul>
                            <li>
                                <Link to={`/blog/rating/${postId}`} >Like</Link>
                            </li>
                        </ul>
                    )

                }


            }
        }




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

            {buttonSwitch(userId, owner)}

            <span> {post.likeCount?.length} likes</span>



        </div>

    )
}