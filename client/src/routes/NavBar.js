import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
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
      }}
      {...props}
    />
  );
}

const [value, setValue] = useState(0);


const handleChange = (event, newValue) => {
  setValue(newValue)
  // console.log(newValue)
}

  return (
    
    <div className='navteam' id='two'>
      <Box sx={{ width: '100%' }} style={{ textDecoration: "none" }} >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        // indicatorColor="secondary"
        // aria-label="secondary tabs example"
      >
        <LinkTab label="Home" href="/"/>
        <LinkTab label="Notes" href="/new"/>
        <LinkTab label="New Note" href="/add_note"/>
        <LinkTab label="Buddies" href="/mybuddies"/>
        <LinkTab label="Add Subject" href="/add_subject"/>
      </Tabs>
    </Box>
    </div>
  )
}

export default NavBar