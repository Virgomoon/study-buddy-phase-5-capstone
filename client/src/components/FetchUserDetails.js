import React, { useContext } from 'react';
import { UserContext } from '../context/userDetails';
import '../CSS/FetchUserDetails.css'
import '../styles.css';
import '../App.css';

export default function FetchUserDetails() {

    const { currentUser } = useContext(UserContext)
    return (

        <div className='navteam' id='one'>
            {currentUser ? `Welcome ${currentUser.username}` : null}
        </div>
        )
}