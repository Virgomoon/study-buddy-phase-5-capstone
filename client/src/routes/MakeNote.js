import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login() {

  const [title, setTitle] = useState("")
  const [entry, setEntry] = useState("")
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { subjectList, setSubjectList } = useContext(SubjectContext)
  const [ selectedSubject, setSelectedSubject ] = useState("Math")

  
  
  async function handleSubmit(e) {
      e.preventDefault();
      
      const newNote = ({
        subject_id: subject[0].id, 
        user_id: currentUser.id, 
        title: title, 
        entry: entry
      })
      
      await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      }).then((r) => {
        if (r.ok) {
          r.json().then((note) => console.log(note));
        }
      })
      setTitle("")
      setEntry("")
    }
    
    const subject = subjectList.filter((sub)=> sub.title === selectedSubject)
    console.log(subject[0].id)
    
  const subjectFilter = (
    <div className='header'>
    <div className='title-container'>
        <div className='title'>Subject</div>
    </div>
    <div className='select-container'>
        <label>Select Subject</label>
        <select name="category" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            {subjectList.map((sub) => (
                <option key={sub.id} subject_id={sub.id} value={sub.title}>{sub.title}</option>
                ))}
        </select> 
    </div>
  </div>) 


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
      {subjectFilter}

      <TextField
        required
        id="outlined-required"
        label="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>

    <TextField
          fullWidth
          id="outlined-textarea"
          label="Add Note"
          // placeholder="New Note"
          value={entry}
          multiline
          onChange={(e) => setEntry(e.target.value)}
        />

        <Button type='submit' variant='contained' onClick={handleSubmit}>Submit</Button>
        </Box>
    </>
  )
}

export default Login