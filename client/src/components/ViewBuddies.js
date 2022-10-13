import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import EditUserDetails from './EditUserDetails';
import { useNavigate } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import BuddyNotes from './BuddyNotes';
import uuid from 'react-uuid';

function ViewBuddies({myBuddies, onDeleteBuddy}) {

  const [showBuddyNotes, setShowBuddyNotes] = useState(false)
  const [clickedId, setClickedId] = useState("")
  

  const handleClick = (e) => {
    setShowBuddyNotes((showBuddyNotes) => !showBuddyNotes);
    console.log(e.target.parentNode.id)
    setClickedId(e.target.parentNode.id)
  }

    // myBuddies.map(buddy => console.log(buddy.username))
    // const { first_name, last_name, username, email } = myBuddies
    myBuddies.map((buddy)=> {console.log(buddy)})

    const displayBuds = myBuddies.map((buddy) =>{
        return (
        <div key={uuid()}>
          <Paper id={buddy.id} >
            <h4>{buddy.buddy.username}</h4>
            <h4>{buddy.buddy.first_name}</h4>
            <h4>{buddy.buddy.last_name}</h4>
            <h4>{buddy.buddy.email}</h4>
            <Button variant='contained' onClick={onDeleteBuddy}><RemoveIcon /></Button>
            <Button variant='outlined' onClick={handleClick}>Buddy Notes</Button>  
          </Paper>
        </div>
            
        )}) 

        // () => setShowBuddyNotes((showBuddyNotes) => !showBuddyNotes)
        // console.log(clickedId)

  return (
    <div>
      {
        showBuddyNotes ? (<BuddyNotes setShowBuddyNotes={setShowBuddyNotes} clickedId={clickedId}/>) :
        <div>{displayBuds}</div>
      }
    </div>
  )
}

export default ViewBuddies