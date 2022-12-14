import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SubjectAdd from './SubjectAdd';
import '../App.css';
import '../CSS/home.css'


function MakeNote() {

  const [title, setTitle] = useState("")
  const [entry, setEntry] = useState("")
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { subjectList, setSubjectList } = useContext(SubjectContext)
  const [ selectedSubject, setSelectedSubject ] = useState("Math")
  const [ addingSubject, setAddingSubject ] = useState(false)
  const [subjectArr, setSubArr] = useState(Object.values(subjectList))

  useEffect(() => {
    setSubArr(Object.values(subjectList))
  
  }, [subjectList]);
  
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
      
      const subject = subjectArr.filter((sub)=> sub.title === selectedSubject)
  
    
  const subjectFilter = (
    <div className='header'>
    <div className='title-container'>
    </div>
    <div className='select-container'>
        <label>Select Subject</label>
        <select name="category" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            {subjectArr.map((sub) => (
                <option key={sub.id} subject_id={sub.id} value={sub.title}>{sub.title}</option>
                ))}
        </select> 
    </div>
  </div>) 

  const displaySubjectAdd = addingSubject ? 
  <SubjectAdd 
  setAddingSubject={setAddingSubject} /> : null

  return (
    <div className='make-note'>
    <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
      </div>

    <div>Make Note</div>
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
          value={entry}
          multiline
          onChange={(e) => setEntry(e.target.value)}
        />

        <Button type='submit' variant='contained' onClick={handleSubmit}>Submit</Button>
        </Box>
    </div>
  )
}

export default MakeNote