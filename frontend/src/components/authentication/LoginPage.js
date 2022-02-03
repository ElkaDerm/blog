import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { useNavigate } from "react-router-dom";


export function LoginPage() {

    const { authenticate } = useContext(AuthContext)

    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();


    function onSubmit(e) {
        e.preventDefault();
        console.log('from login')
        console.log(state.username)
        console.log(state.password)
        authenticate(state.username, state.password)

        navigate('/blog')


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