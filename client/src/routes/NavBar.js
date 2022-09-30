import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {

  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/view_notes">Notes</NavLink>
        <NavLink to="/add_note">New Note</NavLink>
        <NavLink to="/buddies">Buddies</NavLink>
    </div>
  )
}

export default NavBar