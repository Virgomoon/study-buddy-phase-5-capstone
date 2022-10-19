import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
import NavBar from './NavBar';
import '../App.css';
import FetchUserDetails from '../components/FetchUserDetails';
// import EditNote from '../components/EditNote';
import NoteCard from '../components/NoteCard';
// import {Navigate} from 'react-router-dom'
import Header from '../components/Header';
import '../CSS/home.css'

function ViewNotes() {

  const { currentUser } = useContext(UserContext)
  const { subjectList, setSubjectList } = useContext(SubjectContext)
  const [ selectedSubject, setSelectedSubject ] = useState("Math")
  const [ userNotes, setUserNotes] = useState([])
  const [subjectArr, setSubArr] = useState(Object.values(subjectList))

  useEffect(() => {
    setSubArr(Object.values(subjectList))
  
  }, [subjectList]);

  console.log(subjectList)

  async function getNotes(){
    
    const r = await fetch('/mynotes');
    const data = await r.json();
    return data;
  }

  useEffect(() => {
    
      getNotes().then(function(result) {
        setUserNotes(result);
    });
  }, []);

  function handleDeleteNote(id) {
    const updatedNotes = userNotes.filter((note) =>{ 
      if(note.id !== id) return true;
    });
    setUserNotes(updatedNotes);
  }

  function handleUpdateNotes(updatedNoteObj) {
    const updatedNotes = userNotes.map((note) => {
      if (note.id === updatedNoteObj.id) {
        return updatedNoteObj;
      } else {
        return note;
      }
    });
    setUserNotes(updatedNotes);
  }

  const subjectFilter = (
  <div className='header'>
  <div className='title-container'>
      {/* <div className='title'>Subject</div> */}
  </div>
  <div className='select-container'>
      <label>Select Subject</label>
      <select name="category" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          { subjectArr?.map((sub) => (
              <option key={sub.id} id={sub.id} value={sub.title}>{sub.title}</option>
              )) }
      </select> 
  </div>
</div>) 

const filteredNotes = userNotes.filter((note) => note.subject.title  ===  selectedSubject);

const displayNotes = filteredNotes.map((note)=> {
  return(
    
        <NoteCard key={note.id}
          id={note.id}
          title={note.title}
          entry={note.entry}
          onDeleteNote={handleDeleteNote}
          onUpdateNote={handleUpdateNotes}
        /> 
        
    )
  })

  return (
    <>
    <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
    </div>
    <div className='notes'>
      <div>Your Notes</div>
      {subjectFilter}
      {displayNotes}
    </div>
    
    </>
  )
}

export default ViewNotes