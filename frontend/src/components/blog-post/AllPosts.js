
import { allPostsData } from "../../service/postService.js"

import { useState, useEffect } from "react";
import { OnePostHome } from "./OnePostHome.js";


export function AllPosts() {


    console.log(`from AllpostPage .....`)

    const [state, setState] = useState([]);

    useEffect(() => {

        async function data() {
            const result = await allPostsData();

            setState(result)

        }
        data()

    }, [])


    console.log(state)



    return (

        <div className="grid-container">

            {!state ? <p>No posts found!</p>
                : state.map(x => <OnePostHome key={x._id} data={x} />)}

        </div>


    )
}