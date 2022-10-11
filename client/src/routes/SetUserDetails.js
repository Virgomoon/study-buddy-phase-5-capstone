import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SetUserDetails() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // const [loggedIn, setLoggedIn] = useState(false)
    
    const {  currentUser, setCurrentUser } = useContext(UserContext)
    
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
    // console.log(currentUserRef.current)

    // useEffect(() => {
    //   if (currentUser) {

    //    return navigate("/");
    //   }
    // }, []);
    
    return (<>

      <h1 className="heading"> Welcome, to Studdy Buddy!</h1>
      <h2>Login to your Account</h2>

    <Box component="form"
     sx={{
       '& .MuiTextField-root': { m: 1, width: '25ch' },
     }}>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </div>

      <Button variant='contained' onClick={handleSubmit}>Login</Button>
      
    </Box>

    <Button onClick={() => navigate('/usersignup')}>Create Account</Button>

    </>)

}