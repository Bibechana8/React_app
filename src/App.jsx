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
      element:<Home/>,
    },
    {
      path: "/Login",
      element:<Login/>,
    },
    {
      path: "/About",
      element:<About/>,
    },
  ])
  return(
    <>
    <Message/>
    <ListGroup/>
    <Navbar/>
    <RouterProvider router={router} />
    </>
  );
  
}

export default App;