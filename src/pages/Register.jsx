import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [registered, setRegistered] = useState(false)
    const [error, setError] = useState(null)

    const register = () => {
        if (username == "") {
            setError("Please enter a username")
        }
        else if (password == "") {
            setError("Please enter a password")
        }
        else if (username in props.users) {
            setError("Username already exists")
        }
        else if (password != password2) {
            setError("Passwords do not match")
        }
        else {
            props.addUser(username, password)
            setError(<span>Registered! Click <Link to="/">HERE</Link> to return to Login</span>)
            setRegistered(true)
        }
    }

    return (
        <>
            <div className={"centered-body"}>
                <div className={"stacked-items"}>
                    <h3>Register</h3>
                    <label style={{alignSelf: "flex-start"}}>Username:</label>
                    <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}></input>
                    <label style={{alignSelf: "flex-start"}}>Password:</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <label style={{alignSelf: "flex-start"}}>Re-enter Password:</label>
                    <input type="password" id="password2" name="password2" onChange={(e) => setPassword2(e.target.value)}></input>
                    <button disabled={registered} style={{width: "50%", alignSelf: "center"}} onClick={register}>Register</button>
                    {error ? error : null}
                </div>
            </div>
        </>
    )
}

export default Register