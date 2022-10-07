import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login() {

  // console.log(username)
  //   console.log(id)

  return (
    <>
    <Header />
    <div>Make Note</div>
    <NavBar />
    <FetchUserDetails />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField
          fullWidth
          id="outlined-textarea"
          label="New Note"
          placeholder="New Note"
          multiline
        />
        </Box>
    </>
  )
}

export default Login