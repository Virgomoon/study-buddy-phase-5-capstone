import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';

function HomePage() {

    const navigate = useNavigate()
    const { currentUser, setCurrentUser, currentUserRef } = useContext(UserContext)
    
    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        }
      });
    }, []);

      const showCard = currentUser ? <BasicCard /> : null

    // if (currentUser === null) {
    //   return navigate("/userlogin");
    // } 

    console.log(currentUserRef.current)
    // console.log(id)

  return (
    <>
    <Header />
    <FetchUserDetails />
    <NavBar />
    <h3>Profile Details</h3>
    {showCard}
    </>
  )
}

export default HomePage