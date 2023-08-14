import React from 'react';
import FetchUserDetails from './FetchUserDetails';
import LoginButton from './LoginButton';
import '../App.css';
import '../CSS/Header.css'

function Header() {

    function Title(){
        return(
            <div className='header_title'>
                <h3>
                    Study Buddy
                </h3>
            </div>
        )
    }

  return (

    <div className="header">
        <FetchUserDetails />
        <Title />
        <LoginButton />
    </div>
    
  )
}

export default Header