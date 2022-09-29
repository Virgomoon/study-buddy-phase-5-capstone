import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { UserProvider } from "./context/userDetails";
import Header from "./components/Header";
import Buddies from "./routes/Buddies";
import SetUserDetails from "./routes/SetUserDetails";
import FetchUserDetails from "./routes/FetchUserDetails";
import HomePage from "./routes/HomePage";
import MakeNote from "./routes/MakeNote";
import SignUp from "./routes/SignUp";
import ViewNotes from "./routes/ViewNotes";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/user", element: <FetchUserDetails /> },
  {path: "/login", element: <SetUserDetails />},
  {path: "/view_notes", element: <ViewNotes />},
  {path: "/add_note", element: <MakeNote /> },
  {path: "/signup", element: <SignUp />},
  {path: "/buddies", element: <Buddies />}
]);

function App() {
  return (
    <UserProvider>
      <Header />
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;