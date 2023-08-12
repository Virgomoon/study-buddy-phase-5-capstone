import React, { useState, useEffect } from 'react'
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/LoginButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ViewBuddies from '../components/ViewBuddies';
import AddBuddies from '../components/AddBuddies';
import '../App.css';
import '../CSS/home.css'



function Buddies() {

  // const { currentUser } = useContext(UserContext)
  const [myBuddies, setMyBuddies] = useState([])
  const [potentialBuddies, setPotentialBuddies] = useState([])
  const [buddyDelete, setBuddyDelete] = useState(false)
  
  const [showBuddies, setShowBuddies] = useState(false);
  const [seeProspects, setSeeProspects] = useState(false)


     const getProspects = async () =>{
    
        const response = await fetch('/users');
        const data = await response.json()
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

}, [buddyDelete]);


function updateBuddyList(newBud) {
  if(myBuddies.find((data) => data.id === newBud.id)) {
    const newBuddyList = [...myBuddies, newBud]
    return setMyBuddies(newBuddyList)
  }
}

function viewBuddies(){
  setShowBuddies(!showBuddies)
  if(seeProspects){
    return setSeeProspects(!seeProspects)
  }
}

function deleteBuddies(e, buddy){
  e.preventDefault()
  setBuddyDelete((buddyDelete) => !buddyDelete)
  console.log(buddyDelete)
  
  fetch(`/buddies/${buddy.id}`, {
    method: "Delete"
  }).then((r) => {
    if (r.ok) {
    }})
    filterBuddyList(buddy.id)
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

  return (
    <div className='buddies'>
    <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
      </div>
    <div>Buddies</div>
    <Box>
      <Button variant='outlined'
      onClick={viewBuddies}>See Buddies</Button>
      <Button variant='contained'
      onClick={viewProspects}>Add Buddies</Button>
    { showBuddies? (<ViewBuddies setBuddyDelete={setBuddyDelete} myBuddies={myBuddies}  onDeleteBuddy={deleteBuddies}/>) : null}
    { seeProspects ? (<AddBuddies potentialBuddies={potentialBuddies} setPotentialBuddies={setPotentialBuddies} updateBuddyList={updateBuddyList} setMyBuddies={setMyBuddies} getBuddies={getBuddies}/> ) : null}
    </Box>
    </div>
  )
}

export default Buddies