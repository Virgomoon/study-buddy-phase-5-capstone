import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditUserDetails from './EditUserDetails';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';

function AddBuddies({myBuddies, buddyList, updateBuddyList}) {

    const [potentialBuddies, setPotentialBuddies] = useState([])
    const { currentUser, setCurrentUser, currentUserRef } = useContext(UserContext)

    async function getProspects(){
    
        const r = await fetch('/users');
        const data = await r.json();
        return data;
      }
    
      useEffect(() => {
        
        getProspects().then(function(result) {
          setPotentialBuddies(result);
      });
    
    }, []);

    function resetPotentials(id) {

      const toDisplay = Object.values(potentialBuddies).filter((buddy) => { if(buddy.id !== id) return true; })

      return toDisplay;
    }

    // console.log(potentialBuddies.map(buddy => buddy.id))
    // console.log(potentialBuddies.filter(buddy => buddy.id !== 2))

   async function handleAddBuddy(e){

      const buddyObj = {
        user_id: currentUser.id,
        buddy_id: e.target.parentNode.parentNode.id
      }

      await fetch("/buddies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buddyObj),
      }).then((r) => {
         r.json()
         .then((buddy) => {
            updateBuddyList(buddy)
            // console.log(buddy)
          })
          
        
        // console.log(resetPotentials(e.target.parentNode.parentNode.id))
        const n = resetPotentials(e.target.parentNode.parentNode.id)
        setPotentialBuddies(n)
        // console.log(potentialBuddies)
      })

    }

    // myBuddies.map(buddy => console.log(buddy.username))
    // const { first_name, last_name, username, email } = myBuddies
    // console.log(first_name)
    const findBuds = potentialBuddies.map((buddy) =>{
        return (
          <div key={buddy.id}>
        <Paper id={buddy.id} >
            <div>{buddy.username}</div>
            <div>{buddy.first_ame}</div>
            <div>{buddy.last_name}</div>
            <div>{buddy.email}</div>
          
           <Button variant='contained'onClick={handleAddBuddy}> <AddIcon /> </Button>
        </Paper>
          </div>
            
        )})

  return (
    <Box>
      <div>{findBuds}</div>
    </Box>
  )
}

export default AddBuddies