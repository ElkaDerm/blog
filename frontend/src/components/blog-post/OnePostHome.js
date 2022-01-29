
import React from "react";
import { Link } from "react-router-dom";

export function OnePostHome({data}) {

  console.log (data)

    return (
    
            <div className="onePost">
                <div className="author">
                    <h4>Author: Putname</h4>
                </div>
                <div>
                    <h3 className="onePostTitle">{data.title} </h3>
                    <article>
                        {data.textBody}
                        
                    </article>
                </div>
                <div className="likeButton">
             
                    <button type="button">
                    <Link to={`/blog/${data._id}`}>Details</Link>
                   </button>    
                    <span> Like count: 4444444 </span>

                </div>
            </div>


    )
}