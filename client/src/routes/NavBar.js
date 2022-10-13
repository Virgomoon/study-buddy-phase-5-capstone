import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


function NavBar() {

  return (
    
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <Divider />
        <ListItem button divider>
          <NavLink to="/new">Notes</NavLink>
        </ListItem>
        <ListItem button>
        <NavLink to="/add_note">New Note</NavLink>
        </ListItem>
        <Divider light />
        <ListItem button>
          <NavLink to="/mybuddies">Buddies</NavLink>
        </ListItem>
        <ListItem button>
          <NavLink to="/add_subject">Add Subject</NavLink>
        </ListItem>
      </List>
    </div>
  )
}

export default NavBar