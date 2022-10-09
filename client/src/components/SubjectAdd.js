import React, {useState, useContext} from 'react'
import { SubjectContext } from '../context/subjectList'

function SubjectAdd({setAddingSubject}) {

    const [newSubject, setNewSubject] = useState("")

    const {setSubjectList} = useContext(SubjectContext)

    function handleAddSubject(e){
        e.preventDefault()

        fetch("/subjects", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({title: newSubject}),
            })
        .then((res)=> res.json())
        .then((added)=> setSubjectList(added))

        setNewSubject("")
      
    }

  return (
    <form onSubmit={handleAddSubject}>
    <input
      type="text"
      name="body"
      autoComplete="off"
      value={newSubject}
      onChange={(e) => setNewSubject(e.target.value)}
    />
    <input type="submit" value="Save" />
  </form>
  )
}

export default SubjectAdd