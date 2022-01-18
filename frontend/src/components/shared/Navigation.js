
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";


export function Navigation() {


    const { authState } = useContext(AuthContext);
    console.log('from navigation')
    console.log(authState)
    const isAuthenticated = authState && authState.isAuthenticated

    const navigationSwitch = isAuthenticated ? (
        <ul>
            <li>

                <Link to='/blog'>See all posts</Link>
            </li>

            <li>
                <Link to='create'>Create post</Link>
            </li>
            <li>
                <Link to='logout'>Log out</Link>
            </li>
        </ul>
    ) : (
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