import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {

  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  

  // function handleChange(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  function handleAddUser(e){
    e.preventDefault()

    let newAdd = ({
      first_name: firstName, 
      last_name: lastName, 
      username: username, 
      email: email, 
      password: password, 
      password_confirmation: passwordConfirm
    })

    console.log(e.target.value)

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdd),
      })
  .then((res)=> res.json())
  .then((added)=> console.log(added))

    setFirstName("")
    setLastName("")
    setUserName("")
    setEmail("")
    setPassword("")
    setPasswordConfirm("")

    navigate("/userlogin")
   
  }

  return (
    <div className="sign-up">
    <h1 className="heading"> Create Account</h1>
    <Box
     component="form"
     sx={{
       '& .MuiTextField-root': { m: 1, width: '25ch' },
     }}>
      <div>

        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />

        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue={username}
          onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          required
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <TextField
          id="outlined-password-input"
          label="Password Confirmation"
          type="password"
          required
          defaultValue={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <Button type='submit' variant='contained'
        onClick={handleAddUser}>Submit</Button>

    </Box>

    <Button variant='outlined' onClick={()=> navigate("/userlogin")}>Go Back</Button>
      {/* <form className="form" onSubmit={handleAddUser}>
      <label>
            First Name
          <input
          type="text"
          name="first_name"
          required
          value={formData.first_name}
          onChange={handleChange}
          />
          </label>
          <label>
              Last Name
          <input
          type="text"
          name="last_name"
          required
          value={formData.last_name}
          onChange={handleChange}
          />
          </label>
          <label>
              Username
          <input
          type="text"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
          />
          </label>
          <label>
              Email
          <input
          type="text"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          />
          </label>
          <label>
              Password
          <input
          type="text"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          />
          </label>
          <label>
              Password Confirmation
          <input
          type="text"
          name="password_confirmation"
          required
          value={formData.password_confirmation}
          onChange={handleChange}
          />
          </label>
      <Button variant='contained'>Submit</Button>
      </form>
      <Button variant='outlined' onClick={()=> navigate("/userlogin")}>Go Back</Button> */}
  </div>
  )
}

export default SignUp