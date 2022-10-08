import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ViewBuddies from '../components/ViewBuddies';
import AddBuddies from '../components/AddBuddies';


function Buddies() {

  const { currentUser } = useContext(UserContext)
  const [myBuddies, setMyBuddies] = useState([])
  const [showBuddies, setShowBuddies] = useState(false);
  const [seeProspects, setSeeProspects] = useState(false)

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

function viewBuddies(){
  setShowBuddies(!showBuddies)
  if(seeProspects){
    return setSeeProspects(!seeProspects)
  }
}

function viewProspects(){
  setSeeProspects(!seeProspects)
  if(showBuddies){
    return setShowBuddies(!showBuddies)
}
}
  console.log(myBuddies)
  //   console.log(id)
  return (
    <>
    <Header />
    <div>Buddies</div>
    <NavBar />
    <FetchUserDetails />
    <Box>
      <Button variant='outlined'
      onClick={viewBuddies}>See Buddies</Button>
      <Button variant='contained'
      onClick={viewProspects}>Add Buddies</Button>
    </Box>
    { showBuddies? (<ViewBuddies myBuddies={myBuddies}/>) : null}
    { seeProspects ? (<AddBuddies />) : null}
    </>
  )
}

export default Buddies