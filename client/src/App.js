import React from 'react';
import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import ViewNotes from './features/notes/ViewNotes';
import './App.css';
import CreateNotes from './features/notes/CreateNotes';
import ViewBuddies from './features/buddies/ViewBuddies';
import Subjectfilter from './features/notes/Subjectfilter';
import UserDashboard from './features/User/UserDashboard';
import Login from './features/login/Login';
import NavBar from './features/nav/NavBar';
import SignUp from './features/signup/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<UserDashboard />} />
        <Route path="Notes" element={<ViewNotes />} />
        <Route path="MakeNote" element={<CreateNotes />} />
        <Route path="Buddies" element={<ViewBuddies />} />
        <Route path="SubjectFilter" element={<Subjectfilter />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
