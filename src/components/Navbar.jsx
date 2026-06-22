import {NavLink} from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink className={(e)=>{return e.isActive ? 'red' : '' }}to="/">Home</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive ? 'red' : '' }}to ="/about">About</NavLink></li>
        <li><NavLink className={(e)=>{return e.isActive ? 'red' : '' }}to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;