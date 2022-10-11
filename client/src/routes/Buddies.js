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
// import AddIcon from '@mui/icons-material/Add';


function Buddies() {

  const { currentUser } = useContext(UserContext)
  const [myBuddies, setMyBuddies] = useState([])
  const [showBuddies, setShowBuddies] = useState(false);
  const [seeProspects, setSeeProspects] = useState(false)

  async function getBuddies(){
    
    const r = await fetch(`/buddies/${currentUser.id}`);
    const data = await r.json();
    return data;
  }

  useEffect(() => {
    
    getBuddies().then(function(result) {
      setMyBuddies(result);
  });

}, []);

function updateBuddyList(newBud) {
  setMyBuddies(myBuddies=> [...myBuddies, newBud] )
}

function viewBuddies(){
  setShowBuddies(!showBuddies)
  if(seeProspects){
    return setSeeProspects(!seeProspects)
  }
}

function deleteBuddies(e){
  
  e.preventDefault()

  fetch(`/buddies/${e.target.parentNode.parentNode.id}`, {
    method: "Delete"
  }).then((r) => {
    if (r.ok) {
    filterBuddyList(e.target.parentNode.parentNode.id)
  }})
  
  // console.log(e.target.parentNode.parentNode.id)
}

function viewProspects(){
  setSeeProspects(!seeProspects)
  if(showBuddies){
    return setShowBuddies(!showBuddies)
}
}

  function filterBuddyList(id) {
    const newList = myBuddies.filter((buddy)=>{
      if(buddy.id !== id) return true;
    })

    return newList
  }
  // console.log(myBuddies)
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
    { showBuddies? (<ViewBuddies myBuddies={myBuddies} onDeleteBuddy={deleteBuddies}/>) : null}
    { seeProspects ? (<AddBuddies updateBuddyList={updateBuddyList} />) : null}
    </>
  )
}

export default Buddies