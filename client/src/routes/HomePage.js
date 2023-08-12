import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { useNavigate } from "react-router-dom";
import BasicCard from '../components/BasicCard';
import Header from '../components/Header';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import '../styles.css';
import '../App.css';
import '../CSS/home.css'



function HomePage() {

    const navigate = useNavigate()
    const { currentUser } = useContext(UserContext)

    const isLoggedin = currentUser.username ? true : false
    // console.log(isLoggedin)

    useEffect(() => {
      
      if (!isLoggedin) {
        return navigate("/userlogin");
      }
    
    }, []);


      const showCard = currentUser ? <BasicCard /> : null

  return (
    <div className='homepage'>
      <div className='head'>
        <Header />
      </div>
      <div className='main'>
        <Main />
        <SideBar />
        
      </div>
    </div>
  )
}

export default HomePage