import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import EditNote from '../components/EditNote';
import NoteCard from '../components/NoteCard';
import {Navigate} from 'react-router-dom'
import Header from '../components/Header';

function ViewNotes() {

  const { currentUser } = useContext(UserContext)
  const { subjectList, setSubjectList } = useContext(SubjectContext)
  const [ selectedSubject, setSelectedSubject ] = useState("Math")
  const [ userNotes, setUserNotes] = useState([])
  

  async function getSubjects(){
    
    const r = await fetch("/subjects");
    const data = r.json();
    return data;
  }

  useEffect(() => {
      getSubjects().then(function(result) {
        setSubjectList(result);
    });
    
  }, []);
  console.log(subjectList)

  async function getNotes(){
    
    const r = await fetch(`/notes/${currentUser.id}`);
    const data = r.json();
    return data;
  }

  useEffect(() => {
    
      getNotes().then(function(result) {
        setUserNotes(result);
    });
  }, []);
  console.log(userNotes)

  function handleDeleteNote(id) {
    const updatedNotes = userNotes.filter((note) => note.id !== id);
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
      <div className='title'>Subject</div>
  </div>
  <div className='select-container'>
      <label>Select Subject</label>
      <select name="category" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
          {subjectList.map((sub) => (
              <option key={sub.id} id={sub.id} value={sub.title}>{sub.title}</option>
              ))}
      </select> 
  </div>
</div>) 

const filteredNotes = userNotes.filter((note) => note.subject.title  ===  selectedSubject);

// onClick={renderSeries}

const displayNotes = filteredNotes.map((note)=> {
  return(
    
        <NoteCard key={note.id}
          id={note.id}
          entry={note.entry}
          onDeleteNote={handleDeleteNote}
          onUpdateNote={handleUpdateNotes}
        /> 
        
    )
  })

console.log(selectedSubject)

  return (
    <>
    <Header />
    <div>ViewNotes</div>
    <NavBar />
    <FetchUserDetails />
    {subjectFilter}
    {displayNotes}
    
    </>
  )
}

export default ViewNotes