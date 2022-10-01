import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails';
import NavBar from './NavBar';
import FetchUserDetails from './FetchUserDetails';
import {Navigate} from 'react-router-dom'
import Header from '../components/Header';

function ViewNotes() {

  const { username } = useContext(UserContext)

  fetch('/user_notes')
    .then((r)=>{r.json()})
    .then((data)=>{console.log(data)})

  return (
    <>
    <Header />
    <div>ViewNotes</div>
    <NavBar />
    <FetchUserDetails />
    </>
  )
}

export default ViewNotes