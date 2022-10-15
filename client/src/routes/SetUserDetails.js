import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css';
import '../CSS/home.css'

export default function SetUserDetails() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const {  currentUser, setCurrentUser } = useContext(UserContext)
    
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
       try {
      e.preventDefault();
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
      
      const user = await response.json()
      setCurrentUser(user)
      navigate('/')
    } catch (error){
      console.log(error)
    }
  }

    return (
    <div className='sign-in'>

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

    </div>)

}