import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { getUsers } from './userSlice'
import { v4 as uuidv4 } from 'uuid';

function UserDashboard() {

    const users = useSelector(({users}) => users)
    // console.log(users)

    // console.log(getUsers)

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     // auto-login
    //     fetch("/me").then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) => setUser(user));
    //       }
    //     });
    //   }, []);

    // console.log(user)

    // const fetchedData = usersIndex.map((item) => {
    //     return (
    //         <div key={item.id}>
    //             <h3>{item.first_name}</h3>
    //             <h3>{item.last_name}</h3>
    //             <h3>{item.username}</h3>
    //             <h3>{item.id}</h3>
    //             <h3>{item.email}</h3>
    //         </div>
    //     )
    // })

    // const displayUser = [
        
    //             < div key = { uuidv4() } >
    //                 <h3>{showUser.first_name}</h3>
    //                 <h3>{showUser.last_name}</h3>
    //                 <h3>{showUser.username}</h3>
    //                 <h3>{showUser.id}</h3>
    //                 <h3>{showUser.email}</h3>
    //             </div >
    //     ]

return (
    <div>
        <h1>Study Buddy</h1>
       
        <h2>What will you learn today?</h2>
        
        
    </div>
)
}

export default UserDashboard