import React, {useState, useContext, useEffect} from 'react';
import { SubjectContext } from '../context/subjectList';
import '../App.css';

function SubjectAdd({setAddingSubject}) {

    const [newSubject, setNewSubject] = useState("")
    const [subAdded, setSubAdded] = useState(false)

    const {subjectList, setSubjectList} = useContext(SubjectContext)

    console.log(subjectList)

  //  async function handleAddSubject(e){
  //       e.preventDefault()
  //       setSubAdded((subAdded) => !subAdded)
  //       console.log(subAdded)

  //      await fetch("/subjects", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({title: newSubject}),
  //           }).then((res)=> res.json())
  //       .then((added)=> setSubjectList([...subjectlist, added]))
           
  //       setNewSubject("")
        
  //     }

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
      //  console.log(response.json)
       const result = await response.json().then((added) => setSubjectList([...subjectList, added]))
       console.log(result)
       // console.log(user)
 
       setNewSubject("")
       return result
     } catch (error){
       console.log(error)
     }
   }
      
      // useEffect(() => {
        
        // const res = fetch("/subjects").then((r) => r.json());
        // console.log(subjectlist)
        // setSubjectList(res)
    
  // }, [subAdded]);



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