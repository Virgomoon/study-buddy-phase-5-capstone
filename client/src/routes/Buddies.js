import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from './FetchUserDetails';
import Header from '../components/Header';

function Buddies() {
  // console.log(username)
  //   console.log(id)
  return (
    <>
    <Header />
    <div>Buddies</div>
    <NavBar />
    <FetchUserDetails />
    </>
  )
}

export default Buddies