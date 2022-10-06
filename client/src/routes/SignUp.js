import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ 
    first_name: "", 
    last_name: "", 
    username: "", 
    email: "", 
    password: "", 
    password_confirmation:"",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddUser(e){
    e.preventDefault()

    let newAdd = ({
      first_name: e.target.first_name.value, 
      last_name: e.target.last_name.value, 
      username: e.target.username.value, 
      email: e.target.email.value, 
      password: e.target.password.value, 
      password_confirmation: e.target.password_confirmation.value,

    })

    setFormData({
      first_name: "", 
      last_name: "", 
      username: "", 
      email: "", 
      password: "", 
      password_confirmation:"",
      })

      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdd),
        })
    .then((res)=> res.json())
    .then((added)=> console.log(added))

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
          defaultValue={formData.first_name}
          onChange={handleChange}
          />

        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue={formData.last_name}
          onChange={handleChange}
          />

        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue={formData.username}
          onChange={handleChange}
          />
        </div>

        <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue={formData.email}
          onChange={handleChange}
          />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          required
          defaultValue={formData.password}
          onChange={handleChange}
          />

        <TextField
          id="outlined-password-input"
          label="Password Confirmation"
          type="password"
          required
          defaultValue={formData.password_confirmation}
          onChange={handleChange}
          />
        </div>

        <Button variant='contained'>Submit</Button>

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