import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import BuddyNotes from './BuddyNotes';
import uuid from 'react-uuid';
import '../App.css';

function ViewBuddies({myBuddies, onDeleteBuddy}) {

  const [showBuddyNotes, setShowBuddyNotes] = useState(false)
  const [clickedId, setClickedId] = useState("")
  

  const handleClick = (e) => {
    setShowBuddyNotes((showBuddyNotes) => !showBuddyNotes);
    setClickedId(e.target.parentNode.id)
  }

    const displayBuds = myBuddies.map((buddy) =>{
        return (
        <div key={uuid()}>
          <Paper id={buddy.id} >
            <h4>{buddy.buddy.username}</h4>
            <h4>{buddy.buddy.first_name}</h4>
            <h4>{buddy.buddy.last_name}</h4>
            <h4>{buddy.buddy.email}</h4>
            <Button variant='contained' onClick={(e)=> onDeleteBuddy(e, buddy)}><RemoveIcon /></Button>
            <Button variant='outlined' onClick={handleClick}>Buddy Notes</Button>  
          </Paper>
        </div>
            
        )}) 

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