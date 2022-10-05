import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userDetails';
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import {Navigate} from 'react-router-dom'
import Header from '../components/Header';

function ViewNotes() {

  const { currentUser } = useContext(UserContext)

  const [ subjectList, setSubjectList ] = useState([])
  const [ selectedSubject, setSelectedSubject ] = useState("")
  const [ userNotes, setUserNotes] = useState([])

  async function getSubjects(){
    
    const r = await fetch('/subjects');
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

// const displayNotes = (
//   <ul className="items">
//         {filteredNotes.map((note) => {
//         return <li key={note.id} name={note.title} >
//           <h3>Title</h3>
//           <h3>{note.title}</h3>
//           <h3>Subject</h3>
//           <h3>{note.subject}</h3>
//           <h3>Entry</h3>
//           <h3>{note.entry}</h3>
//           <h3>{note.vid_url}</h3>
//           <h3>{note.ref_links}</h3>

//         </li>
//         })}
//       </ul>
// )

console.log(selectedSubject)

  return (
    <>
    <Header />
    <div>ViewNotes</div>
    <NavBar />
    <FetchUserDetails />
    {subjectFilter}
    {/* {displayNotes} */}
    </>
  )
}

export default ViewNotes