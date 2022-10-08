import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userDetails';
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import {Navigate} from 'react-router-dom'
import Header from '../components/Header';

function ViewNotes() {

  const { currentUser } = useContext(UserContext)

  const [ subjectList, setSubjectList ] = useState([])
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
    
    const r = await fetch('/notes');
    const data = r.json();
    return data;
  }

  useEffect(() => {
    
      getNotes().then(function(result) {
        setUserNotes(result);
    });
  }, []);
  console.log(userNotes)

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
      <div key={note.id} id={note.id}  >
          <h2>{note.title}</h2>
          <p>{note.entry}</p>
          <span>Buddies: {note.users.length} </span>

      </div>
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