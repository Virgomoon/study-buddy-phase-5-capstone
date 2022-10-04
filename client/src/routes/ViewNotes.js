import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails';
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import {Navigate} from 'react-router-dom'
import Header from '../components/Header';

function ViewNotes() {

  const { currentUser } = useContext(UserContext)

  async function getNotes(){
    
    const r = await fetch('/notes');
    const data = r.json();
    return data;
  }

  getNotes().then(function(result) {
    console.log(result);
});
  // useEffect(() => {
      
  //   }, []);

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