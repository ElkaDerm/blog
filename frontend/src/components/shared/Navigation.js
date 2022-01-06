
import React from "react";
import { Link } from "react-router-dom";


export function Navigation () {
    return (
        <nav>

            <Link to='/'>
             <strong>Blog</strong> 
             </Link>

             <ul>
                 <li>
                     <Link to='/blog'>See all posts</Link>
                 </li>
                 <li>
                     <Link to='login'>Log in</Link>
                 </li>
                 <li>
                     <Link to='register'>Register</Link>
                 </li>
             </ul>
        </nav>
    )
}