import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';

export default function SetUserDetails() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    
    const { setCurrentUser, currentUser  } = useContext(UserContext)
    
    const navigate = useNavigate()
    
    
    async function handleSubmit(e) {
      e.preventDefault();
      // debugger
      
      await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        }
      })
      navigate('/')
    }
    console.log(currentUser)

    // useEffect(() => {
    //   if (currentUser) {

    //   //  return navigate("/");
    //   }
    // }, []);
    
    return (<>
        <form onSubmit={handleSubmit}>
      <label>
          Username
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
      />
      </label>
      <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      <button onClick={handleSubmit}>Login</button>
    </form>
    <h3 onClick={() => navigate('/usersignup')}>Create Account</h3>
    </>)

}