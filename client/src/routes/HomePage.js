import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from './FetchUserDetails';
import Header from '../components/Header';

function HomePage() {

    // const navTo = useNavigate()
    const { username, setUsername, id } = useContext(UserContext)
    if (!username) return <Navigate to="/userlogin" />;

    

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