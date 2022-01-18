import { useState } from "react";

import { authRegister } from "../../service/authService.js";




export function RegisterPage() {


    function submit(e) {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPass');

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match!');
        }

        authRegister(username, password);
        // TODO : direct log in


        console.log('after authRegister')
    }


    return (
        <form onSubmit={submit} method="POST" >
            <div>
                <div>
                    <label htmlFor="username">Username:</label>
                </div>
                <input type="text" name="username" defaultValue=''
                />
            </div>
            <div>
                <div>
                    <label htmlFor="password">Password:</label>
                </div>
                <input type="password" name="password" defaultValue=''
                />
            </div>
            <div>
                <div>
                    <label htmlFor="repeatPass">Repeat password:</label>
                </div>
                <input type="password" name="repeatPass" defaultValue=''

                />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}