import React, {useEffect, useState} from 'react'

function Subjectfilter() {

    const [subjectList, setSubjectList] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/subjects")
            .then((res) => res.json())
            .then((data) => setSubjectList(data))
    }, []);

    console.log(subjectList)

  return (
    <div>Subjectfilter</div>
  )
}

export default Subjectfilter