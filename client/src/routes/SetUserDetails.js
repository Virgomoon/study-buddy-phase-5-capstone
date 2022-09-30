import React, { useState, useContext } from 'react'
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";

export default function SetUserDetails() {
    const [name, setName] = useState("")
    const [pw, setPw] = useState("")
    const navigate = useNavigate()



    const { setUsername, setPassword } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, pw }),
        })
          .then((r) => r.json())
          .then((user) => setUsername(user));
        //   .then((user) => onLogin(user));
          
      }

    const handleSetName = () => {
        setUsername(name)
        setPassword(pw)
        navigate("/user")
    }

    return (<>
        <form onSubmit={handleSubmit}>
      <label>
          Username
          <input
            type="text"
            name="username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
      />
      </label>
      <label>
          Password
          <input
            type="password"
            name="password"
            required
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </label>
      <button onClick={handleSetName}>Login</button>
    </form>
    </>)

}