import React from 'react';
import FetchUserDetails from './FetchUserDetails';
import LoginButton from './LoginButton';

function Header() {

    function Title(){
        return(
            <div>Study Buddy</div>
        )
    }

  return (
    <>
        <FetchUserDetails />
        <Title />
        <LoginButton />
    </>
  )
}

export default Header