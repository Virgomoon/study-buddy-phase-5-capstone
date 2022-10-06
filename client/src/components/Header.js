import React, {useContext } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import { UserContext } from '../context/userDetails';
import FetchUserDetails from './FetchUserDetails';
import NavBar from '../routes/NavBar';

function Header() {

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate()


    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setCurrentUser(null));
        navigate('/userlogin')
      }
    
      return (
        <>
        <nav className="nav">
                    <h3> 
                      Study Buddy
                    </h3>
                    {/* UserDashboard
                    </NavLink>
                    <NavLink to="/view_notes" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        View Notes
                    </NavLink>
                    <NavLink to="/add_note" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Create Note
                    </NavLink>
                    <NavLink to="/buddies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Buddies
                    </NavLink> */}
        </nav>
              <button onClick={handleLogout}>Logout</button>

        {/* <FetchUserDetails /> */}
        {/* <NavBar /> */}
        </>
      )
}

export default Header