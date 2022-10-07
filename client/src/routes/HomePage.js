import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';

function HomePage() {

    const navigate = useNavigate()
    const { currentUser, setCurrentUser} = useContext(UserContext)
    
    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        }
      });
    }, []);

    // if (currentUser === null) {
    //   return navigate("/userlogin");
    // } 

    console.log(currentUser)
    // console.log(id)

  return (
    <>
    <Header />
    <FetchUserDetails />
    <NavBar />
    <div>Home Page</div>
    </>
  )
}

export default HomePage