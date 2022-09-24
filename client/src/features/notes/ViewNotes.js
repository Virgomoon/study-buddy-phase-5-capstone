import React , {useEffect, useState} from 'react'

function ViewNotes() {


    const [allNotes, setAllNotes] = useState([])
    const [userNotes, setUserNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/notes")
            .then((res) => res.json())
            .then((data) => setAllNotes(data))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/notes/1")
            .then((res) => res.json())
            .then((data) => setUserNotes(data))
    }, []);

    // console.log(allNotes)
    // console.log(userNotes)

  return (
    <div>
        <div>ViewNotes</div>

    </div>
  )
}

export default ViewNotes