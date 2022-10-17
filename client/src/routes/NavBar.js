import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import '../styles.css'
import '../App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
function NavBar() {
const navigate = useNavigate()

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(props.href)
        // setValue(props.index)
      }}
      {...props}
    />
  );
}

const [value, setValue] = useState(0);


const handleChange = (event, newValue) => {
  setValue(newValue)
}

// console.log(value)
// const handleCallToRouter = (value) => {
//   // setTab(value)
//   return navigate(value);
// }

// handleCallToRouter(tab)
// useEffect(()=>{
//   // console.log(tab)
//   handleCallToRouter(tab)
// },[tab])

  return (
    
    <div className='navteam' id='two'>
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        // indicatorColor="secondary"
        // aria-label="secondary tabs example"
      >
        <LinkTab label="Home" href="/" />
        <LinkTab label="Notes" href="/new"  />
        <LinkTab label="New Note" href="/add_note" />
        <LinkTab label="Buddies" href="/mybuddies" />
        <LinkTab label="Add Subject" href="/add_subject" />
      </Tabs>
    </Box>
      {/* <List sx={style} component="nav" aria-label="mailbox folders">
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
      </List> */}
    </div>
  )
}

export default NavBar