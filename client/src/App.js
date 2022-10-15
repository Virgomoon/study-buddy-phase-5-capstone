import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import { SubjectProvider } from "./context/subjectList";
import Header from "./components/Header";
import Buddies from "./routes/Buddies";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./components/FetchUserDetails";
import HomePage from "./routes/HomePage";
import MakeNote from "./routes/MakeNote";
import SignUp from "./routes/SignUp";
import ViewNotes from "./routes/ViewNotes";
import AddSubject from "./routes/AddSubject";
import './App.css';
import './CSS/home.css'
import NavBar from "./routes/NavBar";
import { redirect } from "react-router-dom";
import { useContext, useEffect } from 'react'
import { UserContext } from './context/userDetails'
import { useNavigate } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", element: <HomePage />,
  },
  { path: "/user", element: <FetchUserDetails /> },
  { path: "/userlogin", element: <SetUserDetails />},
  { path: "/new", element: <ViewNotes />},
  { path: "/add_note", element: <MakeNote /> },
  { path: "/usersignup", element: <SignUp />},
  { path: "/mybuddies", element: <Buddies />},
  { path: "/nav", element: <NavBar />},
  { path: "/header", element: <Header />},
  { path: "/add_subject", element: <AddSubject />}
]);

function App() {

  return (
    <UserProvider>
      <SubjectProvider>
        <RouterProvider router={router} />
      </SubjectProvider>
    </UserProvider>
  );
}

export default App;
