import React, {useContext} from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import FetchUserDetails from './FetchUserDetails';
import Header from '../components/Header';

function HomePage() {

    // const navTo = useNavigate()
    const { username, id } = useContext(UserContext)
    if (!username) return <Navigate to="/login" />;

    console.log(username)
    console.log(id)

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