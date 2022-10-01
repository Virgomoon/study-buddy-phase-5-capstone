import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";

export default function FetchUserDetails() {

    const { username } = useContext(UserContext)
    return <>
        {username ? `Welcome ${username}` : <Navigate to="/userlogin" />}
    </>
}