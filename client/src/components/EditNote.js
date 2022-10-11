import React, { useState } from 'react'

function EditNote({id, entry, setIsEditingNote, onUpdateNote}) {

    const [editedNote, setEditedNote] = useState(entry);

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entry: editedNote,
        }),
      })
        .then((r) => r.json())
        .then((updatedNote) => onUpdateNote(updatedNote));

        setIsEditingNote(false)
    }

  return (
    
    <form className="edit-message" onSubmit={handleFormSubmit}>
    <input
      type="text"
      name="body"
      autoComplete="off"
      value={editedNote}
      onChange={(e) => setEditedNote(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
  )
}

export default EditNote