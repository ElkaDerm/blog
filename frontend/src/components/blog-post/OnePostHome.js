
import React from "react";
import { Link } from "react-router-dom";

export function OnePostHome({data}) {

  console.log (data)

    return (
    
            <div className="onePost">
                <div className="author">
                    <h4>Author: Put</h4>
                </div>
                <div>
                    <h3>{data.title} </h3>
                    <article>
                        {data.textBody}
                        
                    </article>
                </div>
                <div>
                    
                    <button type="button">
                    <Link to={`/blog/${data._id}`}>Details</Link>
                   </button>    
                         
                    <span> Like count: </span>

                </div>
            </div>


    )
}