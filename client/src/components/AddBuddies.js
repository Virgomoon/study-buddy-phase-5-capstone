import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import EditUserDetails from './EditUserDetails';
// import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import uuid from 'react-uuid';
import '../App.css';

function AddBuddies({ potentialBuddies, setPotentialBuddies, updateBuddyList, setMyBuddies, getBuddies}) {

  const { currentUser } = useContext(UserContext)

   async function handleAddBuddy(e, buddy){
 
      console.log(buddy)

      const buddyOBJ = {
        user_id: currentUser.id,
        buddy_id: buddy.id
      }

      const buddyCopy = JSON.parse(JSON.stringify(potentialBuddies))
      const filtered =  buddyCopy.filter((bud) => {
        return bud.id !== buddy.id 
      })
      setPotentialBuddies(filtered)
      
      console.log(buddyOBJ)
      await fetch("/buddies", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buddyOBJ),
      }).then((r) => {
         r.json()
         .then((buddy) => {
            console.log(buddy)
          })
      })

    }

    useEffect(()=>{
      fetch("/buddies")
      .then((res)=> res.json())
      .then((data)=> setMyBuddies(data))
    },[setMyBuddies]);
    

    const findBuds = potentialBuddies.map((buddy) =>{
        return (
          <div key={uuid()}>
          <Paper id={buddy.id} >
          <div>{buddy.username}</div>
          <div>{buddy.first_name}</div>
          <div>{buddy.last_name}</div>
          <div>{buddy.email}</div>
          
          <Button variant='contained'onClick={(e)=> handleAddBuddy(e, buddy)}> <AddIcon /> </Button>
          </Paper>
          </div>
          
          )})
    

  return (
    <Box>
      { potentialBuddies ? (<div>{findBuds}</div>) : (<div>Loading...</div>)}
    </Box>
  )
}

export default AddBuddies