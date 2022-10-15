import React, { useContext, useState, useEffect } from 'react'
// import { UserContext } from '../context/userDetails';
import { SubjectContext } from '../context/subjectList';
// import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import SubjectAdd from '../components/SubjectAdd';
import '../App.css';
import '../CSS/home.css'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import ViewBuddies from '../components/ViewBuddies';
// import AddBuddies from '../components/AddBuddies';

function AddSubject() {

    const { subjectList, setSubjectList } = useContext(SubjectContext)
    const [subjectArr, setSubArr] = useState(Object.values(subjectList))

    const displaySubjects = subjectArr.map((sub) => (

        <h5 key={sub.id}>{sub.title}</h5>
        )
    )    

  return (
    <>
    <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
    </div>
    <div>AddSubject</div>
    <SubjectAdd />
    {displaySubjects}
    </>
  )
}

export default AddSubject