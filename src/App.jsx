import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import { createBrowserRouter, RouterProvider  } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar /> <Home/></>
    },
    {
      path: "/Login",
      element:<><Navbar /> <Login/></>
    },
    {
      path: "/About",
      element:<><Navbar /> <About/></>
    },
  ])
  return(
    <>
    <Message/>
    <ListGroup/>
    <RouterProvider router={router} />
    </>
  );
  
}

export default App;