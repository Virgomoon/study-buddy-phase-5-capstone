import React from 'react'
import '../App.css';

function EditUsername() {
  return (
    <div>
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
    </div>
  )
}

export default EditUsername
