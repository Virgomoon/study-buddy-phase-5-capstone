import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userDetails'
import { useNavigate } from "react-router-dom";

export default function SetUserDetails() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState([])
    // const [formData, setFormData] = useState({ 
    //   username: "", 
    //   password: "", 
    // });
    // const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const { setCurrentUser, setId  } = useContext(UserContext)

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user));
        }
      });
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();
  
      await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        // setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUserData(user));
        // } else {
        //   r.json().then((err) => setErrors(err.errors));
        setCurrentUser(userData.username)
        setId(userData.id)
        setUserName("")
        setPassword("")
        navigate("/")
      }
      })
    }
    
    // const handleSetName = () => {
    //   setUsername(name)
    //   setId(id)
    //   navigate("/")
    // }
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
      
      
      
      
    return (<>
        <form onSubmit={handleSubmit}>
      <label>
          Username
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
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
      <button onClick={handleSubmit}>Login</button>
    </form>
    <h3 onClick={() => navigate('/usersignup')}>Create Account</h3>
    </>)

}