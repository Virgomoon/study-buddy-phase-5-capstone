import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import uuid from 'react-uuid';
import '../App.css';

function BuddyNotes({setShowBuddyNotes, clickedId}) {

  const [listBuddyNotes, setListBuddyNotes] = useState([])
  const [notesExist, setNotesExist] = useState(false)
  
  
  async function getBuddyNotes(){
    
    const r = await fetch(`/mybuddynotes/${clickedId}`);
    const data = await r.json();
      if(data){ setNotesExist(true) }
    return data;
  }
  
  useEffect(() => {
    
    getBuddyNotes().then(function(result) {
      setListBuddyNotes(result);
    });
    
  }, []);
  console.log(notesExist)
  console.log(clickedId)

  const displayBuddyNotes = listBuddyNotes ? listBuddyNotes.map((note)=> {
    return(   
          <div key={uuid()}>
          <Paper id={note.id} >
            <h4>{note.title}</h4>
            <p>{note.entry}</p> 
          </Paper>
        </div>
      )
    }) : <div>No notes to display</div>

    console.log(notesExist)
  
  return (
    <Box>
    <div>BuddyNotes</div>
    { notesExist ? displayBuddyNotes : <div>No notes to display</div>}
    <Button variant='contained' onClick={() => setShowBuddyNotes((showBuddyNotes) => !showBuddyNotes)}>Go Back</Button>
    </Box>
  )
}

export default BuddyNotes