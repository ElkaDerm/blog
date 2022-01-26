import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { authRegister } from "../../service/authService.js";
import { useNavigate } from "react-router-dom"



export function RegisterPage() {

    const { authenticate } = useContext(AuthContext)
    const navigate = useNavigate()

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

        authenticate(username, password)
        console.log('after authRegister')

        navigate('/')

    }


    return (

        <div className="container">
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
        </div>
    )
}