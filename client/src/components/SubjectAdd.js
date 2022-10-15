import React, {useState, useContext} from 'react';
import { SubjectContext } from '../context/subjectList';
import '../App.css';

function SubjectAdd({setAddingSubject}) {

    const [newSubject, setNewSubject] = useState("")

    const {subjectlist, setSubjectList} = useContext(SubjectContext)

    // console.log(subjectlist)

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
        .then((added)=> setSubjectList([...subjectlist, added]))

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