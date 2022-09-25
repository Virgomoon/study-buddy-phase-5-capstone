import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './userSlice'

function UserDashboard() {

    const users = useSelector(({users}) => users)
    console.log(users)

    console.log(getUsers)

    const [showUser, setShowUser] = useState([])

    

    useEffect(() => {
        fetch("http://localhost:3000/users/1")
            .then((res) => res.json())
            .then((data) => setShowUser(data))
    }, []);

    // console.log(showUser)

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

    const displayUser = [
        
                < div key = { showUser.id } >
                    <h3>{showUser.first_name}</h3>
                    <h3>{showUser.last_name}</h3>
                    <h3>{showUser.username}</h3>
                    <h3>{showUser.id}</h3>
                    <h3>{showUser.email}</h3>
                </div >
        ]

return (
    <div>
        <div>UserDashboard</div>
        {/* {fetchedData} */}
        <h2>UserShow</h2>
        {displayUser}
    </div>
)
}

export default UserDashboard