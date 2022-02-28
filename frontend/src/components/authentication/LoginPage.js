import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../context/NotificationContext.js";
import { types } from '../../context/NotificationContext.js';



export function LoginPage() {

    const { authenticate } = useContext(AuthContext)
    const { addNotification } = useContext(NotificationContext)
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();



    function onSubmit(e) {
        e.preventDefault();
        console.log('from login')
        const username = state.username;
        const password = state.password;
        
        authenticate(username, password)
            .then(() => {
                addNotification('You are loged in!', types.success);
                setTimeout(() => {
                    navigate('/blog');

                }, 3000)
            })
            .catch(err => {
                addNotification(`${err.message}`, types.error)
                navigate('/login')
            })

        // authenticate(state.username, state.password);

    }


    return (
        <div className="login">
            <h3>Log in</h3>
            <form onSubmit={onSubmit}>
                <div>

                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={state.username}
                        onChange={(e) => setState((previousState) => ({ ...previousState, username: e.target.value }))} />

                </div>
                <div>

                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={state.password}
                        onChange={(e) => setState((previousState) => ({ ...previousState, password: e.target.value }))} />

                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}