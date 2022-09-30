import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";

export default function SetUserDetails() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const { username, id, setUsername, setId } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        })
          .then((r) => r.json())
          .then((user) => setUsername(user));
        //   .then((user) => onLogin(user));  
      }

      useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setId(user.id));
          }
        });
      }, [username]);
      
      
      
      const handleSetName = () => {
        setUsername(name)
        setId(id)
        navigate("/")
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      <button onClick={handleSetName}>Login</button>
    </form>
    </>)

}