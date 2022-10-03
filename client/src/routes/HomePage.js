import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from './FetchUserDetails';
import Header from '../components/Header';

function HomePage() {

    // const navTo = useNavigate()
    const { currentUser, setCurrentUser, id } = useContext(UserContext)
    
    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        }
      });
    }, []);

    if (currentUser === null) return <Navigate to="/userlogin" />;

    // console.log(username)
    // console.log(id)

  return (
    <>
    <Header />
    <div>HomePage</div>
    <NavBar />
    <FetchUserDetails />
    </>
  )
}

export default HomePage