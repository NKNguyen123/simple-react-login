import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

function Login(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const login = () => {
    if (props.users[username] == password) {
      props.loginToUser(username, password)
      navigate("/user")
    }
    else {
      setError("Username or password incorrect")
    }
  }

  const forgotPassword = () => {
    if (username in props.users) {
        console.log("Password for user " + username + " is " + props.users[username])
    }
    else {
        console.log("User " + username + " does not exist")
    }
  }

  return (
    <div className={"centered-body"}>
      <div className={"stacked-items"}>
        <h3>Login</h3>
        <label style={{alignSelf: "flex-start"}}>Username:</label>
        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}></input>
        <label style={{alignSelf: "flex-start"}}>Password:</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
        <button style={{width: "50%", alignSelf: "center"}} onClick={login}>Login</button>
        <span>Don't have an account? <Link to="/Register">Sign up</Link></span>
        <span>Forgot password? Click <span style={{color: "blue", textDecoration: "underline", cursor: "pointer"}} onClick={forgotPassword}>here</span></span>
        {error ? error : null}
      </div>
    </div>
  )
}

export default Login