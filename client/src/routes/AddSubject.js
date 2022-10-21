import React, { useContext, useState, useEffect } from 'react'
// import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
// import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import SubjectAdd from './SubjectAdd';
import '../App.css';
import '../CSS/home.css'

function AddSubject() {

    const { subjectList, setSubjectList } = useContext(SubjectContext)
    const [subjectArr, setSubArr] = useState(Object.values(subjectList))
    const [newSubject, setNewSubject] = useState("")
    const [subAdded, setSubAdded] = useState(false)

    // console.log(subjectList)
    useEffect(() => {
      setSubArr(Object.values(subjectList))
    
    }, [subjectList]);

    const displaySubjects = subjectArr.map((sub) => (

        <h5 key={sub.id}>{sub.title}</h5>
        )
    )    

    const handleAddSubject = async (e) => {
      try {
     e.preventDefault();
     const response = await fetch("/subjects", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({title: newSubject}),
     })
    //  console.log(response.json)
     const result = await response.json().then((added) => setSubjectList([...subjectList, added]))
     console.log(result)
     // console.log(user)

     setNewSubject("")
     return result
   } catch (error){
     console.log(error)
   }
 }

  return (
    <div className='subjects'>
    <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
    </div>
    <div>AddSubject</div>
    <form onSubmit={handleAddSubject}>
    <input
      type="text"
      name="body"
      autoComplete="off"
      value={newSubject}
      onChange={(e) => setNewSubject(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
    {displaySubjects}
    </div>
  )
}

export default AddSubject