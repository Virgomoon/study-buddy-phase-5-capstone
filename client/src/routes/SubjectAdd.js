import React, {useState, useContext} from 'react';
import { SubjectContext } from '../context/subjectList';
import '../App.css';

function SubjectAdd() {

    const [newSubject, setNewSubject] = useState("")

    const {subjectList, setSubjectList} = useContext(SubjectContext)

    console.log(subjectList)

      const handleAddSubject = async (e) => {
        try {
       e.preventDefault();
       const response = await fetch("/subjects", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({title: newSubject}),
       })
       const result = await response.json().then((added) => setSubjectList([...subjectList, added]))
 
       setNewSubject("")
       return result
     } catch (error){
       console.log(error)
     }
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