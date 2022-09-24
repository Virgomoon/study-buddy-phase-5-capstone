import React, { useEffect, useState } from 'react'

function ViewBuddies() {

    const [buddiesIndex, setBuddiesIndex] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/buddies")
            .then((res) => res.json())
            .then((data) => setBuddiesIndex(data))
    }, []);

    console.log(buddiesIndex)

  return (
    <div>ViewBuddies</div>
  )
}

export default ViewBuddies