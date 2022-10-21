import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userDetails'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditUserDetails from './EditUserDetails';
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../CSS/home.css'

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
    <Card sx={{ minWidth: 275 }} className='basicCard'>
      <CardContent>
        {isEditing ? (<EditUserDetails
          setIsEditing={setIsEditing}
        />) : (
            <div>
            <div className="actions" id="username">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Username: {currentUserRef.current.username}
                </Typography>
               
            </div>
            <div className="actions">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                First Name: {currentUserRef.current.first_name}
                </Typography>
             
            </div>
            <div className="actions">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Last Name: {currentUserRef.current.last_name}
                </Typography>
             
            </div>
            <div className="actions">
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email: {currentUserRef.current.email}
                </Typography>
              
            </div>
            </div>
        )}
        
      </CardContent>
      <CardActions className='button'>
        <Button variant='contained' 
        size="small"
        onClick={deleteUser}
        >Delete Profile
        </Button>
      </CardActions>
    </Card>
  );
}
