import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from '../components/FetchUserDetails';
import Header from '../components/Header';


function Login() {

  // console.log(username)
  //   console.log(id)

  return (
    <>
    <Header />
    <div>Make Note</div>
    <NavBar />
    <FetchUserDetails />
    </>
  )
}

export default Login