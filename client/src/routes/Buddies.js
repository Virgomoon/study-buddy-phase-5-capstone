import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';

function Buddies() {

  const { currentUser } = useContext(UserContext)
  const [myBuddies, setMyBuddies] = useState([])

  async function getBuddies(){
    
    const r = await fetch('/buddies');
    const data = r.json();
    return data;
  }

  
  useEffect(() => {
    
    getBuddies().then(function(result) {
      setMyBuddies(result);
  });

}, []);
  console.log(myBuddies)
  //   console.log(id)
  return (
    <>
    <Header />
    <div>Buddies</div>
    <NavBar />
    <FetchUserDetails />
    </>
  )
}

export default Buddies