import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";

export function LoginPage() {

    const { authenticate } = useContext(AuthContext)

    const [state, setState] = useState({
        username: '',
        password: ''
    })
    function onSubmit(e) {
        e.preventDefault();
        console.log('from login')
        console.log(state.username)
        console.log(state.password)
        authenticate(state.username, state.password)



    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor="username">Username:</label>
                </div>
                <input type="text" name="username" value={state.username}
                    onChange={(e) => setState((previousState) => ({ ...previousState, username: e.target.value }))} />
            </div>
            <div>
                <div>
                    <label htmlFor="password">Password:</label>
                </div>
                <input type="password" name="password" value={state.password}
                    onChange={(e) => setState((previousState) => ({ ...previousState, password: e.target.value }))} />
            </div>
            <button type="submit">Log in</button>
        </form>
    )
}