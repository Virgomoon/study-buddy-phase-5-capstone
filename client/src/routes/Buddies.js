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
  const [potentialBuddies, setPotentialBuddies] = useState([])
  
  const [showBuddies, setShowBuddies] = useState(false);
  const [seeProspects, setSeeProspects] = useState(false)


     const getProspects = async () =>{
    
        const response = await fetch('/users');
        const data = await response.json()
        console.log(data)
        setPotentialBuddies(data);
        return data
      }
    
      useEffect(() => {
        
        getProspects();
    
      }, []);

  async function getBuddies(){
    
    const r = await fetch("/buddies");
    const data = await r.json();
    return data;
  }

  useEffect(() => {
    
    getBuddies().then(function(result) {
      setMyBuddies(result);
  });

}, []);

function updateBuddyList(newBud) {
  if(myBuddies.find((data) => data.id === newBud.id)) {
    alert("You are already buds!")
  } else {
    const newBuddyList = [...myBuddies, newBud]
    setMyBuddies(newBuddyList)
  }
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
    const newList = myBuddies.filter((buddy)=> buddy.id !== id);
    setMyBuddies(newList)
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
    { showBuddies? (<ViewBuddies myBuddies={myBuddies}  onDeleteBuddy={deleteBuddies}/>) : null}
    { seeProspects ? (<AddBuddies potentialBuddies={potentialBuddies} setPotentialBuddies={setPotentialBuddies} updateBuddyList={updateBuddyList} />) : null}
    </Box>
    </>
  )
}

export default Buddies