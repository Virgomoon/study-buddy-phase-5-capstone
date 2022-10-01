import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";

export default function SetUserDetails() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    // const [formData, setFormData] = useState({ 
    //   username: "", 
    //   password: "", 
    // });
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const { username, id, setUsername, setId } = useContext(UserContext)

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUsername(user));
        }
      });
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();
  
      await fetch("/login")
        .then((res) => res.json())
        .then((data) => {
          const userSignIn = data.find((user) => user.username === name)
          console.log(userSignIn)
          if(!userSignIn){
            setName("")
            setPassword("")
          return
        }
          if (userSignIn.password  === password) {
            setUserData(userSignIn)
            setUsername(userSignIn.username)
            setId(userSignIn.id)
            // setCurrentUser(userSignIn.username)
  
            navigate("/")
  
          }
          setName("")
          setPassword("")
        })
    }

    // function handleSubmit(e) {
      // e.preventDefault();
    //   useEffect(() => {
    //     fetch("/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password }),
    //     })
    //       .then((r) => r.json())
    //       .then((user) => {
    //         setUsername(user)
    //       });
    //       console.log(username)
    //     //   .then((user) => onLogin(user));  
    // }, [])

      
      // fetch('/users')
      //   .then((r)=> r.json())
      //   .then((data)=> console.log(data))
      
      // useEffect(() => {
      //   fetch("/me").then((response) => {
      //     if (response.ok) {
      //       response.json().then((user) => console.log(user));
      //     }
      //   });
      // }, [username]);

      // useEffect(() => {
      //   fetch("/me").then((response) => {
      //     if (response.ok) {
      //       response.json().then((user) => setId(user.id));
      //     }
      //   });
      // }, [username]);
      
      
      
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
    <h3 onClick={() => navigate('/usersignup')}>Create Account</h3>
    </>)

}