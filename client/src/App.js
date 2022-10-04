import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import Header from "./components/Header";
import Buddies from "./routes/Buddies";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./components/FetchUserDetails";
import HomePage from "./routes/HomePage";
import MakeNote from "./routes/MakeNote";
import SignUp from "./routes/SignUp";
import ViewNotes from "./routes/ViewNotes";
import './App.css';
import NavBar from "./routes/NavBar";
// import { useContext, useEffect } from 'react'
// import { UserContext } from './context/userDetails'

const router = createBrowserRouter([
  {
    path: "/", element: <HomePage />,
  },
  { path: "/user", element: <FetchUserDetails /> },
  { path: "/userlogin", element: <SetUserDetails />},
  { path: "/view_notes", element: <ViewNotes />},
  { path: "/add_note", element: <MakeNote /> },
  { path: "/usersignup", element: <SignUp />},
  { path: "/mybuddies", element: <Buddies />},
  { path: "/nav", element: <NavBar />},
  { path: "/header", element: <Header />}
]);

function App() {

  // const { setUsername } = useContext(UserContext)

  

  return (
    <UserProvider>
        <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
