import React, {useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles.css'
import { UserContext } from '../context/userDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../App.css';
import '../CSS/FetchUserDetails.css'

function LoginButton() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate()


    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setCurrentUser(null));
        navigate('/userlogin')
      }
    
      return (
        <Box className="navteam" id='three'>
        
              <Button variant='contained' onClick={handleLogout}>Logout</Button>

        </Box>
      )
}

export default LoginButton