import React, {useContext} from 'react';
import { UserContext } from '../context/userDetails';
import { Navigate, useNavigate } from "react-router-dom";

function HomePage() {

    // const navTo = useNavigate()
    const { username } = useContext(UserContext)
    if (!username) return <Navigate to="/login" />;

  return (
    <div>HomePage</div>
  )
}

export default HomePage