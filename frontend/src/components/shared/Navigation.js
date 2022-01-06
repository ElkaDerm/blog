
import React from "react";
import { Link } from "react-router-dom";


export function Navigation () {

    const isAuthenticated=true;

    const navigationSwitch = isAuthenticated ? (
        <ul>
            <li>

            <Link to='/blog'>See all posts</Link>
            </li>
            <li>

            <Link to='logout'>Log out</Link>
            </li>
        </ul>
    ) : (
        <ul>

                 <li>
                     <Link to='login'>Log in</Link>
                 </li>
                 <li>
                     <Link to='register'>Register</Link>
                 </li>
        </ul>
    )
    


    return (
        <nav>

            <Link to='/'>
             <strong>Blog</strong> 
             </Link>

            {navigationSwitch}
        </nav>
    )
}