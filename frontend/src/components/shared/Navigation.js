
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";


export function Navigation() {


    const { authState } = useContext(AuthContext);
    console.log('from navigation')
    console.log(authState.username)

    const greetingText = authState.username;
    const isAuthenticated = authState && authState.isAuthenticated;

    const navigationSwitch = isAuthenticated ? (
        <ul>
            <li id="home">
                <Link to='/'>
                    <strong>Blog</strong>
                </Link>

            </li>
            <li>

                <Link to='profile' id="greeting">Wellcome, {greetingText} !</Link>
            </li>
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
            <li id="home">
                <Link to='/'>
                   <strong>Blog</strong> 
                </Link>
            </li>
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
        <nav >

            {/* <Link to='/'>
                <strong>Blog</strong>
            </Link> */}

            {navigationSwitch}


        </nav>
    )
}