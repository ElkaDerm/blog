import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../context/NotificationContext.js";



export function RegisterPage() {

    const { register } = useContext(AuthContext)
    const navigate = useNavigate()
    const { addNotification } = useContext(NotificationContext)

    function submit(e) {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        let username = formData.get('username');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPass');

        if (!username || !password || !repeatPassword) {
            addNotification('All fields are required!');
            e.currentTarget.username.value = '';
            e.currentTarget.password.value = '';
            e.currentTarget.repeatPass.value = '';
            return;
        }

        if (username.length < 3 || username.length > 20) {
            addNotification('Username must be between 3 and 20 characters!');
            e.currentTarget.username.value = '';
            return;

        }
        if (password.length < 3) {
            addNotification('Password must be at least 3 characters long!');
            e.currentTarget.password.value = '';
            return;
        }
        if (password !== repeatPassword) {
            addNotification('Passwords do not match!');
            e.currentTarget.password.value = '';
            e.currentTarget.repeatPass.value = '';
            return;
        }


        try {

            register(username, password, repeatPassword).then(() => {
                navigate('/')

            })
            console.log('after auth/try')

        } catch (error) {
            addNotification(`${error.message}`)
            console.log('after catch')
            navigate('/register');

        }

        // authenticate(username, password)

        console.log('after authRegister')


    }


    return (

        <div className="register">
            <form onSubmit={submit} method="POST" >
                <h3> Register Form </h3>
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