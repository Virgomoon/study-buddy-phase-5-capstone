import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from '../routes/NavBar';
import FetchUserDetails from './FetchUserDetails';
import Header from './Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ViewBuddies from './ViewBuddies';
import AddBuddies from './AddBuddies';

function BuddyNotes({setShowBuddyNotes}) {

  // const navigate = useNavigate();

  return (
    <Box>
    <div>BuddyNotes</div>
    <Button variant='contained' onClick={() => setShowBuddyNotes((showBuddyNotes) => !showBuddyNotes)}>Go Back</Button>
    </Box>
  )
}

export default BuddyNotes