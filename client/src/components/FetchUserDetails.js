import React, { useContext } from 'react';
import { UserContext } from '../context/userDetails';
import '../styles.css';
import '../App.css';

export default function FetchUserDetails() {

    const { currentUser } = useContext(UserContext)
    return (

        <div className='userDetails'>
            {currentUser ? `Welcome ${currentUser.username}` : null}
        </div>
        )
}