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

function AddBuddies({myBuddies, potentialBuddies, setPotentialBuddies,  buddyList, updateBuddyList}) {

  const { currentUser } = useContext(UserContext)

  // const [potentialBuddies, setPotentialBuddies] = useState([])

    //  const getProspects = async () =>{
    
    //     let response = await fetch('/users').then((r) =>{
    //        r.json();
    //     })
    //     console.log(response)
    //     setPotentialBuddies(response);
    //   }
    
    //   useEffect(() => {
        
    //     getProspects();
    
    //   }, []);

    // function resetPotentials(id) {

    //   const toDisplay = Object.values(potentialBuddies).filter((buddy) => { if(buddy.id !== id) return true; })

    //   return toDisplay;
    // }

    // if (potentialBuddies){

    //   potentialBuddies.map(user => {console.log(user.username)
    //     console.log(user.id)})
    //   }
    // console.log(potentialBuddies.filter(buddy => buddy.id !== 2))

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
            updateBuddyList(buddy)
          })
          // console.log(buddy)
          
        // console.log(resetPotentials(e.target.parentNode.parentNode.id))
        // const int = parseInt(e.target.parentNode.parentNode.id)
        // const resetP = resetPotentials(int)
        // setPotentialBuddies(resetP)
      })
      // console.log(potentialBuddies)

    }

    // myBuddies.map(buddy => console.log(buddy.username))
    // const { first_name, last_name, username, email } = myBuddies
    // console.log(first_name)
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