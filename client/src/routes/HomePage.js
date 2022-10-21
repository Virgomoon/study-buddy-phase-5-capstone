import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
import '../styles.css';
import '../App.css';
import '../CSS/home.css'



function HomePage() {

    const navigate = useNavigate()
    const { currentUser } = useContext(UserContext)

    const isLoggedin = currentUser.username ? true : false

    useEffect(() => {
      
      if (!isLoggedin) return navigate("/userlogin");
    
    }, []);


      const showCard = currentUser ? <BasicCard /> : null

  return (
    <div className='homepage'>
      <div className='head'>
        <FetchUserDetails />
        <NavBar />
        <Header />
      </div>
      <div className='main'>
        <h3>Profile Details</h3>
        {showCard}
      </div>
    </div>
  )
}

export default HomePage