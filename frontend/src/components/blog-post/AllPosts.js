
import { allPostsData } from "../../service/postService.js"

import { useState, useEffect } from "react";



export function AllPosts () {
    

    console.log (`from AllpostPage .....`)
    
    const [state, setState] = useState([]);

    useEffect( ()=>{

        async function data() {
            const result= await allPostsData()
            setState(result)

        }
        data()
        
    }, [])
    
     

    console.log (state)



    return (
        <div>

            {!state ? <p>Not created posts in DB</p>
            :state.map(x => <p key={x.title}>{x.title}</p>)}

        </div>

    
    )
}