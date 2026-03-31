import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import User from "./pages/User";
import { useState } from "react";

function App() {

  const [users, setUsers] = useState({})
  const [currentUser, setCurrentUser] = useState(null)

  const addUser = (username, password) => {
    let temp = {...users}
    temp[username] = password
    setUsers(temp)
  }

  const loginToUser = (username, password) => {
    setCurrentUser({username: username, password: password})
  }

  const logoutFromUser = () => {
    setCurrentUser(null)
  }

  const changePassword = (username, password) => {
    let temp = {...users}
    temp[username] = password
    setUsers(temp)
    setCurrentUser({username: username, password: password})
  }

  console.log(users)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} loginToUser={loginToUser}/>} />
        <Route path="/login" element={<Login users={users} loginToUser={loginToUser}/>} />
        <Route path="/register" element={<Register users={users} addUser={addUser}/>} />
        <Route path="/user" element={<User user={currentUser} logoutFromUser={logoutFromUser} changePassword={changePassword}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
