import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function User(props) {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const logout = () => {
        props.logoutFromUser()
        navigate("/")
    }

    const changePassword = () => {
        if (oldPassword != props.user.password) {
            setError("Incorrect old password")
        }
        else {
            if (oldPassword == newPassword) {
                setError("Cannot reuse password")
            }
            else {
                props.changePassword(props.user.username, newPassword)
                setError("Successfully changed password!")
            }
        }
    }

    if (props.user == null) {
        return (
            <>
                <h3>You are not logged in as any user. Please <Link to={"/"}>return</Link> to login page.</h3>
            </>
        )
    }
    else {
        return (
            <>
                <div className={"centered-body"}>
                    <div className={"stacked-items"}>
                        <h3>You are logged in as {props.user.username}</h3>
                        <b>Change Password?</b>
                        <label style={{alignSelf: "flex-start"}}>Old Password:</label>
                        <input type="password" id="oldPassword" name="oldPassword" onChange={(e) => setOldPassword(e.target.value)}></input>
                        <label style={{alignSelf: "flex-start"}}>New Password:</label>
                        <input type="password" id="newPassword" name="newPassword" onChange={(e) => setNewPassword(e.target.value)}></input>
                        <button onClick={changePassword}>Change Password</button> 
                        <button onClick={logout}>Logout</button>
                        {error ? error : null}
                    </div>
                </div>
            </>
        )
    }

}

export default User