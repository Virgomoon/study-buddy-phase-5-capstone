import React, {useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userDetails';

function Header() {

    const { setUsername } = useContext(UserContext)

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUsername(null));
      }
    
      return (
        <>
        {/* <div className="nav">
                    <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    UserDashboard
                    </NavLink>
                    <NavLink to="/view_notes" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        View Notes
                    </NavLink>
                    <NavLink to="/add_note" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Create Note
                    </NavLink>
                    <NavLink to="/buddies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Buddies
                    </NavLink>
        </div> */}
              <button onClick={handleLogout}>Logout</button>
        </>
      )
}

export default Header