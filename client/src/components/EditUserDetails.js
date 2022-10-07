import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userDetails';

function EditUserDetails({setIsEditing}) {

    // const { currentUser, setCurrentUser} = useContext(UserContext)
    // const { id } = currentUser

    // const [editedState, setEditedState] = useState(...currentUser);
    // const { username, first_name, last_name, email} = editedState

    // console.log(editedState)

    // function handleFormSubmit(e) {
    //     e.preventDefault();
    
    //     fetch(`/users/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         entry: editedState,
    //       }),
    //     })
    //       .then((r) => r.json())
    //       .then((updatedUser) => setCurrentUser(updatedUser));
  
    //       setIsEditing(false)
    //   }

  return (
    <form className="edit-message" >
        <input
          type="text"
          name="username"
          autoComplete="off"
        //   value={username}
        //   onChange={(e) => setEditedState(e.target.value)}
        />
        <input
          type="text"
          name="first_name"
          autoComplete="off"
        //   value={first_name}
        //   onChange={(e) => setEditedState(e.target.value)}
        />
        <input
          type="text"
          name="last_name"
          autoComplete="off"
        //   value={last_name}
        //   onChange={(e) => setEditedState(e.target.value)}
        />
        <input
          type="text"
          name="username"
          autoComplete="off"
        //   value={email}
        //   onChange={(e) => setEditedState(e.target.value)}
        />
      
        <input type="submit" value="Save" />
      </form>
  )
}

export default EditUserDetails