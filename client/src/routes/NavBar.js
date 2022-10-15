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
// const routeList = ["/", "/new", "/add_note", "/mybuddies", "/add_subject" ]

const [value, setValue] = useState(0);


const handleChange = (event, newValue) => {
  setValue(newValue)
}

console.log(value)
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
        <LinkTab label="Home" value={0} href="/" />
        <LinkTab label="Notes" value={1} href="/new"  />
        <LinkTab label="New Note" value={2} href="/add_note" />
        <LinkTab label="Buddies" value={3} href="/mybuddies" />
        <LinkTab label="Add Subject" value={4} href="/add_subject" />
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