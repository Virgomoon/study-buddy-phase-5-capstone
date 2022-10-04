import React, { useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { Navigate, useNavigate } from "react-router-dom";

export default function FetchUserDetails() {

    const { currentUser } = useContext(UserContext)
    return <>
        {currentUser ? `Welcome ${currentUser.username}` : null}
    </>
}