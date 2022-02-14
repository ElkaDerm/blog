
import {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext.js';
import { getMyPosts } from '../../service/postService.js';
import { OnePostHome } from './OnePostHome.js';


export function ProfilePage () {
    const {authState} = useContext(AuthContext);
    const [myPosts, setMyPosts] =useState([]);
    const userId= authState.userId;


    useEffect( ()=>{

        async function getPosts (userId) {

            const posts= await getMyPosts(userId);
            
            setMyPosts(posts);
        }
        getPosts(userId);
      
    },[userId])

    return (
            <div className='grid-container'>
                {myPosts.length===0 ? <p>No posts found!</p>
                          : myPosts.map(x=> <OnePostHome key={x.title} data={x}/>)
                }
            </div>
    )
}