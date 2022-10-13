import React, {useState} from 'react';
import EditNote from './EditNote';

function NoteCard({id, title, entry, onDeleteNote, onUpdateNote }) {
  const [isEditingNote, setIsEditingNote] = useState(false);

  console.log(id)

  function handleDeleteClick(e) {
    e.preventDefault();

    fetch(`/notes/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
    
    onDeleteNote(id);
    }})
    }
  
    // console.log(title)
    
    return (
      <div>
    {isEditingNote ? (<EditNote 
      id={id}
      entry={entry}
      setIsEditingNote={setIsEditingNote}
      onUpdateNote={onUpdateNote}
    />) : ( 

      <div key={id} id={id}  >
      <h2>{title}</h2>
      <p>{entry}</p>
      {/* <span>Buddies: {note.users.length} </span> */}
      <button onClick={() => setIsEditingNote((isEditingNote) => !isEditingNote)}>
      <span role="img" aria-label="edit">
      ✏️
      </span>
      </button>
      <button onClick={handleDeleteClick}>
      <span role="img" aria-label="delete">
      🗑
      </span>
      </button>
      </div>
      )}
    </div>
    
    )
    
}

export default NoteCard