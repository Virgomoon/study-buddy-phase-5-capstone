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

function ViewBuddies({myBuddies}) {

    myBuddies.map(buddy => console.log(buddy.username))
    // const { first_name, last_name, username, email } = myBuddies
    // console.log(first_name)
    const displayBuds = myBuddies.map((buddy) =>{
        return (
        <div key={buddy.id}>
            <div>{buddy.username}</div>
            <div>{buddy.first_ame}</div>
            <div>{buddy.last_name}</div>
            <div>{buddy.email}</div>
        </div>
            
        )})
  return (
    <div>{displayBuds}</div>
  )
}

export default ViewBuddies