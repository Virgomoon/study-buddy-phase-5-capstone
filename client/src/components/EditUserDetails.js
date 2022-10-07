import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userDetails';

function EditUserDetails({setIsEditing}) {

    const { currentUser, setCurrentUser} = useContext(UserContext)
    const { id } = currentUser

     const [editedState, setEditedState] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
    });
    // const { username, first_name, last_name, email} = editedState

    console.log(editedState)
    console.log(currentUser)

    function handleFormSubmit(e) {
        e.preventDefault();

        let updatedUser = ({
            ...currentUser, [editedState]: editedState
        })
    
        fetch(`/users/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            updatedUser
          })
        })
          .then((r) => r.json())
          .then((updatedUser) => setCurrentUser(updatedUser));
  
          setIsEditing(false)
      }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={editedState.username}
          onChange={(e) => setEditedState(e.target.value)}
        />
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          autoComplete="off"
          value={editedState.first_name}
          onChange={(e) => setEditedState(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          autoComplete="off"
          value={editedState.last_name}
          onChange={(e) => setEditedState(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={editedState.email}
          onChange={(e) => setEditedState(e.target.value)}
        />
      
        <input type="submit" value="Save" />
      </form>
  )
}

export default EditUserDetails