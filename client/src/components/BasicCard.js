import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditUserDetails from './EditUserDetails';
import { useNavigate } from "react-router-dom";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {

    
    const [isEditing, setIsEditing] = useState(false);
    
    const { currentUser, setCurrentUser, currentUserRef } = useContext(UserContext)
    
    useEffect(() => {
        if (!currentUser) return "";
      }, [])

    const navigate = useNavigate();

    function deleteUser() {
        
        fetch(`/users/${currentUser.id}`, {
        method: "DELETE",
      })

        setCurrentUser(null)
        navigate("/userlogin")
    }
    
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {isEditing ? (<EditUserDetails
          setIsEditing={setIsEditing}
        />) : (
            <div>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Username: {currentUserRef.current.username}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                First Name: {currentUserRef.current.first_name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Last Name: {currentUserRef.current.last_name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email: {currentUserRef.current.email}
                </Typography>
            </div>
        )}
        
      </CardContent>
      <CardActions>
        <Button 
            variant='outlined' 
            size="small"
            onClick={() => setIsEditing((isEditing) => !isEditing)}
            >Edit Profile
        </Button>
        <Button variant='contained' 
        size="small"
        onClick={deleteUser}
        >Delete Profile
        </Button>
      </CardActions>
    </Card>
  );
}
