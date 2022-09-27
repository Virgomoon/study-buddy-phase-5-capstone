import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar({onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <>
    <div className="nav">
                <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                UserDashboard
                </NavLink>
                <NavLink to="/Notes" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    View Notes
                </NavLink>
                <NavLink to="/MakeNote" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Create Note
                </NavLink>
                <NavLink to="/Buddies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Buddies
                </NavLink>
    </div>
          <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default NavBar