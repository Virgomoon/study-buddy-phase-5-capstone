import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userDetails';
import '../App.css';

function EditUserDetails({setIsEditing}) {

    const { currentUser } = useContext(UserContext)
    const { id } = currentUser

     const [editedState, setEditedState] = useState(currentUser);

    console.log(editedState)
    console.log(id)

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`/users/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            [e.target.name]: e.target.value
          })
        })
          .then((r) => r.json())
          .then((updatedUser) => console.log(updatedUser));
  
          setIsEditing(false)
      }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          defaultValue={editedState.username}
          onChange={(e) => setEditedState(e.target.value)}
        />
       
      
        <input type="submit" value="Save" />
      </form>
  )
}

export default EditUserDetails